/**
 * Created by zhongpeng on 2018/9/25.
 */
import  {
    ADD_TODO,
    SET_VISIBILITY_FILTER,
    TOGGLE_TODO,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT
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

export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export const invalidateSubreddit = subreddit => ({
    type: INVALIDATE_SUBREDDIT,
    subreddit
});

export const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});

export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data,
    receivedAt: Date.now()
});

const fetchPosts = subreddit => dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`http://localhost:8081/data/${subreddit}.json`)
        .then(response => response.json())
        .then(json => {
            setTimeout(()=>{
                dispatch(receivePosts(subreddit, json))
            },2000);

        })
};

const shouldFetchPosts = (state, subreddit) => {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true
    }
    if (posts.isFetching) {
        return false
    }
    return posts.didInvalidate
};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
        return dispatch(fetchPosts(subreddit))
    }
};