/**
 * Created by zhongpeng on 2018/10/8.
 */
import {
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/types'
import posts from './posts'

const postsBySubreddit = (state = { }, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            };
        default:
            return state
    }
};

export default postsBySubreddit;