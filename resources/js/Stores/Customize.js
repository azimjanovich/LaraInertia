import { defineStore } from 'pinia'

export const useDesign = defineStore('design', () => {
    const details = reactive(JSON.parse(localStorage.getItem('settings')).design)
    return { details }
})