import { reactive } from "vue"

const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches

export const darkMode = reactive({
    status: systemIsDark || false,
    toggle() {
        document.body.classList.toggle('dark')
        this.status = !this.status
    }
})