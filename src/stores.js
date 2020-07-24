import { writable } from "svelte/store";
export const results = writable([]);
export const query = writable("");
export const loadingStatus = writable(false);
