import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
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
	 	component: UserComponent
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