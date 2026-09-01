import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-landowners.component').then((m) => m.ForLandownersPageComponent),
	},
];
