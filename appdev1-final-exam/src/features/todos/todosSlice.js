import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todosAPI from '../../api/todosAPI'


export const getTodos = createAsyncThunk('todos/getTodos', async () => {
  const res = await todosAPI.fetchTodos()
  // JSONPlaceholder returns 200 todos — template expects full set; you may limit later
  return res.data
})


export const addTodo = createAsyncThunk('todos/addTodo', async (payload) => {
  const res = await todosAPI.addTodo(payload)
  return res.data
})


export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, payload }) => {
  const res = await todosAPI.updateTodo(id, payload)
  return res.data
})


export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await todosAPI.deleteTodo(id)
  return id
})


const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => { state.status = 'loading' })
      .addCase(getTodos.fulfilled, (state, action) => { state.status = 'succeeded'; state.items = action.payload })
      .addCase(getTodos.rejected, (state, action) => { state.status = 'failed'; state.error = action.error.message })


      .addCase(addTodo.fulfilled, (state, action) => { state.items.unshift(action.payload) })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const idx = state.items.findIndex(t => t.id === action.payload.id)
        if(idx !== -1) state.items[idx] = action.payload
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(t => t.id !== action.payload)
      })
  }
})


export default todosSlice.reducer
