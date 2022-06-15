import { GET_TODOS } from '@constants/reduxActions'
import { IDispatchTodoAction } from '@interfaces/reduxAction'

import { IInitialTodos } from './types'

const initialState: IInitialTodos = {
  todos: [],
}

const todoReducer = (
  state = initialState,
  action: IDispatchTodoAction,
): IInitialTodos => {
  const { type, payload } = action

  switch (type) {
    case GET_TODOS:
      return { todos: payload }
    default:
      return state
  }
}

export default todoReducer
