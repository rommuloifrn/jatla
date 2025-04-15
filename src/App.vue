<script lang="ts">
import { useTaskStore } from './stores/taskStore'
import TaskDetails from './components/TaskDetails.vue'
import { ref } from 'vue'
import TaskForm from './components/TaskForm.vue'

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore()

    const filter = ref('all')

    return {
      taskStore,
      filter,
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
      <TaskForm />
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
