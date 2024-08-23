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
	filesBase?: string;
	/** Set file name classes */
	fileName?: string;
	/** Set file button classes */
	fileButton?: string;
	/** Set file arbitrary classes */
	filesClasses?: string;

	// State ---
	/** Set dragging state styles for the interface. */
	stateDragging?: string;

	// Children ---
	dropzoneIcon?: ReactNode;
	fileIcon?: ReactNode;
	fileRemoveIcon?: ReactNode;
}
