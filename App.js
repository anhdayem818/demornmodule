
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import CustomModule from './CustomModule';

const App= () => {
  CustomModule.show()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.text}> Hello </Text>
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
