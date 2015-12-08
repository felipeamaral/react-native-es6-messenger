import React, { Component, View, Dimensions, DeviceEventEmitter } from 'react-native';
import { conversation, currentUser } from '../../constants/DummyData';
import MessageList from './MessageList';
import MessageComposer from './MessageComposer';
import * as MessageConstants from '../../constants/MessageConstants';

export default class Conversation extends Component {
  constructor(props) {
    super(props);
    // componentWillMount go here
    DeviceEventEmitter.addListener('keyboardWillShow', this.keyboardWillShow);
    DeviceEventEmitter.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  state = {
    visibleHeight: Dimensions.get('window').height,
    messages: conversation
  }

  keyboardWillShow = (e) => {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height;
    this.setState({visibleHeight: newSize});
  }

  keyboardWillHide = (e) => {
    this.setState({visibleHeight: Dimensions.get('window').height});
  }

  handleSend = (text) => {
    let message = [{
      type: MessageConstants.PLAIN_TEXT,
      content: text,
      userId: currentUser.id,
      userLogo: currentUser.logo
    }];

    // use react immutable helpers
    //var newMessages = update(this.state.messages, {$push: message});
    var newMessages = this.state.messages.slice();
    newMessages.push(message);
    this.setState({
      messages: newMessages
    });
  }

  render() {
    return (
      <View style={{height: this.state.visibleHeight}}>
        <MessageList
          messages={this.state.messages}
          currentUser={currentUser} />
        <MessageComposer
          handleSend={this.handleSend}
        />
      </View>
    )
  }
}