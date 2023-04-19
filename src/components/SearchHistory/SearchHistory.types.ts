import { Weather } from "../../constants/types";

export interface SearchHistoryProps {
  history?: Weather[];
  onRemoveItem?: (id: string) => void;
  onResearchItem?: (id: string) => void;
}