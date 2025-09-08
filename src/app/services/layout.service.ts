import { Injectable, signal, Signal } from "@angular/core";

@Injectable({  providedIn: 'root',})

export class LayoutService {
    aboutWindowVisibility = signal(false);
    settingsWindowVisibility = signal(false);
}