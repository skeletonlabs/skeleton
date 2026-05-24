import { createContext } from '../../../internal/create-context.js';
import type { ItemProps } from '@zag-js/file-upload';

export const FileUploadItemContext = createContext<() => ItemProps>();
