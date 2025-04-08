<script setup lang="ts">
import { ref } from 'vue'
import { useCommonStore } from '@/stores/common'

const common = useCommonStore()

const menuActive = ref(false)

const clickMenu = () => {
  menuActive.value = !menuActive.value
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <header class="bg-white h-[63px] flex items-center px-6 shadow-lg fixed w-full z-10">
    <h1 class="text-black text-xl hina-mincho-regular">青蛙x哈魯 2025/04/12 芝山綠門</h1>
    <div class="menu-btn" :class="{ active: menuActive }" @click="clickMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Drawer
      v-model:visible="menuActive"
      header=""
      position="right"
      :pt="{
        root: '!border-0',
        header: 'bg-white',
        content: 'bg-white',
      }"
      :show-close-icon="false"
    >
      <Menu
        :model="common.menuItems"
        :unstyled="true"
        :pt="{
          item: 'mb-5 noto-serif-hk-500',
        }"
      >
        <template #item="{ item, props }">
          <a
            v-ripple
            :href="'#' + item.hash"
            :target="item.target"
            v-bind="props.action"
            @click="menuActive = false"
          >
            <span class="ml-2 text-lg text-black cursor-pointer">{{ item.label }}</span>
          </a>
        </template>
      </Menu>
    </Drawer>
  </header>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
  <div
    class="hina-mincho-regular text-3xl w-[45px] h-[45px] fixed bg-sky-400/[.8] rounded-full m-5 right-0 bottom-0 z-10 flex justify-center items-end text-white"
    @click="scrollToTop()"
  >
    ^
  </div>
</template>

<style scoped>
.menu-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 16px 24px;
}
.menu-btn div {
  background: #000;
  width: 24px;
  height: 2px;
  margin: 6px 0;
  border-radius: 2px;
  transition: 0.2s;
}
.menu-btn.active div {
  transform: scale(1.1);
  transition: 0.3s;
}
.menu-btn.active div:nth-child(1) {
  transform: translate(0, 8px) scale(1.1) rotate(-45deg);
}
.menu-btn.active div:nth-child(2) {
  transform: scale(1.1);
  opacity: 0;
}
.menu-btn.active div:nth-child(3) {
  transform: translate(0, -8px) scale(1.1) rotate(45deg);
}
</style>
