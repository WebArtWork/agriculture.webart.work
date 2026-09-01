import { LandRecordStatus, LandRecordType, LandRecordVisibility } from './land-record.interface';

/**
 * Ukrainian labels for land-record enums, shared between the record form
 * and the record detail view so both stay in sync.
 */
export const LAND_RECORD_TYPE_OPTIONS: { value: LandRecordType; label: string }[] = [
	{ value: 'planting', label: 'Посів' },
	{ value: 'fertilization', label: 'Внесення добрив' },
	{ value: 'chemical-treatment', label: 'Хімічна обробка' },
	{ value: 'field-operation', label: 'Польова операція' },
	{ value: 'weather-event', label: 'Погодна подія' },
	{ value: 'soil-test', label: 'Аналіз ґрунту' },
	{ value: 'problem', label: 'Проблема' },
	{ value: 'harvest', label: 'Урожай' },
	{ value: 'ownership-change', label: 'Зміна власника/орендаря' },
	{ value: 'document', label: 'Документ' },
	{ value: 'note', label: 'Примітка' },
];

export const LAND_RECORD_STATUS_OPTIONS: { value: LandRecordStatus; label: string }[] = [
	{ value: 'planned', label: 'Заплановано' },
	{ value: 'in-progress', label: 'В процесі' },
	{ value: 'completed', label: 'Завершено' },
	{ value: 'cancelled', label: 'Скасовано' },
];

export const LAND_RECORD_VISIBILITY_OPTIONS: { value: LandRecordVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічний' },
	{ value: 'public-summary-private-details', label: 'Публічний огляд, приватні деталі' },
	{ value: 'private', label: 'Приватний' },
	{ value: 'shared-with-buyer-lessee', label: 'Доступ покупцю/орендарю' },
];

export const LAND_RECORD_TYPE_LABELS: Record<LandRecordType, string> = Object.fromEntries(
	LAND_RECORD_TYPE_OPTIONS.map((o) => [o.value, o.label]),
) as Record<LandRecordType, string>;

export const LAND_RECORD_STATUS_LABELS: Record<LandRecordStatus, string> = Object.fromEntries(
	LAND_RECORD_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<LandRecordStatus, string>;

export const LAND_RECORD_VISIBILITY_LABELS: Record<LandRecordVisibility, string> = Object.fromEntries(
	LAND_RECORD_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<LandRecordVisibility, string>;
