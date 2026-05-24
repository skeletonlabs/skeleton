import { createContext } from '../../../internal/create-context.js';
import type { useQrCode } from './provider.svelte.js';

export const QrCodeRootContext = createContext<ReturnType<typeof useQrCode>>();
