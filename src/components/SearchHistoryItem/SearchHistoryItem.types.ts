import React from "react";

export interface SearchHistoryItemProps {
  label: string;
  details?: string;
  id?: string;
  onSearchHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemoveHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}