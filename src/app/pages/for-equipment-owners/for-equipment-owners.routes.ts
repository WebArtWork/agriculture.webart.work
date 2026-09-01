import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./for-equipment-owners.component').then((m) => m.ForEquipmentOwnersPageComponent),
	},
];
