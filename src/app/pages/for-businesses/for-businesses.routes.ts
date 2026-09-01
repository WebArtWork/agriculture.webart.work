import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-businesses.component').then((m) => m.ForBusinessesPageComponent),
	},
];
