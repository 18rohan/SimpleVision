import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';


const General = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, }}>
      <Camera style={{ flex:1}} type={type}>
      <View style={{
        backgroundColor:'transparent',
        justifyContent:'flex-start',
        alignItems:'flex-end',
        flex:2,
        marginTop:40,
        marginLeft:20,
      }}>
        <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-start',
              justifyContent:'center',
              alignItems: 'center',
              width:80,
              height:80,
              borderRadius:30,
              borderWidth:1,
              borderColor:'white',

            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 0, color: 'white' }}> Flip </Text>
          </TouchableOpacity>

      </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            alignItems:'flex-end',
            justifyContent:'center',
            flexDirection: 'row',
          }}>

           <View style={styles.buttonLayout}>
          <TouchableOpacity  style = {styles.navigationButtons} onPress = {() =>{
            props.navigation.navigate('stones');
          }}>
          <Text style={styles.buttonText}>Stones</Text>
          </TouchableOpacity>
          <TouchableOpacity  style = {styles.captureButton} onPress = {() =>{
            props.navigation.navigate('');
          }}>
          
          </TouchableOpacity>
          <TouchableOpacity  style = {styles.navigationButtons} onPress = {() =>{
            props.navigation.navigate('stones');
          }}>
          <Text style={styles.buttonText}>Leafs</Text>
          </TouchableOpacity>
        
          </View>
          

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:'300',
    color:'black',
  },
   navigationButtons:{
    width:100,
    height:75,
    // backgroundColor:'#ff5f40',
    borderWidth:3,
    borderColor:'orange',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:80,
    margin:20
    // marginBottom:20,
  },
  buttonLayout:{
    margin:10,
    flexDirection:'row',
    justifyContent:'space-between',
    // alignItems:'space',
  },
  buttonText:{
    color:'white',
    fontSize:21,
    fontWeight:'bold',

  },
  captureButton:{
    width:80,
    height:80,
    // backgroundColor:'#ff5f40',
    borderWidth:3,
    borderColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:80,
    margin:15
  },
})

export default General;