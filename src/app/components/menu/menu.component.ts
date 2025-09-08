import { Component } from '@angular/core';
import {
  CdkMenuItemRadio,
  CdkMenuItemCheckbox,
  CdkMenuGroup,
  CdkMenu,
  CdkMenuTrigger,
  CdkMenuItem,
  CdkMenuBar,
} from '@angular/cdk/menu';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-menu',
  imports: [
    CdkMenuBar,
    CdkMenuItem,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuGroup,
    CdkMenuItemCheckbox,
    CdkMenuItemRadio,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', '../../app.component.css']
})
export class MenuComponent {

  layoutService: LayoutService;
  constructor(private _layoutService: LayoutService)
  {
    this.layoutService = _layoutService;
  }

  onAboutClick(){
    this.layoutService.aboutWindowVisibility.set(true);
  }

  onSettingsClick() {
    this.layoutService.settingsWindowVisibility.set(true);
  }
}
