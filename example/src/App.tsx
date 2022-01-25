import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Squircle from 'react-native-squircle-skia';

const App = () => {
  const [radius, setRadius] = useState(50);

  const handleValueChange = (value: number) => {
    setRadius(Math.floor(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Squircle
        style={[
          styles.squircle,
          {
            borderRadius: radius,
          },
        ]}
      >
        <Text>i am a child</Text>
      </Squircle>
      <Slider
        minimumValue={0}
        maximumValue={200}
        value={radius}
        onValueChange={handleValueChange}
      />
      <Text>{`radius: ${radius}`}</Text>
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
