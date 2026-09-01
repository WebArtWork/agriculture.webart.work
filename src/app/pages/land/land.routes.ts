import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./land.component').then((m) => m.LandComponent),
	},
];
