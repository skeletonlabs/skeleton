import { createContext } from '@/internal/create-context.js';
import type { ItemProps } from '@zag-js/file-upload';

export type FileUploadItemContextType = {
	itemProps: ItemProps;
};

export const FileUploadItemContext = createContext<FileUploadItemContextType>();
