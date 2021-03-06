import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';

const menuComponents = [
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatStepperModule

];

@NgModule({
  imports: [menuComponents],
  exports: [menuComponents]
})
export class UserModule { }
