<template>
  <div
    class="wrapper absolute h-full right-0 max-h-screen p-4 flex flex-col gap-4 overflow-y-auto overflow-x-hidden"
  >
    <div v-for="(toast, key) in toasts" :key="key">
      <div
        :class="`toast  translate-y-6 toast ease-in-out w-72 h-16 rounded-lg flex justify-center items-center z-40 ${
          toast.style
        } ${!toast.isDisplay ? '' : 'render-toast'}`"
      >
        <p class="text-white font-semibold">{{ toast.message }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import { TOAST_KEY } from "../constants/injectionKeys";
const toasts = inject(TOAST_KEY);
</script>

<style lang="css">
.wrapper {
  transition: 2s ease all;
}

.toast {
  cursor: pointer;
}

.render-toast {
  animation: fadein 1s, slide-in 0.4s forwards ease;
}

.dismiss-toast {
  animation: slide-out 1s forwards ease, fadeout 1.2s ease;
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
