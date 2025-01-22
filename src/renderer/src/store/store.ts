import { configureStore, createSlice } from '@reduxjs/toolkit'

// Example slice
const exampleSlice = createSlice({
  name: 'example',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

const store = configureStore({
  reducer: {
    example: exampleSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const { increment, decrement } = exampleSlice.actions
export default store
