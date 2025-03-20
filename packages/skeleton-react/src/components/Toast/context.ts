'use client';

import { createContext } from 'react';
import type { ToastContextType } from './types.js';

export const ToastContext = createContext<ToastContextType>(null!);
