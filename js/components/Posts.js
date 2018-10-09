/**
 * Created by zhongpeng on 2018/10/8.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    FlatList,
    Text,
    View
} from 'react-native'

export default class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array.isRequired
    };

    _renderItem = (data) => {
        let dataItem = data.item;
        let { id, title } = dataItem;
        return (
            <View style={{
                flexDirection: 'row',
                width: '100%',
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                backgroundColor: '#ccc'
            }}>
                <Text>{title}</Text>
            </View>

        )
    };

    render() {
        let { posts, isFetching,  onRefresh} = this.props;
        return (
            <FlatList
                style={{flex:1}}
                data={posts}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={this._renderItem}
                refreshing={isFetching}
                onRefresh={onRefresh}
            />
        )
    }
}