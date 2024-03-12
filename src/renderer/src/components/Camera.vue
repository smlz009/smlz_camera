<template>
  <main class="w-screen h-screen overflow-hidden">
    <video class="bg-red-500 object-cover h-full"></video>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const constraints = {
    audio: false,
    video: true
  } as MediaStreamConstraints

  const video = document.querySelector('video')!

  navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
    video.srcObject = stream
    video.play()
  })
})
</script>

<style scoped lang="scss"></style>
