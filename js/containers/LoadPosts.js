/**
 * Created by zhongpeng on 2018/10/8.
 */
import React, { Component } from 'react'
import {
    View,
    Button,
    Text
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    invalidateSubreddit
} from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class LoadPosts extends Component {
    static propTypes = {
        selectedSubreddit: PropTypes.string.isRequired,
        posts: PropTypes.array.isRequired,
        isFetching: PropTypes.bool.isRequired,
        lastUpdated: PropTypes.number,
        dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps;
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    _handleChange = nextSubreddit => {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    };

    _handleRefreshClick = () => {
        const { dispatch, selectedSubreddit } = this.props;
        dispatch(invalidateSubreddit(selectedSubreddit));
        dispatch(fetchPostsIfNeeded(selectedSubreddit));
    };

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props;
        return (
            <View style={{flex:1}}>
                <Picker
                    value={selectedSubreddit}
                    onChange={this._handleChange}
                    options={[ 'reactjs', 'frontend' ]}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.</Text>
                </View>

                <Posts
                    posts={posts}
                    onRefresh={this._handleRefreshClick}
                    isFetching={isFetching}
                    {...this.props}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { selectedSubreddit, postsBySubreddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    };

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
};

export default connect(mapStateToProps)(LoadPosts);