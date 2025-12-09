import React from "react";

export interface AccordionItemData {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  items: AccordionItemData[];
  defaultActiveIds?: string[];
}

export interface AccordionItemProps {
  item: AccordionItemData;
  handleActive: (id: string) => boolean;
  handleToggle: (id: string) => void;
}

export interface AccordionHeaderProps {
  title: AccordionItemData["title"];
  id: AccordionItemData["id"];
  isActive: boolean;
  onToggle: () => void;
}

export interface AccordionPanelProps {
  content: AccordionItemData["content"];
  isActive: boolean;
}
