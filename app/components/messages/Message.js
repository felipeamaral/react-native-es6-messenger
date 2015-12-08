import React, { Component, View, Text, Image, StyleSheet } from 'react-native';
import * as MessageConstants from '../../constants/MessageConstants';
import MessagePart from './MessagePart';

export default class Message extends Component {
  constructor(props) {
    super(props);
    // componentWillMount go here
    const {messageParts, currentUser} = this.props;
    const message = messageParts[0];
    this.align = message.userId === currentUser.id;
  }

  render() {
    const {messageParts} = this.props;
    const message = messageParts[0];
    const bubbleAlign = this.align ? styles.bubbleRight : styles.bubbleLeft;
    //const textAlign = align ? styles.textRight : styles.textLeft;
    return (
      <View style={styles.rowContainer}>
        {this.align ? null : this._renderImage()}
        <View style={[styles.bubble, bubbleAlign]}>
          {messageParts.map( (messagePart, i) =>
            <MessagePart
              key={i}
              message={messagePart}
              align={this.align}
            />
          )}
        </View>
        {this.align ? this._renderImage() : null}
      </View>
    )
  }

  _renderImage() {
    const {messageParts} = this.props;
    const message = messageParts[0];
    const imageAlign = this.align ? styles.imageRight : styles.imageLeft;
    if (message.urlLogo !== null) {
      return (
        <Image
          source={{uri: message.userLogo}}
          style={[styles.imagePosition, styles.image, imageAlign]}
        />
      )
    }
    return (
      <View style={styles.spacer} />
    );
  }
}

var styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bubble: {
    borderRadius: 15,
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 10,
    paddingTop: 8,
    flex: 1
  },
  bubbleLeft: {
    marginRight: 70,
    backgroundColor: '#e6e6eb'
  },
  bubbleRight: {
    marginLeft: 70,
    backgroundColor: '#007aff'
  },
  imagePosition: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
    marginLeft: 8,
    marginRight: 8,
  },
  image: {
    alignSelf: 'center',
    borderRadius: 15,
  },
  imageLeft: {
  },
  imageRight: {
  },
  spacer: {
    width: 10,
  },
});