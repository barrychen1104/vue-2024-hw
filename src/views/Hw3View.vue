<script setup>
import { ref, computed } from 'vue'
import ProductList from '@/components/ProductList.vue'
import CartTable from '@/components/CartTable.vue'
import OrderDetails from '@/components/OrderDetails.vue'

const data = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    description: '香濃奶茶搭配QQ珍珠',
    price: 50
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    description: '清新冬瓜配上新鮮檸檬',
    price: 45
  },
  {
    id: 3,
    name: '翡翠檸檬',
    description: '綠茶與檸檬的完美結合',
    price: 55
  },
  {
    id: 4,
    name: '四季春茶',
    description: '香醇四季春茶，回甘無比',
    price: 45
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    description: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50
  },
  {
    id: 6,
    name: '檸檬冰茶',
    description: '檸檬與冰茶的清新組合',
    price: 45
  },
  {
    id: 7,
    name: '芒果綠茶',
    description: '芒果與綠茶的獨特風味',
    price: 55
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    description: '抹茶與鮮奶的絕配',
    price: 60
  }
])

const cart = ref([])
const order = ref([])

const addToCart = (item) => {
  const exist = cart.value.find((x) => x.name === item.name)
  if (!exist) {
    cart.value.push({ ...item, quantity: 1, id: new Date().getTime() })
  } else {
    exist.quantity++
  }
}

const removeFromCart = (item) => {
  cart.value = cart.value.filter((x) => x.id !== item.id)
}

const sum = computed(() => {
  return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
})
const orderSum = ref(0)
const remark = ref('')
const orderRemark = ref('')

const checkOut = () => {
  order.value = cart.value.map((item) => ({
    name: item.name,
    quantity: item.quantity,
    totalPrice: item.price * item.quantity
  }))

  orderSum.value = sum.value
  orderRemark.value = remark.value
  remark.value = ''
  cart.value = []
}
</script>

<template>
  <div id="root">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-4">
          <ProductList :products="data" @addToCart="addToCart" />
        </div>
        <div class="col-md-8">
          <CartTable :cart="cart" @removeFromCart="removeFromCart" />
          <div v-if="cart.length > 0">
            <div class="text-end mb-3">
              <h5>
                總計: <span>${{ sum }}</span>
              </h5>
            </div>
            <textarea
              class="form-control mb-3"
              rows="3"
              placeholder="備註"
              v-model="remark"
            ></textarea>
            <div class="text-end">
              <button class="btn btn-primary" @click="checkOut()">送出</button>
            </div>
          </div>
          <div v-else>
            <h5 class="text-center">請選擇商品</h5>
          </div>
        </div>
      </div>
      <hr />
      <div v-if="order.length > 0" class="row justify-content-center">
        <div class="col-8">
          <OrderDetails :order="order" :orderSum="orderSum" :orderRemark="orderRemark" />
        </div>
      </div>
      <div v-else>
        <h5 class="text-center">目前無訂單</h5>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
