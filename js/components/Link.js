/**
 * Created by zhongpeng on 2018/9/25.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    TouchableOpacity,
    Text
} from 'react-native'

export default class Link extends Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        filter: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {
        let { active,  filter, onClick } = this.props;
        return (
           <TouchableOpacity
               style={{
                   marginLeft: 4,
                   height: 40,
                   flex:1,
                   borderWidth: 1,
                   borderColor: '#ccc',
                   alignItems: 'center',
                   justifyContent:'center'
               }}
               onPress={onClick}
           >
               <Text style={{fontSize: 10, color: active ? 'black' : '#cccccc'}}>{filter}</Text>
           </TouchableOpacity>
        );
    }
}