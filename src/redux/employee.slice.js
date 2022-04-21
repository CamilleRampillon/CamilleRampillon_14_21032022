// redux tool kit function
import { createSlice } from '@reduxjs/toolkit'

/**
 * Unify actions and reducers with Redux-Toolkit slices
 * instead of createAction & createReducer
 * create actions & reducer logic regarding adding an employee
 * @function employeesSlice
 * @param {object} state
 * @param {string} action
 * @returns {object} new state
 */
 const employeesSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
  },
  reducers: { 
    addEmployee: (draft, action) => {
      // allow data/store to persist in localStorage 
      const employeesList = JSON.parse(localStorage.getItem('employees')) || [] 
      employeesList.push(action.payload)
      localStorage.setItem('employees', JSON.stringify(employeesList))    
      draft.employees = JSON.parse(localStorage.getItem('employees'))
    },

    fetchEmployees: (draft) => { 
        draft.employees = JSON.parse(localStorage.getItem('employees')) || []   
    },

  },
})

export const { addEmployee, fetchEmployees } = employeesSlice.actions
export default employeesSlice.reducer  // export each action & reducer