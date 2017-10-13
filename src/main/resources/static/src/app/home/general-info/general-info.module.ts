import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralInfoComponent } from './general-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GeneralInfoComponent],
  exports: [GeneralInfoComponent]
})
export class GeneralInfoModule { }
