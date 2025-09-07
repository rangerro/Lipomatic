import { Component } from '@angular/core';

import { invoke } from "@tauri-apps/api/core";
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from "./components/about/about.component";
import {CdkDrag, CdkDragHandle} from "@angular/cdk/drag-drop"
import { LayoutService } from './services/layout.service';
import { WindowBarComponent } from './components/minor-components/window-bar/window-bar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MenuComponent, AboutComponent, CdkDrag, WindowBarComponent, CdkDragHandle]
})
export class AppComponent {
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }

  layoutService: LayoutService;
  constructor(private _layoutService: LayoutService)
  {
    this.layoutService = _layoutService;
  }
}
