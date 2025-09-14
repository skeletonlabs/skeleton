import type { ItemProps } from '@zag-js/file-upload';

import { createContext } from '@/internal/create-context';

export const FileUploadItemContext = createContext<ItemProps>();
