export interface VoskPartialResult {
    word: string;
    start: number;
    end: number;
    conf: number;
}

export interface VoskResult {
    words: VoskPartialResult[];
}

export interface VoskVanillaResult {
    event: string;
    recognizerId: string;
    result: {
        text: string;
        result: VoskPartialResult[];
    }
}