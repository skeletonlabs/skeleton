'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  AccordionContextState,
  AccordionControlProps,
  AccordionItemContextState,
  AccordionItemProps,
  AccordionPanelProps,
  AccordionProps
} from './types.js';
import { motion, AnimatePresence } from 'framer-motion';

// Contexts ---

export const AccordionContext = createContext<AccordionContextState>({
  animDuration: 0.2,
  iconOpen: '-',
  iconClosed: '+',
  open: () => {},
  close: () => {},
  toggle: () => {},
  isOpen: () => false
});

export const AccordionItemContext = createContext<AccordionItemContextState>({
  id: '',
  onClick: () => {}
});

// Components ---

const AccordionRoot: React.FC<AccordionProps> = ({
  multiple = false,
  value: valueInit = [],
  animDuration = 0.2,
  // Root
  base = '',
  padding = '',
  spaceY = 'space-y-2',
  rounded = 'rounded',
  width = 'w-full',
  classes = '',
  // Icons
  iconOpen = '-',
  iconClosed = '+',
  // Events
  onValueChange = () => {},
  // Children
  children
}) => {
  // State
  const [value, setValue] = useState<string[]>(multiple ? valueInit : [valueInit[0]]);

  // Functions
  function open(id: string) {
    setValue((opened) => (multiple ? [...opened, id] : [id]));
  }
  function close(id: string) {
    setValue((opened) => opened.filter((_id) => _id !== id));
  }
  function toggle(id: string) {
    isOpen(id) ? close(id) : open(id);
  }
  function isOpen(id: string) {
    return value.includes(id);
  }

  // Effect
  useEffect(() => {
    onValueChange(value);
  }, [onValueChange, value]);

  // Context
  const ctx = {
    animDuration,
    iconOpen,
    iconClosed,
    open,
    close,
    toggle,
    isOpen
  };

  return (
    <div className={`${base} ${padding} ${spaceY} ${rounded} ${width} ${classes}`} data-testid="accordion">
      <AccordionContext.Provider value={ctx}>{children}</AccordionContext.Provider>
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  id,
  base = '',
  spaceY = '',
  classes = '',
  // Events
  onClick = () => {},
  // Children
  children
}) => {
  return (
    <AccordionItemContext.Provider value={{ id, onClick }}>
      <div className={`${base} ${spaceY} ${classes}`} data-testid="accordion-item">
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

const AccordionControl: React.FC<AccordionControlProps> = ({
  disabled = false,
  // Control
  base = 'flex text-start items-center space-x-4 w-full',
  hover = 'hover:preset-tonal-primary',
  padding = 'py-2 px-4',
  rounded = 'rounded',
  classes = '',
  iconsBase = '',
  // Icons
  lead,
  // Children
  children
}) => {
  const rootCtx = useContext<AccordionContextState>(AccordionContext);
  const itemCtx = useContext<AccordionItemContextState>(AccordionItemContext);

  function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    rootCtx.toggle(itemCtx.id);
    itemCtx.onClick(event);
  }
  return (
    <button
      type="button"
      className={`${base} ${hover} ${padding} ${rounded} ${classes}`}
      aria-expanded={rootCtx.isOpen(itemCtx.id)}
      aria-controls={`accordion-panel-${itemCtx.id}`}
      onClick={clickHandler}
      disabled={disabled}
      data-testid="accordion-control"
    >
      {/* Lead */}
      {lead && <div>{lead}</div>}
      {/* Content */}
      <div className="flex-1">{children}</div>
      {/* State Indicator */}
      <div className={`${iconsBase}`}>{rootCtx.isOpen(itemCtx.id) ? rootCtx.iconOpen : rootCtx.iconClosed}</div>
    </button>
  );
};

const AccordionPanel: React.FC<AccordionPanelProps> = ({
  // Panel
  base = '',
  padding = 'py-2 px-4',
  rounded = '',
  classes = '',
  // Children
  children
}) => {
  const rootCtx = useContext<AccordionContextState>(AccordionContext);
  const itemCtx = useContext<AccordionItemContextState>(AccordionItemContext);
  return (
    <div role="region" aria-hidden={rootCtx.isOpen(itemCtx.id)} aria-labelledby={itemCtx.id} data-testid="accordion-panel">
      <AnimatePresence initial={false}>
        {rootCtx.isOpen(itemCtx.id) && (
          <motion.div
            className="overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: rootCtx.animDuration && 0.2 }}
          >
            <div className={`${base} ${padding} ${rounded} ${classes}`} data-testid="accordion-panel-children">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Control: AccordionControl,
  Panel: AccordionPanel
});
