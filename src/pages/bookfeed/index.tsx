import { jsx } from '@emotion/core';
import React from 'react';
import { PostProps } from '../../components/Post';
import { Bookfeed } from '../../components/Bookfeed';

const dummyPost: PostProps = {
  title: 'When Breath Becomes Air',
  author: 'by Paul Kalanithi',
  rating: 5,
  coverImage: '',
  status: 1,
  userName: 'Abbie Wilson',
  userProfileImage:
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Leonardo_DiCaprio_January_2014.jpg',
  modifiedDate: 'Just now',
  likeCount: 23,
  liked: true,
  key: '1',
  note:
    'For readers of Atul Gawande, Andrew Solomon, and Anne Lamott, a profoundly moving, exquisitely observed memoir by a young neurosurgeon faced with a terminal cancer diagnosis who attempts to answer the question What makes a life worth today.\n' +
    '\n' +
    'You would have bought cultured pearls for yourself or for a family member or friends, but do you know what exactly a cultured pearl is?  There is also a wrong notion that a cultured pearl is an artificial pearl. \n' +
    '\n' +
    'When something like a parasite or some organic matter gets implanted in an oyster or mollusk, a pearl is formed. These are called natural pearls as they are formed by nature. A cultured pearl is something that has the intervention of humans. A pearl farmer inserts a similar object into the oyster or mollusk and the pearl that is thus formed is called a cultured pearl. The rest of the process remains the same. The only difference being implanting the organic matter into the oyster. The size of the pearl, either natural or cultured depends on the length of time it remains in the oyster. The larger the size, the more valuable is the pearl.  All these cultured pearls are grown on pearl farms. ',
};

export default class Timeline extends React.Component {
  render() {
    return (
      <>
        <Bookfeed {...dummyPost} />
      </>
    );
  }
}
