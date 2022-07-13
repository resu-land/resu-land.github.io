import { browser } from '$app/env';
import {
    writable,
    type Writable
} from 'svelte/store';

let iv = false;

if (browser)
    if (localStorage.theme)
        iv =
            localStorage.theme === 'dark'
                ? true
                : false;
    else localStorage.theme = 'light';

export const dark: Writable<boolean> =
    writable(iv);

export const toggle = () => {
    if (browser) {
        const v =
            localStorage.theme === 'dark'
                ? true
                : false;
        dark.set(!v);
        localStorage.theme =
            !v === true ? 'dark' : 'light';
    }
};
