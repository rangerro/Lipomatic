// window-bar.component.ts
import { CommonModule } from '@angular/common';
import { Component, ContentChild, Directive, EventEmitter, Input, Output } from '@angular/core';

@Directive({ selector: '[windowIcon]' })
export class WindowIconDirective {}

@Directive({ selector: '[windowClose]' })
export class WindowCloseDirective {}

@Component({
  selector: 'app-window-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './window-bar.component.html',
  styleUrls: ['./window-bar.component.css'],
  host: {
    'role': 'group',
    'class': 'wb-host'
  }
})
export class WindowBarComponent {
  @Input() title = '';
  @Input() showClose = true;

  @Output() close = new EventEmitter<void>();

  @ContentChild(WindowIconDirective) iconSlot?: WindowIconDirective;
  @ContentChild(WindowCloseDirective) closeSlot?: WindowCloseDirective;

  onClose(): void { this.close.emit(); }
}