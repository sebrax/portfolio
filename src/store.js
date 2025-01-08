import { reactive } from "vue"

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

export const darkMode = reactive({
    status: defaultTheme || false,
    toggle() {
        document.body.classList.toggle('dark')
        this.status = !this.status
    }
})