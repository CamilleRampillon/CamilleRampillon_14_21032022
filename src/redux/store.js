import { configureStore } from '@reduxjs/toolkit'
import employeesReducer from '../redux/employee.slice'

// create the store & put all reducers together
export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
})