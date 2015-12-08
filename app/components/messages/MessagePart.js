import React, { Component, StyleSheet, Text } from 'react-native';
import MessageText from './MessageText';
import MessageImage from './MessageImage';
import * as MessageConstants from '../../constants/MessageConstants';

export default class MessagePart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, align } = this.props;
    switch(message.type) {
      case MessageConstants.PLAIN_TEXT:
        return <MessageText
          {...this.props} />;
      case MessageConstants.IMAGE_MEDIA:
        return <MessageImage
          {...this.props} />
      default:
        return <MessageText
          {...this.props} />
    }
  }
}