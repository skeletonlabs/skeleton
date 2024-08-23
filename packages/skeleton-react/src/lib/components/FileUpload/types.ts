import { ReactNode } from 'react';
import * as fileUpload from '@zag-js/file-upload';

export interface FileUploadProps extends Omit<fileUpload.Context, 'id'>, React.PropsWithChildren {
	dropzoneText?: string;
	dropzoneSubtext?: string;

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
	/** Set interface invalid border color classes */
	interfaceBorderColorInvalid?: string;
	/** Set interface border classes */
	interfacePadding?: string;
	/** Set interface border radius classes */
	interfaceRounded?: string;
	/** Set interface icon classes */
	interfaceIcon?: string;
	/** Set interface text classes */
	interfaceText?: string;
	/** Set interface subtext classes */
	interfaceSubtext?: string;
	/** Set interface arbitrary classes */
	interfaceClasses?: string;

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
	/** Set file name text classes */
	fileName?: string;
	/** Set file size text classes */
	fileSize?: string;
	/** Set file button classes */
	fileButton?: string;
	/** Set file arbitrary classes */
	fileClasses?: string;

	// State ---
	/** Set dragging state styles for the interface. */
	stateDragging?: string;

	// Children ---
	iconDropzone?: ReactNode;
	iconFile?: ReactNode;
	iconFileRemove?: ReactNode;
}
