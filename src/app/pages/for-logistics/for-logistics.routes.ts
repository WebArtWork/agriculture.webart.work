import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-logistics.component').then((m) => m.ForLogisticsPageComponent),
	},
];
