# React Native ES6 Messenger

A Messenger implemented using ES6 and React Native, based on [FaridSafi/react-native-gifted-messenger](https://github.com/FaridSafi/react-native-gifted-messenger)

# Messenger Component Design

```xml
<App>
  <Conversation>
    <MessageList>
      <Message>
        <MessagePart />
        ...
        <MessagePart />
      <Message>
      ...
      <Message />
    </MessageList>
    <MessageComposer />
  </Conversation>
</App>
```

The **Conversation** has a **MessageList** and a **MessageComposer**, it is also responsible to handle keyboard events

The **MessageComposer** describes how the conversation will accept a new message

The **MessageList** is a ListView using [InvertibleScrollView](https://github.com/exponentjs/react-native-invertible-scroll-view) that render in each row one **Message**

One **Message** can have many **MessagePart**

Each **MessagePart** has a type that render in a different way

In this version with have three types:
- PLAIN_TEXT
- IMAGE_MEDIA
- VIDEO_MEDIA

But, the ideia is to provide more types of MessageParts. For instance, Gif or Localization.

# License

MIT

# Contribution

Please open issues or pull requests, I will be glad to accept them 