<script setup>
import { PersonCircleOutline, PersonOutline, ExitOutline, Language } from "@vicons/ionicons5"

const props = defineProps({
    user: Object,
    title: String
})

const infoModal = ref(false)
const profileOptions = [
    {
        label: "Hisob",
        key: "profile",
        icon: renderIcon(PersonCircleOutline),
    },
    {
        label: "Hisobni yangilash",
        key: "editProfile",
        icon: renderIcon(PersonOutline)
    },
    {
        label: () => h("a", { href: route('logout'), method: 'post', as: 'button' }, { default: () => 'Chiqish' }),
        key: "logout",
        icon: renderIcon(ExitOutline),
    }
]

const langs = [
    {
        label: 'O‘zbekcha',
        key: 'oz'
    },
    {
        label: 'Ўзбекча',
        key: 'uz'
    },
    {
        label: 'Русский',
        key: 'ru'
    },
    {
        label: 'English',
        key: 'en'
    }
]

const profile = (key) => {
    if (key == 'profile') {
        infoModal.value = true
    }
}


const setLang = (key) => {
    localStorage.setItem('locale', key.toLowerCase())
    let fullPath = window.location.pathname.split('/')
    if ((fullPath[1] == 'uz' || fullPath[1] == 'en') && key == 'ru') {
        fullPath[1] = ''
    } else if (fullPath[1] == 'uz' || fullPath[1] == 'en') {
        fullPath[1] = key.toLowerCase()
    }
    else {
        if (key != 'ru') {
            fullPath.unshift(key.toLowerCase())
        }
    }

    fullPath = fullPath.filter(item => item)

    window.location.href = "/" + fullPath.join('/')
}

const defaultAvatar = () => props.user.name.split(' ').map(word => word[0])[0]
</script>
<template>
    <n-layout-header bordered class="drop-shadow-md sticky top-0">
        <div class="flex items-center justify-between h-14 px-4">
            <p class="text-lg font-bold">{{ props.title }}</p>
            <div class="items-center justify-center flex">
                <n-dropdown trigger="click" :options="langs" @select="setLang">
                    <n-button strong secondary class="p-5">
                        <template #icon>
                            <n-icon :component="Language" />
                        </template>
                    </n-button>
                </n-dropdown>
                <span class="mx-2"></span>
                <n-dropdown trigger="click" :options="profileOptions" @select="profile">
                    <n-button strong secondary circle class="p-5">
                        <template #icon>
                            <n-p class="font-semibold">
                                {{ defaultAvatar() }}
                            </n-p>
                        </template>
                    </n-button>
                </n-dropdown>
            </div>
        </div>
    </n-layout-header>

    <n-modal v-model:show="infoModal" preset="dialog">
        <template #header>
            <div>Profil</div>
        </template>
        <div class="flex justify-center">
            <p class="text-sm font-bold">{{ user.name }}</p>
        </div>
        <hr class="my-3">
        <div>
            <span>Email: </span>
            <span>{{ user.email }}</span>
        </div>
        <div class="mt-2">
            <span>Telefon: </span>
            <span>{{ user.phone }}</span>
        </div>
    </n-modal>
</template>
