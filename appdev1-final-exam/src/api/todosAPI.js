import axios from 'axios'


const API_BASE = import.meta.env.VITE_APP_API_URL


const api = axios.create({
baseURL: API_BASE,
})


export default {
fetchTodos: () => api.get('/todos'),
fetchTodo: (id) => api.get(`/todos/${id}`),
addTodo: (payload) => api.post('/todos', payload),
updateTodo: (id, payload) => api.put(`/todos/${id}`, payload),
deleteTodo: (id) => api.delete(`/todos/${id}`),
fetchUsersLimited: () => api.get('/users?_limit=3')
}