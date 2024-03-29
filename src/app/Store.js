import {configureStore} from '@reduxjs/toolkit'
import { todoReducer } from '../Feaature/todo/TodoSlice'

export const store = configureStore({
    reducer : todoReducer
})