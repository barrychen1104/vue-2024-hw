<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['cart'])

const emits = defineEmits(['removeFromCart'])
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col" width="50">操作</th>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col" width="90">數量</th>
        <th scope="col">單價</th>
        <th scope="col">小計</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.cart" :key="item.id">
        <td>
          <button type="button" class="btn btn-sm" @click="emits('removeFromCart', item)">x</button>
        </td>
        <td>{{ item.name }}</td>
        <td>
          <small>{{ item.description }}</small>
        </td>
        <td>
          <select class="form-select" v-model="item.quantity">
            <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
          </select>
        </td>
        <td>${{ item.price }}</td>
        <td>${{ item.price * item.quantity }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
