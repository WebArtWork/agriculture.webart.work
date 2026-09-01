import { LandRecord } from '../land-record/land-record.interface';
import { landRecords } from '../land-record/land-record.data';
import { Land } from './land.interface';

/**
 * A land plot's resolved history: it carries the authoritative
 * `recordIds`, this resolves them so the land detail page can show (and
 * link to) its full "digital passport" instead of raw ids. History is
 * resolved from the land plot itself, not from whichever farm currently
 * operates it — a change of owner or tenant does not reset it.
 */
export interface LandRelations {
	records: LandRecord[];
}

const _recordById = new Map<string, LandRecord>(landRecords.map((r) => [r._id, r]));

export function relationsForLand(land: Land): LandRelations {
	return {
		records: land.recordIds
			.map((id) => _recordById.get(id))
			.filter((r): r is LandRecord => !!r),
	};
}

export interface CropRotationEntry {
	season: number;
	crop: string | null;
	yieldTonnesPerHa: number | null;
}

/**
 * One harvest entry per season, newest first — the "Field #184 — 42.6 ha /
 * 2026 🌻 Sunflower → 2.8 t/ha" style summary shown at the top of a land
 * plot's passport.
 */
export function cropRotationForLand(records: LandRecord[]): CropRotationEntry[] {
	return records
		.filter((r) => r.recordType === 'harvest')
		.sort((a, b) => b.season - a.season)
		.map((r) => ({ season: r.season, crop: r.crop, yieldTonnesPerHa: r.yieldTonnesPerHa }));
}
