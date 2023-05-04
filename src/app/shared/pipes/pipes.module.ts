import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './initials.pipe';
import { NombreCompletoPipe } from './nombre-completo.pipe';
import { TitleSizePipe } from './title-size.pipe';



@NgModule({
  declarations: [ 
    InitialsPipe,
    NombreCompletoPipe,
    TitleSizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InitialsPipe,
    NombreCompletoPipe,
    TitleSizePipe
  ]
})
export class PipesModule { }
