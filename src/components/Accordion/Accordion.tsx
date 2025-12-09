"use client";

import { useState } from "react";
import {
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from "@/components/Accordion/Accordion.types";

import styles from "./Accordion.module.css";

export default function Accordion({ items, defaultActiveIds }: AccordionProps) {
  const [activeItems, setActiveItems] = useState<Set<string>>(
    new Set(defaultActiveIds)
  );
  console.log(activeItems, "activeItems");
  function isActive(id: string) {
    return activeItems.has(id);
  }

  function handleToggle(id: string) {
    setActiveItems((prevItems) => {
      const newState = new Set(prevItems);

      if (newState.has(id)) {
        newState.delete(id);
      } else {
        newState.add(id);
      }

      return newState;
    });
  }

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          handleActive={isActive}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  item,
  handleActive,
  handleToggle,
}: AccordionItemProps) {
  const isActive = handleActive(item.id);
  console.log(`RENDER item ${item.id}`);
  return (
    <>
      <AccordionHeader
        id={item.id}
        onToggle={() => handleToggle(item.id)}
        isActive={isActive}
        title={item.title}
      />
      <AccordionPanel isActive={isActive} content={item.content} />
    </>
  );
}

function AccordionHeader({ title, onToggle, isActive }: AccordionHeaderProps) {
  return (
    <h3>
      <button onClick={onToggle}>
        <span>{title}</span>
        <span
          className={`${styles.accordionIcon} ${isActive ? styles.accordionIconRotated : ""}`}
        />
      </button>
    </h3>
  );
}

function AccordionPanel({ content, isActive }: AccordionPanelProps) {
  return (
    <div>
      <div
        className={`${styles.content} ${isActive ? "" : styles.contentHide}`}
      >
        {content}
      </div>
    </div>
  );
}
