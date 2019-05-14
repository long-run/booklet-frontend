import { ThemeType } from '../components/Bookfeed/PostTheme';
import { PostStatus } from '../components/Post/Summary';
import { posts } from './mock';

export const initialState = () => ({
  posts,
  bookFeed: {
    title: '',
    author: '',
    rating: 4,
    coverImage: '',
    status: PostStatus.CurrentlyReading,
    modifiedDate: 'Just now',
    backgroundTheme: ThemeType.Colorful,
    note: '',
  },
  profile: {
    userName: 'ayonc',
    userProfileImage: 'https://ca.slack-edge.com/T024T5ZGE-U2RQ7MBQR-d0387fc4fb6c-72',
  },
});
