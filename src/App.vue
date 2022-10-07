<template>
  <div class="flex">
    <div class="my-80">
      <div class="flex justify-center items-center space-x-4 mb-10">
        <input
          class="w-full h-12 rounded-lg pl-5 border"
          type="text"
          placeholder="Add Custom Message"
          v-model="message"
        />
        <input
          class="w-full h-12 rounded-lg pl-5 border"
          type="text"
          placeholder="Duration in Seconds"
          v-model="duration"
        />
      </div>
      <div class="flex justify-center items-center space-x-4">
        <button
          class="hover:bg-sky-600 bg-sky-400 text-white p-3 rounded-lg text-sm px-7"
          @click="clickToast('info')"
        >
          SHOW INFO TOAST
        </button>

        <button
          class="hover:bg-green-600 bg-green-400 text-white p-3 rounded-lg font-semibold text-sm px-7"
          @click="clickToast('success')"
        >
          SHOW SUCCESS TOAST
        </button>

        <button
          class="hover:bg-red-600 bg-red-400 text-white p-3 rounded-lg font-semibold text-sm px-7"
          @click="clickToast('error')"
        >
          SHOW ERROR TOAST
        </button>
      </div>
    </div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, watch } from "vue";
import { useToast } from "./composables/useToast";
import Toast from "./components/Toast.vue";
import { TOAST_KEY } from "./constants/injectionKeys";

const { openToast, destroyToast } = useToast();
const toasts = ref([]);
const message = ref();
const duration = ref();

provide(TOAST_KEY, toasts);

const clickToast = (type: "info" | "success" | "error") => {
  let config = openToast({ type, message: message.value, isDisplay: true });
  toasts.value.push(config);
  let sec = !duration.value ? 3 : duration.value;

  setTimeout(() => {
    toasts.value[0].style = `${toasts.value[0].style} dismiss-toast`;
    removeToast();
  }, sec * 1000);
};

const removeToast = () => {
  destroyToast(toasts.value);
};
</script>
