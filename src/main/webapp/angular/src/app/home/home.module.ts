import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core'
import { HomeComponent } from './home.component';
import { GeneralInfoModule } from './general-info/general-info.module';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';
import { HomeService } from './home.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    GeneralInfoModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCCDtSl8wlD3GpV6mCy6lrzEyBQfb_oi_4'
    })
    //HomeRoutingModule
  ],
  providers: [HomeService],
  exports: [HomeComponent],
  declarations: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
