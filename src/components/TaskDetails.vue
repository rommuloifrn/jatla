<template>
  <div
    class="p-4 border rounded-md border-zinc-500 border-r-3 border-b-4 mt-1 flex justify-between"
  >
    <h3>
      {{ task.title }} <span v-if="task.completed">completed</span>
    </h3>
    <div class="flex">
      <svg
        @click="taskStore.toggleDone(task.id)"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-check-icon lucide-check block"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <svg
        @click="taskStore.deleteTask(task.id)"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-trash2-icon lucide-trash-2 block"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { useTaskStore } from '@/stores/taskStore'

export default {
  props: ['task'],

  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore,
    }
  },
}
</script>
