<script setup lang="ts">
import { useI18n } from '#imports'
import { Button } from '@/components/ui/button'
import DevMadeItLogo from '../Logo/CompanyLogo.vue'

const { t } = useI18n()
</script>

<template>
  <section
    class="w-full h-screen bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 from-80% flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div class="py-20">
      <DevMadeItLogo class="mb-2" />
      <p class="px-4 md:px-0 text-xl leading-relaxed md:text-2xl text-muted-foreground mb-8">
        {{ t('hero.description') }}
      </p>
      <div class="flex justify-center gap-4">
        <Button
          as="a"
          href="#about"
          size="lg"
          variant="primary"
          vibe="primary"
        >
          <span class="relative z-10">{{ t('hero.learnMore') }}</span>
        </Button>

        <Button
          as="a"
          href="#contact"
          size="lg"
          variant="outline"
          vibe="outline"
        >
          {{ t('hero.contact') }}
        </Button>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full h-1/8 bg-gradient-to-b from-transparent to-white dark:from-transparent dark:to-gray-900" />
  </section>
</template>
