import type { KingdomGraphData } from "./graph-types"

import { BOHEMIA_NODES, BOHEMIA_LINKS, BOHEMIA_PATHS } from "./bohemia-graph-data"
import { RUTHENIA_NODES, RUTHENIA_LINKS, RUTHENIA_PATHS } from "./ruthenia-graph-data"
import { WHITE_RUTHENIA_NODES, WHITE_RUTHENIA_LINKS, WHITE_RUTHENIA_PATHS } from "./white-ruthenia-graph-data"
import { NOVGOROD_NODES, NOVGOROD_LINKS, NOVGOROD_PATHS } from "./novgorod-graph-data"
import { GALICIA_VOLHYNIA_NODES, GALICIA_VOLHYNIA_LINKS, GALICIA_VOLHYNIA_PATHS } from "./galicia-volhynia-graph-data"
import { MOLDAVIA_NODES, MOLDAVIA_LINKS, MOLDAVIA_PATHS } from "./moldavia-graph-data"
import { POLOTSK_NODES, POLOTSK_LINKS, POLOTSK_PATHS } from "./polotsk-graph-data"
import { OPOLYE_NODES, OPOLYE_LINKS, OPOLYE_PATHS } from "./opolye-graph-data"
import { POLAND_NODES, POLAND_LINKS, POLAND_PATHS } from "./poland-graph-data"
import { POMERANIA_NODES, POMERANIA_LINKS, POMERANIA_PATHS } from "./pomerania-graph-data"
import { SORBIA_NODES, SORBIA_LINKS, SORBIA_PATHS } from "./sorbia-graph-data"
import { SLOVAKIA_NODES, SLOVAKIA_LINKS, SLOVAKIA_PATHS } from "./slovakia-graph-data"
import { HUNGARY_NODES, HUNGARY_LINKS, HUNGARY_PATHS } from "./hungary-graph-data"
import { CARINTHIA_NODES, CARINTHIA_LINKS, CARINTHIA_PATHS } from "./carinthia-graph-data"
import { CROATIA_NODES, CROATIA_LINKS, CROATIA_PATHS } from "./croatia-graph-data"
import { SERBIA_NODES, SERBIA_LINKS, SERBIA_PATHS } from "./serbia-graph-data"
import { BULGARIA_NODES, BULGARIA_LINKS, BULGARIA_PATHS } from "./bulgaria-graph-data"


export const KINGDOM_GRAPHS: Record<string, KingdomGraphData> = {
  "sebh_": { nodes: BOHEMIA_NODES, links: BOHEMIA_LINKS, paths: BOHEMIA_PATHS },
  "sekr_": { nodes: RUTHENIA_NODES, links: RUTHENIA_LINKS, paths: RUTHENIA_PATHS },
  "sewr_": { nodes: WHITE_RUTHENIA_NODES, links: WHITE_RUTHENIA_LINKS, paths: WHITE_RUTHENIA_PATHS },
  "senv_": { nodes: NOVGOROD_NODES, links: NOVGOROD_LINKS, paths: NOVGOROD_PATHS },
  "segv_": { nodes: GALICIA_VOLHYNIA_NODES, links: GALICIA_VOLHYNIA_LINKS, paths: GALICIA_VOLHYNIA_PATHS },
  "semd_": { nodes: MOLDAVIA_NODES, links: MOLDAVIA_LINKS, paths: MOLDAVIA_PATHS },
  "sept_": { nodes: POLOTSK_NODES, links: POLOTSK_LINKS, paths: POLOTSK_PATHS },
  "seop_": { nodes: OPOLYE_NODES, links: OPOLYE_LINKS, paths: OPOLYE_PATHS },
  "sepl_": { nodes: POLAND_NODES, links: POLAND_LINKS, paths: POLAND_PATHS },
  "sepm_": { nodes: POMERANIA_NODES, links: POMERANIA_LINKS, paths: POMERANIA_PATHS },
  "sesb_": { nodes: SORBIA_NODES, links: SORBIA_LINKS, paths: SORBIA_PATHS },
  "sesk_": { nodes: SLOVAKIA_NODES, links: SLOVAKIA_LINKS, paths: SLOVAKIA_PATHS },
  "sehg_": { nodes: HUNGARY_NODES, links: HUNGARY_LINKS, paths: HUNGARY_PATHS },
  "seca_": { nodes: CARINTHIA_NODES, links: CARINTHIA_LINKS, paths: CARINTHIA_PATHS },
  "secr_": { nodes: CROATIA_NODES, links: CROATIA_LINKS, paths: CROATIA_PATHS },
  "serb_": { nodes: SERBIA_NODES, links: SERBIA_LINKS, paths: SERBIA_PATHS },
  "sebg_": { nodes: BULGARIA_NODES, links: BULGARIA_LINKS, paths: BULGARIA_PATHS },
}
