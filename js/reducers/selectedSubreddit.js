/**
 * Created by zhongpeng on 2018/10/8.
 */

import {
    SELECT_SUBREDDIT
} from '../actions/types'

const selectedSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit;
        default:
            return state
    }
};

export default selectedSubreddit;