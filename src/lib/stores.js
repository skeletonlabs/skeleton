import { writable } from 'svelte/store'
import { browser } from '$app/env'

const themeController = writable(browser ? (localStorage.getItem("selectedTheme") || 'skeleton') : 'skeleton')
const isDarkTheme = writable(browser ? (localStorage.getItem("darkTheme") || 'true') : 'true')

themeController.subscribe((value) => browser && localStorage.setItem("selectedTheme", value))

isDarkTheme.subscribe((value) => {
    if (browser) {
        localStorage.setItem("darkTheme", value ? "true" : "false")

        if ((value + "") == "true") {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
})

export { themeController, isDarkTheme }