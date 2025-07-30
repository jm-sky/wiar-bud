<script setup lang="ts">
import { config } from '@/config';
</script>

<template>
  <div class="logo flex flex-col justify-center gap-3 text-center">
    <div class="text-5xl font-bold drop-shadow-sm">
      <span class="font-extrabold text-transparent bg-clip-text bg-radial-[circle_at_center] bg-[length:200%] from-primary-400 to-primary-900 animate-text-gradient">
        {{ config.logo.highlight }}
      </span>{{ config.logo.normal }}
    </div>
    <div class="text-muted-foreground opacity-80">
      {{ config.company.owner }}
    </div>
  </div>
</template>
