/**
 * Created by zhongpeng on 2018/9/25.
 */
import  {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
} from './types'
let nextTodoId = 0;

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});
