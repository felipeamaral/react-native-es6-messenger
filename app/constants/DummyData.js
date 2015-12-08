import * as MessageConstants from '../constants/MessageConstants';

const userFry = 'Fry';
const userLeela = 'Leela';
const fryLogo = 'http://s19.postimg.org/tjydy2zmr/fry.png';
const leelaLogo = 'http://s19.postimg.org/sbzevondv/leela.png';
const benderLogo = 'http://s19.postimg.org/kxeoh1qw3/bender.png';
const videoTag = 'http://s19.postimg.org/rcdpdpxlv/video.png';
//const gifTag = 'http://i.imgur.com/ggH06.gif';
const gifTag = 'http://postimg.org/image/kn75xpc9r/';

export const currentUser = {
  id: userFry,
  logo: fryLogo,
};

export const conversation = [
  [
    {
      type: MessageConstants.PLAIN_TEXT,
      content: 'Hi Fry! This is Bender',
      userId: userLeela,
      userLogo: leelaLogo,
    },
    {
      type: MessageConstants.IMAGE_MEDIA,
      content: benderLogo,
      userId: userLeela,
      userLogo: leelaLogo,
    }
  ],
  [
    {
      type: MessageConstants.PLAIN_TEXT,
      content: 'Bender is like React Native, it is the future',
      userId: userFry,
      userLogo: fryLogo,
    }
  ],
  [
    {
      type: MessageConstants.PLAIN_TEXT,
      content: 'How about ES6?',
      userId: userLeela,
      userLogo: leelaLogo,
    }
  ],
  [
    {
      type: MessageConstants.PLAIN_TEXT,
      content: 'ES6 Rocks',
      userId: userFry,
      userLogo: fryLogo,
    }
  ],
  [
    {
      type: MessageConstants.PLAIN_TEXT,
      content: "What's next for this repo?",
      userId: userLeela,
      userLogo: leelaLogo,
    }
  ],
  [
    {
      type: MessageConstants.PLAIN_TEXT,
      content: 'Video support',
      userId: userFry,
      userLogo: fryLogo,
    },
    {
      type: MessageConstants.IMAGE_MEDIA,
      content: videoTag,
      userId: userFry,
      userLogo: fryLogo,
    },
    {
      type: MessageConstants.PLAIN_TEXT,
      content: 'NavigationBar, ParsedText',
      userId: userFry,
      userLogo: fryLogo,
    },
  ],
];