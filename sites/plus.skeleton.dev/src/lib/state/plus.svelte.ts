/**
 * Simulated Plus subscription state.
 *
 * Will be replaced by a real account-derived value once Plus subscriptions
 * are wired up. Until then, components read `plusState.unlocked` to decide
 * between "Download" and "Unlock with Plus" affordances, and dev/tooling
 * can flip the value via `plusState.unlocked = true`.
 */
class PlusState {
	unlocked = $state(false);
}

export const plusState = new PlusState();
