import { Routes } from '@angular/router';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { MetaGuard } from '@wawjs/ngx-core';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: '',
				pathMatch: 'full',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Головна',
					},
				},
				loadChildren: () =>
					import('./pages/landing/landing.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'sign',
				canActivate: [guestGuard, MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
					},
				},
				loadChildren: () =>
					import('./pages/sign/sign.routes').then((m) => m.routes),
			},
			{
				path: 'profile',
				canActivate: [authenticatedGuard, MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
					},
				},
				loadChildren: () =>
					import('./pages/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
					},
				},
				loadChildren: () =>
					import('./pages/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'share',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запросити в Agriculture',
						description:
							'Відскануйте QR-код, щоб приєднатися до Agriculture за кілька секунд.',
					},
				},
				loadChildren: () =>
					import('./pages/share/share.routes').then((m) => m.routes),
			},
			{
				path: 'lands',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Земельні ділянки',
						description:
							'Перегляньте всі земельні ділянки платформи Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/lands/lands.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'land/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Земельна ділянка',
						description:
							'Цифровий паспорт земельної ділянки: сівозміна, урожайність, обробки та повна історія.',
					},
				},
				loadChildren: () =>
					import('./pages/land/land.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'land-record/:id',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Запис історії ділянки',
						description:
							'Запис з цифрового паспорта земельної ділянки: посів, обробка, урожай або аналіз ґрунту.',
					},
				},
				loadChildren: () =>
					import('./pages/land-record/land-record.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'equipment',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Обладнання',
						description:
							'Орендуйте техніку та обладнання для польових робіт на платформі Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/equipment/equipment.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'jobs',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Робота',
						description:
							'Знаходьте роботу та підряди на фермах поруч із вами на платформі Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/jobs/jobs.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'feed',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Стрічка',
						description:
							'Перегляньте стрічку земельних ділянок Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/feed/feed.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'explore',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Пошук',
						description:
							'Шукайте й фільтруйте земельні ділянки Agriculture за статусом власності, культурою та регіоном.',
					},
				},
				loadChildren: () =>
					import('./pages/explore/explore.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'map',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Карта',
						description:
							'Знаходьте земельні ділянки на карті Agriculture за їхнім реальним розташуванням.',
					},
				},
				loadChildren: () =>
					import('./pages/map/map.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'editor',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Редактор',
						description:
							'Спробуйте форми введення даних для земельної ділянки та запису історії.',
					},
				},
				loadChildren: () =>
					import('./pages/editor/editor.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-farmers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для фермерів',
						description: 'Керуйте землею, полями, роботою та продажами врожаю разом з Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-farmers/for-farmers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-agronomists',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для агрономів',
						description: 'Плануйте сівозміну, обробку ґрунту, живлення та захист рослин на основі повної історії ділянки.',
					},
				},
				loadChildren: () =>
					import('./pages/for-agronomists/for-agronomists.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-landowners',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для власників землі',
						description: 'Продавайте або здавайте землю в оренду з доказом її повної історії.',
					},
				},
				loadChildren: () =>
					import('./pages/for-landowners/for-landowners.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-workers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для працівників',
						description: 'Знаходьте роботу на фермах і будуйте підтверджену робочу історію з Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-workers/for-workers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-businesses',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для агробізнесу',
						description: 'Пропонуйте послуги постачання, підряду, оренди техніки, зберігання чи логістики фермам Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-businesses/for-businesses.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-operators',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для операторів техніки',
						description: 'Пропонуйте себе як оператора трактора, комбайна чи дрона з підтвердженою історією операцій.',
					},
				},
				loadChildren: () =>
					import('./pages/for-operators/for-operators.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-suppliers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для постачальників',
						description: 'Продавайте насіння, добрива, ЗЗР, паливо та техніку фермам напряму через Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-suppliers/for-suppliers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-equipment-owners',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для власників техніки',
						description: 'Здавайте техніку в оренду окремо або разом з оператором через Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-equipment-owners/for-equipment-owners.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-buyers',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для покупців врожаю',
						description: 'Купуйте врожай напряму у ферм через маркетплейс Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-buyers/for-buyers.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-storage',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для операторів зберігання',
						description: 'Пропонуйте місткості складів і силосів для зберігання врожаю ферм Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-storage/for-storage.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'for-logistics',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Для логістичних партнерів',
						description: 'Перевозьте врожай, техніку та постачання для ферм Agriculture.',
					},
				},
				loadChildren: () =>
					import('./pages/for-logistics/for-logistics.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full',
	},
];
