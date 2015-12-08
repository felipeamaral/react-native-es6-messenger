import React,
  { Component, StyleSheet, Dimensions, PropTypes,
  Animated, View, ListView } from 'react-native';
import InvertibleScrollView from '../../InvertibleScrollView';
//import InvertibleScrollView from 'react-native-invertible-scroll-view';

import Message from './Message';

// Represent a List of Messages
export default class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    messages: [],
    currentUser: '',
  }

  static propTypes = {
    messages: PropTypes.array.isRequired,
    currentUser: PropTypes.object.isRequired,
  }

  render() {
    const { messages } = this.props;

    let rowIds = messages.map((row, index) => index).reverse();
    let messagesDS = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2});
    messagesDS = messagesDS.cloneWithRows(messages, rowIds);

    return (
      <ListView
        ref="listView"
        dataSource={messagesDS}
        renderRow={this.renderMessageItem}
        style={styles.listView}

        renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}

        keyboardShouldPersistTaps={true}
        keyboardDismissMode='on-drag'

        {...this.props}
      />
    );
  }

  renderMessageItem = (rowData, sectionID, rowID) => {
    console.log(rowData);
    const {currentUser} = this.props;
    return (
      <Message
        messageParts={rowData}
        currentUser={currentUser} />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listView: {
    flex: 1,
  },
});