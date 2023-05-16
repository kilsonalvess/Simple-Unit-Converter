import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    MenuComponent
  ]
})
export class LayoutModule { }
