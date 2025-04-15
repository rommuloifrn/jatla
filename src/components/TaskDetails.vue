<template>
    <div class="p-4 border rounded-md border-zinc-500 border-r-3 border-b-4 mt-1">
        <h3>
            {{ task.title }}
        </h3>
    </div>

</template>

<script lang="ts">
    export default {
        props: [
            'task'
        ]
    }
</script>