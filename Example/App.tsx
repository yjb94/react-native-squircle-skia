import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Squircle from 'react-native-squircle-skia';
import Slider, {SliderProps} from '@react-native-community/slider';
import {View} from 'react-native';
import {Dimensions} from 'react-native';

const SIZE = Dimensions.get('window').width / 2 - 32;

const App = () => {
  const [smoothing, setSmoothing] = useState(0.7);
  const [radius, setRadius] = useState(SIZE / 4);

  const handleRadiusChange: SliderProps['onValueChange'] = value => {
    setRadius(Math.floor(value));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.compareContainer}>
        <Squircle
          smoothing={smoothing}
          style={[
            styles.squircle,
            {
              borderRadius: radius,
            },
          ]}>
          <Text style={styles.childText}>{'Squircle'}</Text>
        </Squircle>
        <View
          style={[
            styles.normal,
            {
              borderRadius: radius,
            },
          ]}>
          <Text style={styles.childText}>{'Default'}</Text>
        </View>
      </View>

      <Text style={styles.label}>Radius</Text>
      <Slider
        minimumValue={0}
        maximumValue={SIZE / 2}
        value={radius}
        onValueChange={handleRadiusChange}
      />
      <Text style={styles.label}>Smoothing</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={smoothing}
        onValueChange={setSmoothing}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  compareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  squircle: {
    width: SIZE,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4b86b4',
  },
  normal: {
    width: SIZE,
    height: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#adcbe3',
  },
  label: {
    marginTop: 8,
  },
  childText: {
    color: 'white',
  },
});

export default App;
