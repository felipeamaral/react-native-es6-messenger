import React, { Component, StyleSheet, Image } from 'react-native';

export default class MessageImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, align } = this.props;
    const imageAlign = align ? styles.imageRight : styles.imageLeft;
    return (
      <Image
        source={{uri: message.content}}
        resizeMode='contain'
        //resizeMode='stretch'
        style={[styles.imagePosition, imageAlign]}
      />
    );
  }
}

var styles = StyleSheet.create({
  imagePosition: {
    height: 120,
    width: 180,
    margin: 0,
    padding: 0
  },
  image: {
    alignSelf: 'center',
  },
  imageLeft: {
  },
  imageRight: {
  },
});