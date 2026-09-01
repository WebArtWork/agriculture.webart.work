import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-operators.component').then((m) => m.ForOperatorsPageComponent),
	},
];
