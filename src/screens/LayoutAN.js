import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, Dimensions, View, Animated, TouchableWithoutFeedback } from "react-native";

export default class LayoutAN extends Component {
  state = {
    played: false,
    text: 'Welcome!',
    animation: new Animated.Value(50),
    a2: new Animated.Value(50),
    at: new Animated.Value(0),
  };

  openAnimation = () => {
    Animated.sequence([
     Animated.timing(this.state.animation, {
      toValue: Dimensions.get('window').height,
      duration: 250
    }),
      Animated.parallel([
        Animated.timing(this.state.a2, {
          toValue: Dimensions.get('window').width,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(this.state.at, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ]).start(() => {
      this.setState({
        played: true
      });
    });
  }
  closeAnimation = () => {
    this.setState({
      text: 'Goodbye!'
    });

    Animated.sequence([
     Animated.timing(this.state.animation, {
      toValue: 50,
      duration: 250,
      useNativeDriver: false
    }),
      Animated.parallel([
        Animated.timing(this.state.a2, {
          toValue: 50,
          duration: 500,
          useNativeDriver: false
        }),
        Animated.timing(this.state.at, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        })
      ])
    ]).start(() => {
      this.setState({
        text: 'Welcome!',
        played: false
      });
    });
  }
  startAnimation = () => {
    if(!this.state.played) {
      this.openAnimation();
    } else {
      this.closeAnimation();
    }
  }
  
  render() {
    const animatedStyles = {
         height: this.state.animation,
         width: this.state.a2
    }
    const a2Styles = {
      opacity: this.state.at
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <Animated.Text style={[ styles.intro, a2Styles ]}>{this.state.text}</Animated.Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  intro: {
    color: 'white',
    fontSize: 22,

  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "tomato",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
