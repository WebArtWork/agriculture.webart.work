import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./land-record.component').then((m) => m.LandRecordComponent),
	},
];
