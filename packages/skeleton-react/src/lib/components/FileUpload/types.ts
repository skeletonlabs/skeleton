import { ReactNode } from 'react';
import * as fileUpload from '@zag-js/file-upload';
import type { PropTypes } from '@zag-js/react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FileUploadApi extends fileUpload.Api<PropTypes> {}

export interface FileUploadProps extends React.PropsWithChildren, Omit<fileUpload.Context, 'id'> {
	/** Set the interface text value. */
	label?: string;
	/** Set the interface subtext value. */
	subtext?: string;

	// Root ---
	/** Set root base classes */
	base?: string;
	/** Set root arbitrary classes */
	classes?: string;

	// Interface ---
	/** Set interface base classes */
	interfaceBase?: string;
	/** Set interface background classes */
	interfaceBg?: string;
	/** Set interface border classes */
	interfaceBorder?: string;
	/** Set interface border color classes */
	interfaceBorderColor?: string;
	/** Set interface border classes */
	interfacePadding?: string;
	/** Set interface border radius classes */
	interfaceRounded?: string;
	/** Set interface arbitrary classes */
	interfaceClasses?: string;

	// Interface (content) ---
	/** Set interface icon classes */
	interfaceIcon?: string;
	/** Set interface text classes */
	interfaceText?: string;
	/** Set interface subtext classes */
	interfaceSubtext?: string;

	// File List ---
	/** Set file list base classes */
	filesListBase?: string;
	/** Set file list arbitrary classes */
	filesListClasses?: string;

	// File ---
	/** Set file base classes */
	fileBase?: string;
	/** Set file background classes */
	fileBg?: string;
	/** Set file gap classes */
	fileGap?: string;
	/** Set file padding classes */
	filePadding?: string;
	/** Set file border-radius classes */
	fileRounded?: string;
	/** Set file arbitrary classes */
	fileClasses?: string;

	// File (content) ---
	/** Set file icon classes */
	fileIcon?: string;
	/** Set file name classes */
	fileName?: string;
	/** Set file size classes */
	fileSize?: string;
	/** Set file button classes */
	fileButton?: string;

	// State ---
	/** Set disabled state classes for the root. */
	stateDisabled?: string;
	/** Set invalid state classes for the interface. */
	stateInvalid?: string;
	/** Set dragging state classes for the interface. */
	stateDragging?: string;

	// Children ---
	/** Provide an icon for the interface. */
	iconInterface?: ReactNode;
	/** Provide an icon proceeding each file. */
	iconFile?: ReactNode;
	/** Provide an icon for the remove file action. */
	iconFileRemove?: ReactNode;

	// Zag ---
	/** Binds the Zag API for external use. */
	internalApi?: (api: FileUploadApi) => void;
}
