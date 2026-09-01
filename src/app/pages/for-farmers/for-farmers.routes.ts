import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-farmers.component').then((m) => m.ForFarmersPageComponent),
	},
];
