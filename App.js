
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, 
 AppState } from 'react-native';
import CustomModule from './CustomModule';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';

const App= () => {
  ReactNativeForegroundService.add_task(()=>{
      console.log("demo 123");
    },{
        delay: 100,
        onLoop: true,
        taskId: 1234,
        onError: (e)=>{
            console.log(e)
        }
    }
  )

  const _handerStartHeadless = ()=>{
    ReactNativeForegroundService.start({
      id: 1234,
      title: "Foreground Service",
      message: "you are online!",
    });
  }

  const _handerStoptHeadless=()=>{
    ReactNativeForegroundService.stop()
  }

  return (
    <SafeAreaView style={styles.container}>
     <Text> Hello</Text>
     <TouchableOpacity onPress={_handerStartHeadless} style={styles.button}>
       <Text> Start Listener</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={_handerStoptHeadless} style={styles.button}>
       <Text> Stop Listener</Text>
     </TouchableOpacity>
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
  button:{
    padding: 10,
    backgroundColor: "#3de",
    borderWidth: 1,
    borderRadius: 5,
  }
});

export default App;
