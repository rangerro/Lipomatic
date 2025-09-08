import { AfterViewInit, Component } from '@angular/core';

import { invoke } from "@tauri-apps/api/core";
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from "./components/about/about.component";
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop"
import { LayoutService } from './services/layout.service';
import { WindowBarComponent } from './components/minor-components/window-bar/window-bar.component';
import { SettingsComponent } from "./components/settings/settings.component";
import WaveSurfer from "wavesurfer.js"
import { VoskService } from './services/vosk.service';
import { VoskVanillaResult } from './models/vosk';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MenuComponent, AboutComponent, CdkDrag, WindowBarComponent, CdkDragHandle, SettingsComponent]
})
export class AppComponent implements AfterViewInit {

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>("greet", { name }).then((text) => {
      const newText = text;
    });
  }

  voskOutput: string = '';

  layoutService: LayoutService;
  constructor(private _layoutService: LayoutService)
  {
    this.layoutService = _layoutService;
  }

  ngAfterViewInit(): void {
    const waveSurfer = WaveSurfer.create({
      container: '#waveformtest',
      url: 'assets/TANDI2.wav'
    });

    waveSurfer.on('interaction', () => {
        waveSurfer.play()
    })
  }

  async getTransription(): Promise<VoskVanillaResult> {
    const voskService = new VoskService();
    await voskService.init();
    const wavFileRaw = await fetch(`assets/TANDI2.wav`);
    const blob = await wavFileRaw.blob();
    const file = new File([blob], 'TANDI2');
    const result = await voskService.transcribe(file);
    return result;
  }

  async setTransriptionAsText() {
    const transcription = await this.getTransription();
    const resultText = JSON.stringify(transcription);
    this.voskOutput = resultText;
  }
}
