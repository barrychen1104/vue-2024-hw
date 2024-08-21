<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['products'])

const emits = defineEmits(['addToCart'])
</script>

<template>
  <div class="list-group">
    <a
      v-for="item in props.products"
      :key="item.id"
      href="#"
      class="list-group-item list-group-item-action"
      @click.prevent="emits('addToCart', item)"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ item.name }}</h5>
        <small>${{ item.price }}</small>
      </div>
      <p class="mb-1">{{ item.description }}</p>
    </a>
  </div>
</template>

<style scoped></style>
