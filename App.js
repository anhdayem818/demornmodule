
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import CustomModule from './CustomModule';

const App= () => {
  const [androidId, setAndroidId] = useState("123");
  const getDeviceInfo= async()=>{
    const deviceInfo = await CustomModule.getDeviceInfo() 
    setAndroidId(deviceInfo)
  }
  // useEffect(() => {
      
  //     getDeviceInfo()
  // }, [])
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
