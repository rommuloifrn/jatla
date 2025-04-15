<template>
  <form @submit.prevent="handleSubmit">
    <input
      class="w-full p-4 border border-zinc-500 border-r-3 border-b-4 rounded-md focus:border-zinc-200 focus:outline-none transition"
      type="text"
      placeholder="New task"
      v-model="newTask"
    />
    <button>Add</button>
  </form>
</template>

<script lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import { ref } from 'vue'

export default {
  setup() {
    const taskStore = useTaskStore()

    const newTask = ref('')

    const handleSubmit = () => {
        if (newTask.value.length > 0) {
            taskStore.addTask({
                id: Math.floor(Math.random() * 10000),
                title: newTask.value,
                completed: false,
            })

            newTask.value = ''
        }
    }

    return {
      newTask,
      handleSubmit,
    }
  },
}
</script>
