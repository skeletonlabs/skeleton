import { createContext } from '@/internal/create-context';

import type { useFileUpload } from './use-file-upload.svelte';

export const FileUploadRootContext = createContext<ReturnType<typeof useFileUpload>>();
