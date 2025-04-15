import type { Task } from '@/models/Task'
import { defineStore } from 'pinia'

// retorna uma função!
export const useTaskStore = defineStore('taskStore', {
    state: () => ({

        // Dá pra guardar vários valores aqui nesse dicionário
        tasks: [] as Task[],
        isLoading: false,

        randomValue: "oi mano"
    }),

    getters: {
        dones(): Task[] {
            return this.tasks.filter(task => task.completed) as Task[];
        },

        donesCount(): number {
            return this.tasks.reduce((p: number, c: Task) => {
                return c.completed ? p + 1 : p;
            }, 0);
        },

        totalCount(): number { 
            return this.tasks.length;
        }
    },
    actions: {
        async getTasks() {
            this.isLoading = true;
            // Simulando um delay
            const response = await fetch('http://localhost:3000/tasks')
            const data = await response.json()

            this.tasks = data
            this.isLoading = false
        },
        addTask(task: Task) {
            this.tasks.push(task);

        },

        deleteTask(id: number) {
            this.tasks = this.tasks.filter(task => {
                return task.id !== id;
            });
        },

        toggleDone(id: number) {
            const task = this.tasks.find(task => task.id === id);

            task!.completed = !task!.completed;
        }
    }
})
