# Agriculture

Agriculture is not a crop marketplace — it's a **full agriculture operating
ecosystem**. It connects **land → farm → crops → work → equipment →
supplies → workers → harvest → storage → buyers → money** in one platform,
so a farm's entire operation — and its entire history — lives in one place
instead of being scattered across paper logs, spreadsheets, and phone calls.

This repository is currently a static, investor-facing demo of that product
vision — real, realistic content and a fully navigable app, with no backend
or persistence behind it yet.

## The core entities

- **Land** — a map of agricultural land plots. Each plot has boundaries,
  area, ownership/lease status, soil information, history, and documents.
- **Farm** — a company/farmer profile containing land, workers, equipment,
  facilities, crops, inventory, finances, and public information.
- **Field** — an operational unit created from land plots. A farm can
  combine or split plots into fields and track everything that happens on
  each one.
- **Crop Season** — a field + crop + year/season (e.g. *Field 18 → Wheat →
  2027*). Tracks planting, treatments, costs, work, harvest, and final
  profitability for that specific run.
- **Crop** — the crop catalog: varieties, expected growing periods,
  recommended operations, historical yields, and market information.
- **Field Operation** — planting, cultivation, fertilization, spraying,
  irrigation, harvesting, etc. Every operation records field, date,
  equipment, workers, materials, cost, and result.
- **Task** — an operational to-do (e.g. *spray Field 4 tomorrow*), assigned
  to a worker or contractor and linked to fields/equipment.
- **Equipment** — tractors, combines, drones, irrigation systems, and other
  machinery. Tracks ownership, location, operating hours, maintenance,
  expenses, and availability.
- **Supplier** — a business selling seeds, fertilizer, chemicals, fuel,
  equipment, spare parts, and other agricultural inputs.
- **Inventory** — current on-farm quantities of seeds, fertilizer,
  chemicals, fuel, harvested crops, and other materials. Field operations
  consume inventory automatically.
- **Worker** — a farm employee with roles, skills, assigned farms, tasks,
  work history, and (where relevant) machinery/specialized-work
  certifications.
- **Contractor** — an external business or worker offering services:
  harvesting, spraying, drone surveys, transportation, soil analysis,
  equipment repair, etc.
- **Harvest** — a record of harvested quantity, quality, field of origin,
  date, storage destination, and production cost.
- **Storage** — silos, warehouses, and other facilities; tracks crop
  batches, quantities, quality, ownership, and movement between facilities.
- **Order / Contract** — a marketplace deal: quantities, prices, delivery
  conditions, buyer/seller, and fulfillment status.
- **Comment** — reviews/feedback on a farm, contractor, supplier, or deal.

## How people use it

- **Land** — browse plots for sale or lease; a farm turns acquired plots
  into fields it operates.
- **Fields & Crop Seasons** — see what's planted where, this season and
  historically, and everything that's been done to a field over the years
  (crops grown, chemicals applied, yields, soil tests, problems) — a
  permanent field history that only gets more valuable over time.
- **Tasks & Field Operations** — plan and log the actual work: who did
  what, on which field, with which equipment and materials, at what cost.
- **Equipment Marketplace** — buy or sell machinery, or **rent equipment,
  or hire equipment + operator**, for a specific job instead of owning
  everything year-round.
- **Marketplace** — farmers sell crops directly; buyers post demand (e.g.
  *"Need 500 tonnes of wheat, minimum quality X, delivery by October"*),
  matched into orders/contracts and handed off to logistics.
- **Workers & Contractors** — a farm's own crew, plus outside specialists
  (harvesting, spraying, drone surveys, transport, soil analysis, repair)
  it can call in for a job.
- **Weather** — forecasts and warnings (rain, wind, frost, heat, drought)
  tied directly to a field, so operations can be planned or held around
  them.
- **Economics & Analytics** — cost rolls up from operation → field → crop
  season → farm, answering questions like *"Field 18 produced 312 tonnes
  for $41,200 and generated $17,600 profit"*, alongside yield/ha, cost/ha,
  profit/ha, equipment utilization, and crop-to-crop comparison.
- Every entity also has its own dedicated page showing its full profile,
  history, and related records.

## Land History — the land's digital passport

History is attached to the **land itself**, not to whichever farm
currently operates it — a change of owner or tenant does not reset it.
Selecting a plot shows its full agricultural history: a season-by-season
crop-rotation timeline (crop, variety, yield/ha) at a glance, backed by the
complete record list underneath — planting, fertilization, chemical
treatments, field operations, weather events, soil tests, problems,
harvest results, and ownership/tenancy changes, each with cost, quantity,
and evidence (photos, drone imagery, lab reports) where relevant. This is
implemented today (`features/land`, `features/land-record`, `/lands`,
`/land/:id`, `/land-record/:id`) with realistic sample data — it's the
piece that turns a land listing from *"42 hectares for lease"* into ten
years of crop rotation, yields, soil condition, and treatments an AI layer
or a buyer can actually reason about.

## Roles

Every person or business on the platform plays one or more of these roles.
Each has its own marketing/onboarding page (`/for-*`):

1. **Farmer** — manages a farm, its land, crops, seasons, equipment,
   inventory, and harvest. ([/for-farmers](src/app/pages/for-farmers))
2. **Land Owner** — owns land, manages its information/history, and sells
   or leases it. ([/for-landowners](src/app/pages/for-landowners))
3. **Worker** — agronomist, farm worker, equipment operator, etc.; the
   specific profession is defined separately.
   ([/for-workers](src/app/pages/for-workers))
4. **Business** — suppliers, contractors, equipment rental, storage,
   logistics, crop buyers, and other agricultural services.
   ([/for-businesses](src/app/pages/for-businesses))
5. **Equipment Operator** — a tractor/combine/drone/etc. operator;
   connected to equipment and the operations they've completed.
   ([/for-operators](src/app/pages/for-operators))
6. **Supplier** — sells seeds, fertilizer, chemicals, fuel, parts, and
   equipment. ([/for-suppliers](src/app/pages/for-suppliers))
7. **Equipment Owner** — lists machinery for rent, or offers machinery +
   operator. ([/for-equipment-owners](src/app/pages/for-equipment-owners))
8. **Buyer** — buys crops/harvest from farms and can publish purchase
   requests. ([/for-buyers](src/app/pages/for-buyers))
9. **Storage Operator** — manages warehouses, silos, and stored crop
   batches. ([/for-storage](src/app/pages/for-storage))
10. **Logistics Provider** — transports crops, equipment, and supplies.
    ([/for-logistics](src/app/pages/for-logistics))
11. **Agronomist** — plans crop rotation, soil treatment, fertilization,
    and protection, and monitors field health.
    ([/for-agronomists](src/app/pages/for-agronomists))

Several roles map directly onto the network in the architecture section
below — Land Owner, Supplier, Equipment Owner, Storage Operator, Buyer, and
Logistics Provider are the "network" side; Farmer, Worker, Equipment
Operator, and (as an aggregate) Business are the operating side.

## The architecture: a network, not "software for farmers"

The platform is built as a network connecting **land owners ↔ farms ↔
workers ↔ contractors ↔ suppliers ↔ equipment owners ↔ storage ↔ logistics
↔ crop buyers** — not a single monolithic tool. A small farmer can use just
**Land + Fields + Tasks**; a large agricultural company can run almost its
entire operation through it.

Several pieces are deliberately built to become **shared WAW services**
rather than staying Agriculture-exclusive, so they can be reused by (and
connect to) the other startups in this workspace instead of duplicating
functionality:

- **Land** — the land marketplace (sale/lease) is a natural connection
  point to the real-estate side of the portfolio rather than a competing,
  duplicate listing surface.
- **Marketplace / Orders** — crop buy/sell and equipment rental deals.
- **Jobs** — the worker/contractor/task layer.
- **Logistics** — transportation between farms, storage, and buyers, with
  room to eventually integrate with a separate WAW logistics platform.
- **Payments** — settling orders/contracts and equipment/contractor work.

An **AI layer** sits on top of all of this structured data — field
operations, inventory, weather, market prices, harvest history — to answer
questions like *what to plant, when to perform work, which fields
underperform, expected harvest, required supplies, and where costs are
abnormal.*

## Status

Static demo, no backend or persistence yet. For contributor/developer setup
and coding conventions, see [AGENTS.md](AGENTS.md).
