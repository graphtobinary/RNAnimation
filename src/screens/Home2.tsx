import React, { useState } from 'react';
import {Pressable, ScrollView, Text, View , Button} from 'react-native';
import SwipeableButton from '../components/SwipeableButton';
import SwipeButton from '../components/SwipeButton';
// import FlaotingTextInput from '../components/FloatingTextInput';
import AnimatedSwitchButton from '../components/AnimatedSwitchButton';
import { useNavigation } from '@react-navigation/native';
// import AnimatedAccordion from '../components/AnimatedAccordion';

const Home2 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const makeSomeRequest = () => {
    console.log('makeSomeRequest');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <ScrollView contentContainerStyle={{ flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Button title="Go To Apple Card Animation" onPress={() => navigation.navigate('home')} />
      <View style ={{ marginVertical: 20}}>
        <SwipeableButton onSwipe={makeSomeRequest} isLoading={isLoading} />
      </View>
      <View style ={{ marginVertical: 20}}>
        <SwipeButton onToggle={() => console.log("Trieertr")}/> 
      </View>
      <View style ={{ marginVertical: 20}}>
        <AnimatedSwitchButton onChange={() => console.log("trigger")} value={true} />
      </View>
      {/* <AnimatedAccordion /> */}
      {/* <FlaotingTextInput /> */}
      <Button title="Layout Animation" onPress={() => navigation.navigate('layoutrn')} />
    </ScrollView>
  );
};

export default Home2;