import { createContext } from '../../../internal/create-context.js';
import type { useQrCode } from './provider.js';

export const QrCodeRootContext = createContext<ReturnType<typeof useQrCode>>();
