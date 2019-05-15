import { PostStatus } from '../components/Post/Summary';
import { ThemeType } from '../service/bookFeed/reducer';
import { posts } from './mock';

export const initialState = () => ({
  posts,
  bookFeed: {
    title: '',
    author: '',
    rating: -1,
    coverImage: '',
    status: PostStatus.CurrentlyReading,
    modifiedDate: 'Just now',
    backgroundTheme: ThemeType.Romantic,
    note: '',
  },
  profile: {
    userName: 'ayonc',
    userProfileImage: 'https://ca.slack-edge.com/T024T5ZGE-U2RQ7MBQR-d0387fc4fb6c-72',
  },
});
