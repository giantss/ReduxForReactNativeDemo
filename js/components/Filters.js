/**
 * Created by zhongpeng on 2018/9/25.
 */
import React, { Component } from 'react'
import {
    View,
} from 'react-native'
import FilterLink from '../containers/FilterLink'
import { visibilityFilters } from '../global'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE  } = visibilityFilters;

export default  class Filters extends Component {

    render(){
        return(
            <View style={{ flexDirection: 'row', marginTop: 20}}>
                <FilterLink filter={SHOW_ALL} />
                <FilterLink filter={SHOW_COMPLETED} />
                <FilterLink filter={SHOW_ACTIVE} />
            </View>
        )
    }
}