import React, {useState, useEffect } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, DeviceEventEmitter  } from "react-native";

import Heartbeat from "./Heartbeat";
import heart from "./heart.png";

const App = () => {
  const [heartBeat, setHeartBeat] = useState(false);

  useEffect(() => {
    DeviceEventEmitter.addListener('HeartBeat', () => {
      console.log('Receiving heartbeat event');
      setHeartBeat(true);
      setTimeout(() => {
        setHeartBeat(false);
      }, 1000);
    });
  });

  const imageSize = heartBeat ? 150 : 100;
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={heart} style={{ width: imageSize, height: imageSize }} resizeMode="contain" />
      </View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={() => Heartbeat.startService()}>
          <Text style={styles.instructions}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});


export default App;