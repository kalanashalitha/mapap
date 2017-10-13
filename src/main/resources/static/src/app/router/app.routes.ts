import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { GeneralInfoComponent } from '../home/general-info/general-info.component';

export const ROUTES:Routes = [

	{ 
		path: '',
	 	redirectTo: 'login', 
        pathMatch: 'full' 
	},
	{ 
		path: 'login',
	 	component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		children: [
      { path: 'general-info', component: GeneralInfoComponent }
    ]
	}
	//{ path: '**', component: PageNotFoundComponent }
];