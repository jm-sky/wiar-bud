<script setup lang="ts">
import { config } from '@/config';
</script>

<template>
  <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-primary-400">
    {{ config.logo.highlight }}
  </span>{{ config.logo.normal }}
</template>
