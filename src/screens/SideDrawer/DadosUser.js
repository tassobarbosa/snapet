import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import UserModal from './UserModal';
import CommonStyles from '../../Stylesheets/Common';
import DefaultButton from "../../Components/UI/DefaultButton";
import { serverUrl } from '../../Config/Settings.js'

class DadosUserScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    modalVisible: null,
    userName: '',
    userEmail: '',
    birthDate: '',
    key: ''
  };

  onNavigatorEvent = event => {
    if(event.type === "NavBarButtonPress"){
      if(event.id === "sideDrawerToggle"){
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  }

  componentDidMount() {
      this.getUserData();

        global.checkBalanceTimer = setInterval(() => {
          this.getUserData();
        }, 20000)
  }

  getUserData = () => {
    fetch(serverUrl+"userdata.json")
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
         userName: dataEvents[0].userName,
         userEmail: dataEvents[0].userEmail,
         birthDate: dataEvents[0].birthDate,
         key: dataEvents[0].key
     });

    })
  }

  modalClosedHandler = () => {
    this.setState({
      modalVisible: null
    });
  };

  modalOpenHandler = () => {
    this.setState({
      modalVisible: true
    });
  };


  render(){
    return(
      <View style={styles.container}>
        <UserModal
          openModal={this.state.modalVisible}
          onModalClosed={this.modalClosedHandler}
          internKey={this.state.key}
        />
<Text> Foto</Text>
        <View style={styles.informationContainer}>
           <View style={styles.informationLine}>
             <Text style={styles.textTitle}>Nome: </Text>
             <Text style={styles.textInfo}>{this.state.userName}</Text>
           </View>

           <View style={styles.informationLine}>
             <Text style={styles.textTitle}>Email: </Text>
             <Text style={styles.textInfo}>{this.state.userEmail}</Text>
           </View>

           <View style={styles.informationLine}>
             <Text style={styles.textTitle}>Nascimento: </Text>
             <Text style={styles.textInfo}>{this.state.birthDate}</Text>
           </View>

           <View style={styles.informationLine}>
             <Text style={styles.textTitle}>Chave: </Text>
             <Text style={styles.textInfo}>{this.state.key}</Text>
           </View>
        </View>

         <View style={styles.buttonContainer}>
           <DefaultButton label="Alterar foto" style={[{width: "40%"}]}/>
           <DefaultButton label="Alterar dados" style={[{width: "40%"}]} onPress={this.modalOpenHandler}/>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonStyles.screenBackgroundColor
  },
  informationContainer: {
    margin: 10,
    backgroundColor: "white",
  },
  informationLine: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: CommonStyles.mainColor,
},
  textInfo: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
},
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "80%",
    marginLeft: "10%"
  }
});

export default DadosUserScreen;
