/**
 * Created by zhongpeng on 2018/9/25.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import postsBySubreddit from './postsBySubreddit'
import selectedSubreddit from './selectedSubreddit'

export default combineReducers({
    todos,
    visibilityFilter,
    postsBySubreddit,
    selectedSubreddit
})