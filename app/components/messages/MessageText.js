import React, { Component, StyleSheet, Text } from 'react-native';

export default class MessageText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, align } = this.props;
    const textAlign = align ? styles.textRight : styles.textLeft;
    return (
      <Text style={[styles.text, textAlign]}>
        {message.content}
      </Text>
    );
  }
}

var styles = StyleSheet.create({
  text: {
    color: '#000'
  },
  textLeft: {
  },
  textRight: {
    color: '#fff'
  },
});