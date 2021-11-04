
import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View, 
 AppState } from 'react-native';
import CustomModule from './CustomModule';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
import CallDetectorManager from 'react-native-call-detection'

const App= () => {
  ReactNativeForegroundService.add_task(()=>{
    console.log(123)
    startListener()
    },{
        delay: 100,
        onLoop: false,
        taskId: 1234,
        onError: (e)=>{
            console.log(e)
        }
    }
  )
  
  
  const startListener = ()=> {
    this.callDetector = new CallDetectorManager((event, phoneNumber)=> {
        console.log(event)
        if (event === 'Disconnected') {
        // Do something call got disconnected
        }
        else if (event === 'Connected') {
        // Do something call got connected
        // This clause will only be executed for iOS
        }
        else if (event === 'Incoming') {
        // Do something call got incoming
        }
        else if (event === 'Dialing') {
        // Do something call got dialing
        // This clause will only be executed for iOS
        }
        else if (event === 'Offhook') {
        //Device call state: Off-hook.
        // At least one call exists that is dialing,
        // active, or on hold,
        // and no calls are ringing or waiting.
        // This clause will only be executed for Android
        }
        else if (event === 'Missed') {
            // Do something call got missed
            // This clause will only be executed for Android
        }
      },
      true, // if you want to read the phone number of the incoming call [ANDROID], otherwise false
      ()=>{}, // callback if your permission got denied [ANDROID] [only if you want to read incoming number] default: console.error
      {
        title: 'Phone State Permission',
        message: 'This app needs access to your phone state in order to react and/or to adapt to incoming calls.'
      }
    )
  }

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
