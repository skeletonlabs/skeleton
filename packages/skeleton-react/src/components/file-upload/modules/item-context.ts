import { createContext } from 'react';
import type { ItemProps } from '@zag-js/file-upload';

export interface FileUploadItemContextType {
	itemProps: ItemProps;
}

export const FileUploadItemContext = createContext<FileUploadItemContextType>(null!);
