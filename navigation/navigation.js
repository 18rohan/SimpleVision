import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation'
import General from '../screens/general';
import Stones from '../screens/stones';



const General_stack = createStackNavigator({
	general:General,
  	stones:Stones

},{
  defaultNavigationOptions:{
    headerShown:false,


  }
})
// const Stones_stack = createStackNavigator({
//   stones:Stones
// },{
//   defaultNavigationOptions:{
//     headerShown:false,
//   }
// })

// const TabNav = createBottomTabNavigator({
//   tab_left:General_stack,
//   tab_right:Stones_stack,
// })

export default createAppContainer(General_stack);