import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-storage.component').then((m) => m.ForStoragePageComponent),
	},
];
