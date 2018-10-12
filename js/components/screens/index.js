/**
 * Created by zhongpeng on 2018/10/11.
 */
import { Navigation } from 'react-native-navigation'
import HomeScreen from './HomeScreen'
import PostsScreen from './PostsScreen'
import PostsDetail from './PostsDetail'

export  function  registerScreens(store, Provider) {
    Navigation.registerComponent('ReduxForReactNativeDemo.HomeScreen', () => HomeScreen, store, Provider);
    Navigation.registerComponent('ReduxForReactNativeDemo.PostsScreen', () => PostsScreen, store, Provider);
    Navigation.registerComponent('ReduxForReactNativeDemo.PostsDetail', () => PostsDetail, store, Provider);
}