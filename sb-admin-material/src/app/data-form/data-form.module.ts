import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { DataFormComponent} from './data-from.component';

@NgModule({
  declarations: [
    DataFormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class DataFormModule { }
