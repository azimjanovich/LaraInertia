<script setup>
import Sidebar from '../Components/Dashboard/Sidebar.vue'
import Navbar from '../Components/Dashboard/Navbar.vue'

const props = defineProps({ title: String })
</script>
<template>
    <n-space vertical>
        <n-layout>
            <n-layout has-sider>
                <Sidebar />
                <n-layout-content class="h-screen">
                    <Navbar :user="$page.props.auth.user" :title="props.title" />
                    <div class="h-screen py-8">
                        <main class="rounded-lg mx-16 p-8">
                            <slot />
                        </main>
                    </div>
                </n-layout-content>

            </n-layout>
        </n-layout>
    </n-space>
</template>
