import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Squircle from 'react-native-squircle-skia';

const App = () => {
  const [radius, setRadius] = useState(50);

  return (
    <SafeAreaView style={styles.container}>
      <Squircle
        smoothing={0.7}
        style={[
          styles.squircle,
          {
            borderRadius: radius,
          },
        ]}>
        <Text>i am a child</Text>
      </Squircle>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  squircle: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default App;
