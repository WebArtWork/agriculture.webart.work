import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-agronomists.component').then((m) => m.ForAgronomistsPageComponent),
	},
];
