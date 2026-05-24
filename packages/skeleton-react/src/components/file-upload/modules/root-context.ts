import { createContext } from '../../../internal/create-context.js';
import type { useFileUpload } from './provider.js';

export const FileUploadRootContext = createContext<ReturnType<typeof useFileUpload>>();
