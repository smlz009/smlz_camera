<template>
  <Suspense>
    <main class="overflow-hidden w-screen h-screen relative">
      <section>
        <SettingIcon
          v-if="page === 'camera'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 opacity-80 text-white cursor-pointer z-10"
          @click="page = 'setting'"
        />
        <camera-five
          v-if="page === 'setting'"
          theme="outline"
          size="24"
          class="absolute left-1/2 -translate-x-1/2 mt-3 opacity-80 text-white cursor-pointer z-10"
          @click="page = 'camera'"
        />
      </section>
      <section>
        <Camera v-if="page === 'camera'" />
        <Setting v-else />
      </section>
    </main>
  </Suspense>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Camera from './components/Camera.vue'
import Setting from './components/Setting.vue'
import { Setting as SettingIcon, CameraFive } from '@icon-park/vue-next'

const page = ref('setting')
</script>

<style scoped></style>
