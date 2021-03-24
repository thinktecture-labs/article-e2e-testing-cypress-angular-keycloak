import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {ButtonComponent} from './button/button.component';
import {BadgeComponent} from './badge/badge.component';
import {DockComponent} from './dock/dock.component';


@NgModule({
  declarations: [ButtonComponent, BadgeComponent, DockComponent],
  imports: [CommonModule, MatIconModule, MatRippleModule],
  exports: [ButtonComponent, BadgeComponent, DockComponent],
})
export class CoreModule {
}
