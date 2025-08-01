<script setup lang="ts">
import { useI18n } from '#imports'
import { config } from '~/config'
import AboutCard from '../Cards/AboutCard.vue'
import List from '../List/List.vue'
import ListItem from '../List/ListItem.vue'
import BaseSection from './BaseSection.vue'
import { useAnimationConfig } from '@/composables/useAnimationConfig'

const { t } = useI18n()
const { slideUp, delayed } = useAnimationConfig()
</script>

<template>
  <BaseSection id="about" :title="t('about.title')">
    <AboutCard
      v-motion
      :initial="slideUp.initial"
      :visible-once="delayed(slideUp.visibleOnce, 100)"
      :title="t('about.whatWeDo.title')"
      class="leading-relaxed"
    >
      <p class="text-muted-foreground mb-4">
        {{ t('about.whatWeDo.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.whatWeDo.painting') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.drywall') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.tiling') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.flooring') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.electrical') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.plumbing') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.furniture') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.renovation') }}</ListItem>
      </List>
    </AboutCard>
    <AboutCard
      v-motion
      :initial="slideUp.initial"
      :visible-once="delayed(slideUp.visibleOnce, 200)"
      :title="t('about.values.title')"
      class="leading-relaxed"
    >
      <p class="text-muted-foreground mb-4">
        {{ t('about.values.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.values.quality') }}</ListItem>
        <ListItem>{{ t('about.values.experience') }}</ListItem>
        <ListItem>{{ t('about.values.reliability') }}</ListItem>
        <ListItem>{{ t('about.values.pricing') }}</ListItem>
        <ListItem>{{ t('about.values.warranty') }}</ListItem>
        <ListItem>{{ t('about.values.materials') }}</ListItem>
      </List>
    </AboutCard>
    <AboutCard
      v-motion
      :initial="slideUp.initial"
      :visible-once="delayed(slideUp.visibleOnce, 300)"
      :title="t('about.company.title')"
      class="leading-relaxed"
    >
      <p class="text-muted-foreground mb-4">
        {{ t('about.company.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.company.owner') }}: {{ config.company.owner }}</ListItem>
        <ListItem>{{ t('about.company.nip') }}: {{ config.company.nip }}</ListItem>
        <ListItem>{{ t('about.company.regon') }}: {{ config.company.regon }}</ListItem>
        <ListItem>{{ t('about.company.phone') }}: {{ config.company.phone }}</ListItem>
        <ListItem>{{ t('about.company.email') }}: {{ config.company.email }}</ListItem>
        <ListItem>{{ t('about.company.coverage') }}</ListItem>
      </List>
    </AboutCard>
  </BaseSection>
</template>
