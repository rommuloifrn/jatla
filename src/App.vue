<script lang="ts">
import { useTaskStore } from './stores/taskStore'
import TaskDetails from './components/TaskDetails.vue'
import { ref } from 'vue'

export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore()

    const filter = ref('all')

    return {
      taskStore, filter
    }
  },
}
</script>

<template>
  <main class="flex flex-col items-center">
    <header>
      <h1 class="text-4xl">jatla</h1>
      <p>Just another todo-list app</p>
    </header>

    <div class="w-[40em]">
      <input
        class="w-full p-4 border border-zinc-500 border-r-3 border-b-4 rounded-md focus:border-zinc-200 focus:outline-none transition"
        type="text"
        placeholder="New task"
      />
    </div>

    <nav>
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'dones'">Only completed</button>
    </nav>

    <div class="w-[40em]" v-if="filter === 'all'">
      <p>There is {{ taskStore.totalCount }} tasks left</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>

    <div class="w-[40em]" v-if="filter === 'dones'">
      <p>There is {{ taskStore.donesCount }} tasks left</p>
      <div v-for="task in taskStore.dones" v-if="filter === 'dones'">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
