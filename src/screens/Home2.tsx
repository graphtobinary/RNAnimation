import React, { useState } from 'react';
import {ScrollView, Text, View} from 'react-native';
import SwipeableButton from '../components/SwipeableButton';
import SwipeButton from '../components/SwipeButton';
import FlaotingTextInput from '../components/FloatingTextInput';
import AnimatedSwitchButton from '../components/AnimatedSwitchButton';
import AnimatedAccordion from '../components/AnimatedAccordion';

const Home2 = () => {
  const [isLoading, setIsLoading] = useState(false);


  const makeSomeRequest = () => {
    console.log('makeSomeRequest');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <ScrollView contentContainerStyle={{ flex:1, justifyContent: 'center', alignItems:'center'}}>
      <View style ={{ marginVertical: 20}}>
        <SwipeableButton onSwipe={makeSomeRequest} isLoading={isLoading} />
      </View>
      <View style ={{ marginVertical: 20}}>
        <SwipeButton onToggle={() => console.log("Trieertr")}/> 
      </View>
      <AnimatedSwitchButton onChange={() => console.log("trigger")} value={true} />
      <AnimatedAccordion />
      {/* <FlaotingTextInput /> */}
    </ScrollView>
  );
};

export default Home2;