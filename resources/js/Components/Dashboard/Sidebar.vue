<script setup>
import { Link } from '@inertiajs/vue3'
import { HomeOutline, ShieldOutline, AlbumsOutline } from '@vicons/ionicons5'
import ApplicationLogo from '../ApplicationLogo.vue'

const menus = [
    {
        label: () => h(Link, { href: route('dashboard') }, { default: () => "Bosh sahifa" }),
        key: "dashboard",
        icon: renderIcon(HomeOutline)
    },
    {
        label: "Admin",
        key: "admin",
        icon: renderIcon(ShieldOutline),
        children: [
            {
                label: () => h(Link, { href: route('profile.edit') }, { default: () => "Kategoriya" }),
                key: "profile.edit",
                icon: renderIcon(AlbumsOutline)
            }
        ]
    }
];

const details = reactive({
    collapse: JSON.parse(localStorage.getItem('collapse'))
})

const collapse = (isCollapse) => {
    localStorage.setItem('collapse', isCollapse)
    details.collapse = isCollapse
}

</script>
<template>
    <n-layout-sider @update:collapsed="collapse" :collapsed="details.collapse" :inverted="false" bordered show-trigger="bar"
        collapse-mode="width" :collapsed-width="64" :width="230" :native-scrollbar="false" class="h-screen">
        <a href="#" target="_blank" class="w-full flex items-center my-2 justify-center px-5">
            <ApplicationLogo :class="details.collapse ? 'w-11' : 'w-1/2 pt-3'" />
        </a>
        <n-menu :collapsed-width="64" :collapsed-icon-size="22" :default-value="route().current()" :options="menus"
            class="text-sm font-medium mt-2" />
    </n-layout-sider>
</template>
