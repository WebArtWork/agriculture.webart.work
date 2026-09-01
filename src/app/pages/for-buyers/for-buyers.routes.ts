import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-buyers.component').then((m) => m.ForBuyersPageComponent),
	},
];
