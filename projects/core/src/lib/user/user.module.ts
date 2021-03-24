import {NgModule} from '@angular/core';
import {UserCompoenent} from './user.compoenent';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [UserCompoenent],
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule],
  exports: [UserCompoenent]
})
export class UserModule {
}
