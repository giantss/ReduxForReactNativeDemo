/**
 * Created by zhongpeng on 2018/9/25.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { visibilityFilters } from '../global'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityFilters;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case SHOW_ALL:
            return todos;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)