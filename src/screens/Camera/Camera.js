import React, {Component} from 'react';
import {View, Text} from 'react-native';

//import startMainTabs from '../MainTabs/startMainTabs';

class CameraScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }
  render(){
    return(
      <View>
        <Text>Camera Screen</Text>
      </View>
    );
  }
}

export default CameraScreen;
