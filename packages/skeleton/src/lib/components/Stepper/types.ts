export interface StepperState {
	current: number;
	total: number;
}

export type StepperButton = 'submit' | 'reset' | 'button';
export type StepperDispatchParent = <EventKey extends string>(type: EventKey, detail: { step: number; state: StepperState }) => boolean;
