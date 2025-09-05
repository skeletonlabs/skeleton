import { createContext } from '@/internal/create-context.js';
import type { Api } from '@zag-js/file-upload';

export type FileUploadRootContextType = {
	api: Api;
};

export const FileUploadRootContext = createContext<FileUploadRootContextType>();
