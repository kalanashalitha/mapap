import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [UserComponent],
  exports:[UserComponent],
  bootstrap: [UserComponent]
})
export class UserModule { }
