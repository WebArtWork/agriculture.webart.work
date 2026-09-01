import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-suppliers.component').then((m) => m.ForSuppliersPageComponent),
	},
];
