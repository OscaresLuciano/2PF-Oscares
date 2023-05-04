import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleFontSizeDirective } from './title-font-size.directive';



@NgModule({
  declarations: [TitleFontSizeDirective],
  imports: [
    CommonModule
  ],
  exports: [
    TitleFontSizeDirective
  ]
})
export class DirectivesModule { }
