import type { Task } from '@/models/Task'
import { defineStore } from 'pinia'

// retorna uma função!
export const useTaskStore = defineStore('taskStore', {
    state: () => ({

        // Dá pra guardar vários valores aqui nesse dicionário
        tasks: [
            { id: 1, title: 'Task 1', completed: false },
            { id: 2, title: 'Task 2', completed: true },
            { id: 3, title: 'Task 3', completed: false },
            { id: 4, title: 'Task 4', completed: true },
            { id: 5, title: 'Task 5', completed: false },
        ],

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
        addTask(task: Task) {
            this.tasks.push(task);

        }
    }
})
