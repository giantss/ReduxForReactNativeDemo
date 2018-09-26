/**
 * Created by zhongpeng on 2018/9/25.
 */
import { SET_VISIBILITY_FILTER } from '../actions/types'
import { visibilityFilters } from '../global'

const { SHOW_ALL } = visibilityFilters;
const visibilityFilter = (state = SHOW_ALL, action) => {
    let {type, filter} = action;
    switch (type){
        case SET_VISIBILITY_FILTER:
            return filter;
        default:
            return state
    }
};

export default  visibilityFilter;