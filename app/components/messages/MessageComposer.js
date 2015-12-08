import React, { Component, View, Text, Image, StyleSheet, TextInput, PropTypes } from 'react-native';
import * as MessageConstants from '../../constants/MessageConstants';
import MessagePart from './MessagePart';
import Button from 'react-native-button';

export default class MessageComposer extends Component {
  constructor(props) {
    super(props);
    // componentWillMount go here
  }

  static defaultProps = {
    placeholder: 'Type a message...',
    autoFocus: true,
    submitOnReturn: false,
    sendButtonText: 'Send',
    handleSend: (text) => {}
  }

  static propTypes = {
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    submitOnReturn: PropTypes.bool,
    sendButtonText: PropTypes.string,
    handleSend: PropTypes.func,
  }

  state = {
    text: '',
    disabled: true,
  }

  onChangeText = (text) => {
    console.log('onChangeText: ', text);
    this.setState({
      text: text,
    });

    if (text.trim().length > 0) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  onSend = () => {
    console.log('onSend: ', this.state.text);

    this.props.handleSend(this.state.text);
  }

  render() {
    const {placeholder, autoFocus, submitOnReturn, sendButtonText} = this.props;
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
          value={this.state.text}
          autoFocus={autoFocus}
          returnKeyType={submitOnReturn ? 'send': 'default'}
          onSubmitEditing={submitOnReturn ? this.onSend : null}

          blurOnSubmit={false}
          />
        <Button
          style={styles.sendButton}
          onPress={this.onSend}
          disabled={this.state.disabled}>
          {sendButtonText}
        </Button>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  textInputContainer: {
    height: 44,
    borderTopWidth: 0.5,
    borderColor: '#b2b2b2',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    //borderWidth: 5,
  },
  textInput: {
    alignSelf: 'center',
    height: 30,
    width: 100,
    backgroundColor: '#fff',
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 15,
  },
  sendButton: {
    marginTop: 11,
    marginLeft: 10,
  },
});