import { LandOwnershipStatus, LandStatus, LandVisibility } from './land.interface';

/**
 * Ukrainian labels for land enums, shared between the land list/detail
 * views so they stay in sync.
 */
export const LAND_OWNERSHIP_STATUS_OPTIONS: { value: LandOwnershipStatus; label: string }[] = [
	{ value: 'owned', label: 'У власності' },
	{ value: 'leased', label: 'В оренді' },
	{ value: 'for-sale', label: 'Продається' },
	{ value: 'for-lease', label: 'Здається в оренду' },
];

export const LAND_STATUS_OPTIONS: { value: LandStatus; label: string }[] = [
	{ value: 'active', label: 'В обробітку' },
	{ value: 'fallow', label: 'Пар' },
	{ value: 'archived', label: 'Архівна' },
	{ value: 'unverified', label: 'Неперевірена' },
];

export const LAND_VISIBILITY_OPTIONS: { value: LandVisibility; label: string }[] = [
	{ value: 'public', label: 'Публічна' },
	{ value: 'listing-only', label: 'Лише в оголошенні' },
	{ value: 'private', label: 'Приватна' },
	{ value: 'shared-with-farm', label: 'Доступна фермі' },
];

export const LAND_OWNERSHIP_STATUS_LABELS: Record<LandOwnershipStatus, string> = Object.fromEntries(
	LAND_OWNERSHIP_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<LandOwnershipStatus, string>;

export const LAND_STATUS_LABELS: Record<LandStatus, string> = Object.fromEntries(
	LAND_STATUS_OPTIONS.map((o) => [o.value, o.label]),
) as Record<LandStatus, string>;

export const LAND_VISIBILITY_LABELS: Record<LandVisibility, string> = Object.fromEntries(
	LAND_VISIBILITY_OPTIONS.map((o) => [o.value, o.label]),
) as Record<LandVisibility, string>;

/** Emoji per crop name, purely cosmetic for the crop-rotation timeline. */
export const CROP_EMOJI: Record<string, string> = {
	Wheat: '🌾',
	Corn: '🌽',
	Sunflower: '🌻',
	Rapeseed: '🌱',
	Soybean: '🌿',
	Barley: '🌾',
};

export function cropEmoji(crop: string | null): string {
	if (!crop) return '🟫';
	return CROP_EMOJI[crop] ?? '🌱';
}
