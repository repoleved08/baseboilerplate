<template>
    <h3>About {{ about }}</h3>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const about = ref('Us')
</script>
