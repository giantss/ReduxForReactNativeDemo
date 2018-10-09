/**
 * Created by zhongpeng on 2018/10/8.
 */

import {
    INVALIDATE_SUBREDDIT,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/types'

const posts = (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            };
        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

export default posts;