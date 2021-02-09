import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 
  { 
   View , 
   TextInput,
   StyleSheet, 
  } from 'react-native';

import style from './components/input/style'

export default function App() {
  return (
    <View style={{height: '100%', }}>
      
      <View style={{backgroundColor:'#131313', height:'50%',paddingHorizontal: 16,}}> 
        <View style={styleView.view}>
          <TextInput style={style.inputBorderColor}/>
        </View>
      </View>

      <View style={{backgroundColor:'#E60062', height:'50%',paddingHorizontal: 16,}}>
        <View style={styleView.view}>
          <TextInput style={style.inputTransparent}/>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styleView = StyleSheet.create({
  view: 
  {
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center'  
  }
})
