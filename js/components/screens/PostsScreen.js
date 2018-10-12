/**
 * Created by zhongpeng on 2018/10/11.
 */
import React, { Component } from 'react'
import {
    View
} from 'react-native'

import LoadPosts from '../../containers/LoadPosts'

export default class PostsScreen extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <LoadPosts {...this.props}/>
            </View>
        );
    }
}