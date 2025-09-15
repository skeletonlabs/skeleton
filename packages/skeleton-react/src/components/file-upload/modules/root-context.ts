import type { useFileUpload } from './use-file-upload';
import { createContext } from '@/internal/create-context';

export const FileUploadRootContext = createContext<ReturnType<typeof useFileUpload>>();
