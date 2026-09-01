import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./lands.component').then((m) => m.LandsComponent),
	},
];
