"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  AccordionContextState,
  AccordionControlProps,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps,
} from "./types";
import { motion, AnimatePresence } from "framer-motion";

// React Compose ---

// FIXME:
// import { reactCompose } from "../../utils/react-compose";
export function reactCompose<
  T extends React.FC,
  U extends Record<string, unknown>
>(root: T, components: { [k in keyof U]: React.FC<U[k]> }) {
  return Object.assign(root, components);
}

// Context ---

export const AccordionContext = createContext<AccordionContextState>({
  animDuration: 0.2,
  selected: [],
  setSelected: () => {},
  allowMultiple: false,
  setAllowMultiple: () => {},
});

// Components ---

const AccordionRoot: React.FC<AccordionProps> = ({
  multiple = false,
  animDuration = 0.2,
  // Root
  base = "",
  padding = "",
  spaceY = "space-y-2",
  rounded = "rounded",
  classes = "",
  // Children
  children,
}) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [allowMultiple, setAllowMultiple] = useState<boolean>(multiple);

  return (
    <div
      className={`${base} ${padding} ${spaceY} ${rounded} ${classes}`}
      data-testid="accordion"
    >
      <AccordionContext.Provider
        value={{
          animDuration,
          selected,
          setSelected,
          allowMultiple,
          setAllowMultiple,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  base = "",
  spaceY = "",
  classes = "",
  // Children
  children,
}) => {
  return (
    <div
      className={`${base} ${spaceY} ${classes}`}
      data-testid="accordion-item"
    >
      {children}
    </div>
  );
};

const AccordionControl: React.FC<AccordionControlProps> = ({
  controls,
  open = false,
  disabled = false,
  // Control
  base = "flex text-start items-center space-x-4 w-full",
  hover = "hover:preset-tonal-primary",
  padding = "py-2 px-4",
  rounded = "rounded",
  classes = "",
  // Children
  iconOpen = "-",
  iconClosed = "+",
  lead,
  children,
}) => {
  let ctx = useContext<AccordionContextState>(AccordionContext);

  useEffect(() => {
    if (open) setOpen();
  }, [open]);

  const onclick = () => {
    ctx.selected.includes(controls) ? setClosed() : setOpen();
  };

  const setOpen = () => {
    if (ctx.allowMultiple === false) ctx.setSelected([]);
    ctx.setSelected((currentValue) => [...currentValue, controls]);
  };

  const setClosed = () => {
    ctx.setSelected(ctx.selected.filter((itemId) => itemId !== controls));
  };

  return (
    <button
      type="button"
      className={`${base} ${hover} ${padding} ${rounded} ${classes}`}
      aria-expanded={ctx.selected.includes(controls)}
      aria-controls={`accordion-panel-${controls}`}
      onClick={onclick}
      disabled={disabled}
      data-testid="accordion-control"
    >
      {/* Lead */}
      {lead && <div>{lead}</div>}
      {/* Content */}
      <div className="flex-1">{children}</div>
      {/* State Indicator */}
      <div>{ctx.selected.includes(controls) ? iconClosed : iconOpen}</div>
    </button>
  );
};

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  id,
  // Panel
  base = "",
  padding = "py-2 px-4",
  rounded = "",
  classes = "",
  // Children
  children,
}) => {
  let ctx = useContext<AccordionContextState>(AccordionContext);
  let openState = ctx.selected.includes(id);

  return (
    <div
      role="region"
      aria-hidden={openState}
      aria-labelledby={id}
      data-testid="accordion-panel"
    >
      <AnimatePresence>
        {openState && (
          <motion.div
            className="overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: ctx.animDuration }}
          >
            <div className={`${base} ${padding} ${rounded} ${classes}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = reactCompose(AccordionRoot, {
  Item: AccordionItem,
  Control: AccordionControl,
  Panel: AccordionPanel,
});
