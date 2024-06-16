// Common Utility Features

// TODO: utilize this until Svelte provides a first-class solution.
// https://svelte-5-preview.vercel.app/#H4sIAAAAAAAACo2SMW-DMBCF_4plVSKoCDoTglRl6toOHUoHapzEKZwt-wipEP-9wg7Eadqoo---ez69dz3diJobmr71FMqG05Q-KkUjil9qfJgDr5HTiBrZajZWMsO0UJgXUKBolNRIemI4riUgPyIZyEbLhgRuMlhecC9YIp-RODHjO3ZovDcX9Hon6mom7Sv2RKHAmiPRZedEV-TOqi0eQqvCJBgknS6V4tWEAO_cDicKCty0wFBIIALYIiT9WCtwkr2_X7qCLxQfyrqdWoOTOTuwCKbhIJrXczv5kC8YRBeLjnCWnH2G7KNFlEAksFqwz1UvgA35EzDNGw6YJa7vWOdbktOINrISG8ErmqJu-RDNGVvmvyl7-W1v5gyOds57wWx_8yZc-vSPnLZ_GXVtjcqfy47Y6FPST_JDlqjcdl_d-ExcB2nZW275V3o2bW98w_jRWsTq0pjTmdtTsj-cjzOcT1O3DKVeCBAoyno-PNwJE09Dp-Z0Z8P1ku_DN0HaHf7CAwAA
/** Provide reactive state for Context API */
export class State<T> {
  value = $state() as T;
  constructor(initial: T) {
    this.value = initial;
  }
}
