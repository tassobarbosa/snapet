import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import { serverUrl } from '../../Config/Settings.js'
//import startMainTabs from '../MainTabs/startMainTabs';

class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    encodedData: ''
  }

  componentDidMount() {
      this.getPetPhoto();
  }

  getPetPhoto = () => {
    fetch(serverUrl+"petphoto.json")
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes)
      const dataEvents = [];
      for(let key in parsedRes){
        dataEvents.push({
          ...parsedRes[key],
          key: key
        })
      }
       this.setState({
         encodedData: dataEvents[0].address,
     });

    })
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
        <Image
            style={{width: 66, height: 58}}
            source={{uri: `data:image/gif;base64,${this.state.encodedData}`}}
          />
      </View>
    );
  }
}

export default HomeScreen;
