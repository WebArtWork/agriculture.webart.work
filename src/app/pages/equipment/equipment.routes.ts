import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./equipment.component').then((m) => m.EquipmentComponent),
	},
];
