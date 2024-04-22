import { writable } from 'svelte/store';

export const user_account_number = writable(0);
export const user_username = writable("");
export const user_password_hash = writable("password");
export const user_first_name = writable("George");
export const user_last_name = writable("Costanza");
export const user_interest = writable(0.00);
export const user_age = writable(0);
export const user_allowance = writable(0.00);
export const user_account_balance = writable(0.00);