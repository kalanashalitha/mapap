import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GeneralInfoComponent } from './general-info/general-info.component';

export const homeRoutes: Routes = [
	{ path:'general-info', component: GeneralInfoComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule { }
