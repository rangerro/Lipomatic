import { Injectable } from "@angular/core";
import { createModel } from "vosk-browser";
import { VoskVanillaResult } from "../models/vosk";


@Injectable({  providedIn: 'root',})

export class VoskService {
    
    private model!: import('vosk-browser').Model;

    async init(): Promise<void> {
        const url = 'assets/vosk/vosk-model-small-en-us-0.15.zip'
        this.model = await createModel(url);
    }

    async transcribe(input: File): Promise<VoskVanillaResult> {
        const arrayBuffer = await input.arrayBuffer();

        const audioContext = new AudioContext({sampleRate: 16000});
        const audio = await audioContext.decodeAudioData(arrayBuffer);
        await audioContext.close();

        const recognizer = new this.model.KaldiRecognizer(16000);

        recognizer.acceptWaveform(audio);
        recognizer.setWords(true);

        const result = await new Promise<any>(resolve => {
        recognizer.on('result', resolve);
        recognizer.retrieveFinalResult();
        });

        const resultExplicit: VoskVanillaResult = result as VoskVanillaResult;

        recognizer.remove();

        return resultExplicit;
    }
}

export interface WordRegion {
    word: string,
    start: number,
    end: number,
}