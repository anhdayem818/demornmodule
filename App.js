
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, 
 AppState } from 'react-native';
import CustomModule from './CustomModule';

const App= () => {
  const [androidId, setAndroidId] = useState("");
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const getDeviceInfo= async()=>{
    const deviceInfo = await CustomModule.getDeviceInfo() 
    setAndroidId(deviceInfo)
  }
  useEffect(() => {
      AppState.addEventListener("change", _handleAppStateChange)
      return ()=>{
        AppState.removeEventListener("change", _handleAppStateChange)
      }
      // getDeviceInfo()
  }, [])

  const _handleAppStateChange=(nextAppState)=>{
    
    if( appState.current.match(/inactive|background/) && nextAppState=== 'active'){
      console.log("App has come to foreground")
    }else{
      console.log( "State: ", nextAppState)
    }
    appState.current = nextAppState
    setAppStateVisible(appState.current)
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}> Hello </Text>
        <TouchableOpacity onPress={getDeviceInfo}>
          <Text> OnPress</Text>
        </TouchableOpacity>
        <Text style={styles.text}> {androidId} </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
