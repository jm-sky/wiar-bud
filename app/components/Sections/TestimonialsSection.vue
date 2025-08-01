<script setup lang="ts">
import { useI18n } from '#imports'
import BaseSection from '@/components/Sections/BaseSection.vue';
import TestimonialCard from '@/components/Cards/TestimonialCard.vue';

const { t } = useI18n()
const { slideUp, delayed } = useAnimationConfig()

const testimonials = [
  {
    author: "Jan Madeyski",
    date: "2023",
    location: "Warszawa",
    content: "Jestem bardzo zadowolony ze współpracy"
  }
]
</script>

<template>
  <BaseSection :title="t('testimonials.title')">
    <TestimonialCard
      v-for="testimonial in testimonials"
      :key="`${testimonial.author}-${testimonial.date}`"
      v-motion
      :initial="slideUp.initial"
      :visible-once="delayed(slideUp.visibleOnce, 100)"
      :author="testimonial.author"
      :date="testimonial.date"
      :location="testimonial.location"
      :content="testimonial.content"
    />
  </BaseSection>
</template>
