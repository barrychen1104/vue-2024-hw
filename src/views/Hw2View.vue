<template>
  <div class="container">
    <div class="auth-section">
      <div class="auth-form">
        <h2>註冊</h2>
        <input v-model="signUpFields.email" placeholder="Email" type="text" />
        <input v-model="signUpFields.password" placeholder="Password" type="password" />
        <input v-model="signUpFields.nickname" placeholder="Nickname" type="text" />
        <button @click="signUp">Sign Up</button>
        <p class="message">{{ signUpMessage }}</p>
      </div>

      <div class="auth-form">
        <h2>登入</h2>
        <input v-model="signInField.email" placeholder="Email" type="email" />
        <input v-model="signInField.password" placeholder="Password" type="password" />
        <button @click="signIn">Sign In</button>
        <p class="message">{{ signInRes }}</p>
      </div>

      <div class="auth-form">
        <h2>驗證</h2>
        <input v-model="checkToken" placeholder="Token" />
        <button @click="checkOut">Check Out</button>
        <p class="message">{{ checkOutMessage }}</p>
      </div>

      <div class="auth-form">
        <h2>登出</h2>
        <input v-model="signOutToken" placeholder="Token" />
        <button @click="signOut">Sign Out</button>
        <p class="message">{{ signOutMessage }}</p>
      </div>
    </div>

    <div class="todo-section">
      <h2>Todo list</h2>
      <div v-if="token" class="todo-content">
        <div class="todo-input">
          <input v-model="newTodo" placeholder="New Todo" />
          <button @click="addTodo">Add Todo</button>
        </div>
        <ul class="todo-list">
          <li v-for="(todo, index) in todos" :key="index" class="todo-item">
            <div class="todo-info">
              <span :class="{ completed: todo.status }">{{ todo.content }}</span>
              <span class="status-badge" :class="{ completed: todo.status }">
                {{ todo.status ? '完成' : '未完成' }}
              </span>
            </div>
            <div class="todo-actions">
              <input
                type="text"
                :placeholder="todo.content"
                @change="updateTodoEdit($event, todo.id)"
              />
              <button @click="updateTodo(todo.id)" class="update">Update</button>
              <button @click="toggleStatus(todo.id)" class="toggle">
                {{ todo.status ? 'Undo' : 'Complete' }}
              </button>
              <button @click="deleteTodo(todo.id)" class="delete">Delete</button>
            </div>
          </li>
        </ul>
      </div>
      <p v-else class="message">Please sign in to view and manage your todos.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const apiUrl = 'https://todolist-api.hexschool.io'

const signUp = async () => {
  try {
    const res = await axios.post(`${apiUrl}/users/sign_up`, signUpFields.value)
    console.log('res', res)
    signUpRes.value = res.data.uid
  } catch (err) {
    signUpMessage.value = `註冊失敗: ${err.message}`
  }
}

const signUpMessage = ref('')
const signUpFields = ref({
  email: '',
  password: '',
  nickname: ''
})
const signUpRes = ref('')

const signInField = ref({
  email: '',
  password: ''
})
const signInRes = ref('')

const signIn = async () => {
  try {
    const res = await axios.post(`${apiUrl}/users/sign_in`, signInField.value)
    signInRes.value = res.data.token

    // Set cookie with 1-day expiration
    const expirationDate = new Date()
    expirationDate.setDate(expirationDate.getDate() + 1)
    document.cookie = `customTodoToken=${res.data.token}; expires=${expirationDate.toUTCString()}; path=/`
  } catch (err) {
    signInRes.value = `登入失敗: ${err.message}`
  }
}

const checkToken = ref('')
const checkOutMessage = ref('')

const checkOut = async () => {
  try {
    const res = await axios.get(`${apiUrl}/users/checkout`, {
      headers: {
        authorization: checkToken.value
      }
    })
    checkOutMessage.value = `驗證功 UID: ${res.data.uid}`
  } catch (err) {
    checkOutMessage.value = `驗證失敗: ${err.message}`
  }
}

const signOutToken = ref('')
const signOutMessage = ref('')
const signOut = async () => {
  try {
    const res = await axios.post(
      `${apiUrl}/users/sign_out`,
      {},
      {
        headers: {
          authorization: signOutToken.value
        }
      }
    )
    console.log('res', res)
    signOutMessage.value = '登出成功'
  } catch (err) {
    signOutMessage.value = `登出失敗: ${err.message}`
  }
}

const token = ref('')
const todos = ref([])
const newTodo = ref('')
const todoEdit = ref({})

const fetchTodos = async () => {
  try {
    const res = await axios.get(`${apiUrl}/todos`, {
      headers: { authorization: token.value }
    })
    todos.value = res.data.data
  } catch (err) {
    console.error('Error fetching todos:', err)
  }
}

const addTodo = async () => {
  if (!newTodo.value.trim()) return
  try {
    await axios.post(
      `${apiUrl}/todos`,
      { content: newTodo.value },
      {
        headers: { authorization: token.value }
      }
    )
    newTodo.value = ''
    fetchTodos()
  } catch (err) {
    console.error('Error adding todo:', err)
  }
}

const updateTodoEdit = (event, id) => {
  todoEdit.value[id] = event.target.value
}

const updateTodo = async (id) => {
  try {
    await axios.put(
      `${apiUrl}/todos/${id}`,
      { content: todoEdit.value[id] },
      {
        headers: { authorization: token.value }
      }
    )
    fetchTodos()
    todoEdit.value[id] = ''
  } catch (err) {
    console.error('Error updating todo:', err)
  }
}

const toggleStatus = async (id) => {
  try {
    await axios.patch(
      `${apiUrl}/todos/${id}/toggle`,
      {},
      {
        headers: { authorization: token.value }
      }
    )
    fetchTodos()
  } catch (err) {
    console.error('Error toggling todo status:', err)
  }
}

const deleteTodo = async (id) => {
  if (confirm('Are you sure you want to delete this todo?')) {
    try {
      await axios.delete(`${apiUrl}/todos/${id}`, {
        headers: { authorization: token.value }
      })
      fetchTodos()
    } catch (err) {
      console.error('Error deleting todo:', err)
    }
  }
}

onMounted(async () => {
  token.value = document.cookie.replace(
    /(?:(?:^|.*;\s*)customTodoToken\s*=\s*([^;]*).*$)|^.*$/,
    '$1'
  )

  if (token.value) {
    try {
      const res = await axios.get(`${apiUrl}/users/checkout`, {
        headers: { authorization: token.value }
      })
      console.log('res', res)
      fetchTodos()
    } catch (err) {
      console.error('Error checking token:', err)
      token.value = ''
    }
  }
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.auth-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.auth-form {
  flex: 1;
  min-width: 200px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

h2 {
  margin-top: 0;
  color: #333;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.message {
  margin-top: 10px;
  font-size: 0.9em;
  color: #666;
  word-wrap: break-word; /* 讓文字自動換行 */
  white-space: normal; /* 允許文字換行 */
}

.todo-section {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.todo-input {
  display: flex;
  margin-bottom: 20px;
}

.todo-input input {
  flex-grow: 1;
  margin-right: 10px;
  margin-bottom: 0;
}

.todo-input button {
  width: auto;
}

.todo-list {
  list-style-type: none;
  padding: 0;
}

.todo-item {
  background-color: white;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.todo-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.todo-info .completed {
  text-decoration: line-through;
  color: #888;
}

.status-badge {
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  background-color: #ffd700;
}

.status-badge.completed {
  background-color: #4caf50;
  color: white;
}

.todo-actions {
  display: flex;
  gap: 5px;
}

.todo-actions input {
  flex-grow: 1;
}

.todo-actions button {
  width: auto;
  padding: 5px 10px;
  font-size: 0.9em;
}

.todo-actions .update {
  background-color: #2196f3;
}
.todo-actions .toggle {
  background-color: #ff9800;
}
.todo-actions .delete {
  background-color: #f44336;
}

@media (max-width: 600px) {
  .auth-section {
    flex-direction: column;
  }

  .todo-actions {
    flex-wrap: wrap;
  }

  .todo-actions button {
    flex: 1 0 40%;
  }
}
</style>
