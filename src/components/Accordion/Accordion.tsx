"use client";

import { useState } from "react";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle</button>

      {open && <div>Accordion content...</div>}
    </div>
  );
}
