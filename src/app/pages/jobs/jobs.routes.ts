import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./jobs.component').then((m) => m.JobsComponent),
	},
];
