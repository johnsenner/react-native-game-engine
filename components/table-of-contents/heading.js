import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

export default class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  fadeInLeft = duration => {
    return this.refs.heading.fadeInLeft(duration);
  };

  fadeOutLeft = duration => {
    return this.refs.heading.fadeOutLeft(duration);
  };

  fadeInRight = duration => {
    return this.refs.heading.fadeInRight(duration);
  };

  fadeOutRight = duration => {
    return this.refs.heading.fadeOutRight(duration);
  };

  render() {
    return (
      <Animatable.View
        ref={"heading"}
        animation={this.props.animation}
        style={css.container}
      >
        <Text style={css.text}>
          {this.props.value
            .substring(
              this.props.value.indexOf(".") + 1,
              this.props.value.length
            )
            .trim()
            .toUpperCase()}
        </Text>
      </Animatable.View>
    );
  }
}

const css = StyleSheet.create({
  container: {
    borderBottomWidth: 3,
  },
  text: {
    backgroundColor: "transparent",
    letterSpacing: 5,
    color: "#000",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold"
  }
});