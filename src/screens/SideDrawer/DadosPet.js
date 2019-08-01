import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import PetModal from './PetModal';
import CommonStyles from '../../Stylesheets/Common';
import DefaultButton from "../../Components/UI/DefaultButton";
import { serverUrl } from '../../Config/Settings.js'

class DadosPetScreen extends Component {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  state = {
    modalVisible: null,
    petName: '',
    petBreed: '',
    petBirth: '',
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
      this.getPetData();

        global.checkBalanceTimer = setInterval(() => {
          this.getPetData();
        }, 20000)
  }

  getPetData = () => {
    fetch(serverUrl+"petdata.json")
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
         petName: dataEvents[0].chosenPetName,
        petBreed: dataEvents[0].chosenPetBreed,
         petBirth: dataEvents[0].chosenPetBirth,
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
        <PetModal
          openModal={this.state.modalVisible}
          onModalClosed={this.modalClosedHandler}
          internKey={this.state.key}
        />
       <Text> Foto</Text>

       <View style={styles.informationContainer}>
          <View style={styles.informationLine}>
            <Text style={styles.textTitle}>Nome: </Text>
            <Text style={styles.textInfo}>{this.state.petName}</Text>
          </View>

          <View style={styles.informationLine}>
            <Text style={styles.textTitle}>Raça: </Text>
            <Text style={styles.textInfo}>{this.state.petBreed}</Text>
          </View>

          <View style={styles.informationLine}>
            <Text style={styles.textTitle}>Nascimento: </Text>
            <Text style={styles.textInfo}>{this.state.petBirth}</Text>
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

export default DadosPetScreen;
