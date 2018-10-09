/**
 * Created by zhongpeng on 2018/9/25.
 */
import  {
    ADD_TODO,
    TOGGLE_TODO,
} from '../actions/types'

const todos = (state = [], action) => {
    let {id, text, type} = action;
    switch (type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: id,
                    text: text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => (todo.id === id) ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
};

export default todos;