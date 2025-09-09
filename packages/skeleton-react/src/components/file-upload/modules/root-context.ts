import { createContext } from 'react';
import type { Api } from '@zag-js/file-upload';

export interface FileUploadRootContextType {
	api: Api;
}

export const FileUploadRootContext = createContext<FileUploadRootContextType>(null!);
