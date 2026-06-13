export type NodeType =
  | "title" | "culture" | "faith" | "province" | "dynasty" | "bookmark" | "mechanic"
  | "decision" | "event" | "modifier" | "trait" | "court" | "tenet" | "building";

export interface GraphNode {
  id: string;
  label: string;
  type: NodeType;
  era?: string;
  note?: string;
  planned?: boolean;
  row: number;
  col: number;
}

export interface GraphLink {
  source: string;
  target: string;
  relation: string;
}

export interface GraphPath {
  id: string;
  label: string;
  color: string;
  description: string;
  nodes: string[];
}

export interface KingdomGraphData {
  nodes: GraphNode[];
  links: GraphLink[];
  paths: GraphPath[];
}

export const NODE_TYPE_CONFIG: Record<NodeType, { label: string; color: string; icon: string }> = {
  title:     { label: "Tytuł",       color: "#e6b43c", icon: "T" },
  culture:   { label: "Kultura",     color: "#4dd0e1", icon: "K" },
  faith:     { label: "Wiara",       color: "#ce93d8", icon: "W" },
  province:  { label: "Prowincja",   color: "#78909c", icon: "R" },
  dynasty:   { label: "Dynastia",    color: "#e63946", icon: "D" },
  bookmark:  { label: "Bookmark",    color: "#83c84d", icon: "B" },
  mechanic:  { label: "Mechanika",   color: "#6ba0d6", icon: "M" },
  decision:  { label: "Decyzja",     color: "#6ba0d6", icon: "De" },
  event:     { label: "Event",       color: "#e6b43c", icon: "Ev" },
  modifier:  { label: "Modifier",    color: "#e63946", icon: "Mo" },
  trait:     { label: "Trait",       color: "#83c84d", icon: "Tr" },
  court:     { label: "Pozycja",     color: "#ce93d8", icon: "Pd" },
  tenet:     { label: "Tenet",       color: "#ff8a65", icon: "Te" },
  building:  { label: "Budynek",     color: "#ffb74d", icon: "Bu" },
};

export const GRID_ROWS = 9;
export const GRID_COLS = 8;
