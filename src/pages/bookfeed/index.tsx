import { jsx } from '@emotion/core';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import React from 'react';
import { PostStatus } from '../../components/Post/Summary';
import { Bookfeed } from '../../components/Bookfeed';
import { PostProps } from '../../components/Post';

const dummyPost: PostProps = {
  title: '숨결이 바람 될 때',
  author: '폴 칼라니티',
  rating: 4,
  coverImage:
    'http://www.nwmedia.co.kr/wp-content/uploads/2016/09/%EC%88%A8%EA%B2%B0%EC%9D%B4-%EB%B0%94%EB%9E%8C-%EB%90%A0-%EB%95%8C-cover.jpg',
  backgroundImage: '',
  status: PostStatus.CurrentlyReading,
  userName: 'Ryan',
  userProfileImage:
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Leonardo_DiCaprio_January_2014.jpg',
  modifiedDate: '2 weeks ago',
  likeCount: 516,
  liked: true,
  key: '1',
  note:
    '제목에 끌려 집어들었고, 앉은 자리에서 다 읽었다. 그러나 솔직히 기분좋은 글은 아니다. 진료기록의 나열과 짧은 코멘트들을 보고 있자니 작가의 개인적인 일기장을 훔쳐보는 듯한 꺼림칙함과, 진료 녹취록을 타이핑해서 책으로 낼 생각을 했다는 것에 대한 놀라움이 공존했다. 원래 정신과 진료는 비밀보장이 대원칙이다. 본인의 이야기를 녹음하고 받아적은 것이니 법적 문제는 없겠지만, 내가 상담의였다면 이 책에 대한 이야기를 처음 들었을 때 굉장히 미묘한 기분이 들었을 것 같다. 상담 녹취에 대한 것이야 지속적으로 고지하고 있었으니 괜찮았을 진 몰라도 이를 받아적어 출간하는 것은 매우 다른 차원의 이야기이다. 부디 저자분이 출간 준비를 모두 마친 후에서야 동의를 구한 것이 아니었기를. 계속 떠오르는 질문도 있었다: 과연 저자는 의사 선생님께 인세를 드리고 있을까.스스로를 객관화하는 과정과 "찌질한" 생각들을 문서화하고 공표하는 생각을 할 용기는 분명 저자 개인에게는 큰 도움이 될 것이다. 수입도 부수적으로 따라오니 더할 나위 없다. 주위 사람들에게 본인을 이해시키는 데도 좋을 테다. 그러나 대다수의 사람들에게 공감을 이끌어낼 수 있는 글은 아닌 것 같다. 개인적으로 일부 공감되는 내용이 있기는 하지만, 저자의 부정적 감정에 매몰되는 시간이 훨씬 길었다. 책을 읽는 덴 30분 정도 걸렸는데, 활기찬 감정을 되찾는 덴 한 시간이 걸리다니. 손해보는 장사를 한 기분이다. 작가에 대한 응원의 마음이 없었다면 솔직히 저 별점을 주지도 않았을 것이다.본인이 심하게 우울하다면, 부디 바라건대 이 책을 읽지 마시기를. 그 시간에 전문 상담사를 찾거나, 하다못해 좋아하는 게임을 하건 유투브를 보건 방송을 보건 무언가 다른 걸 하셨으면 좋겠다.',
};

export default class Timeline extends React.Component {
  state = { response: null };

  componentDidMount() {
    const client = new ApolloClient({
      uri: 'http://54.180.158.228:4000',
    });
    client
      .query({
        query: gql`
          {
            posts {
              id
              user {
                id
                name
              }
              bookfeed {
                id
                book {
                  title
                  isbn
                  id
                  author
                  book_cover
                }
                rating
                status
                background_theme
                note
                reg_date
                modified_date
              }
              liked
              like_count
            }
          }
        `,
      })
      .then(console.log)
      .catch(console.error);
  }
  render() {
    return (
      <>
        <div>{this.state.response}</div>
        <Bookfeed {...dummyPost} />
      </>
    );
  }
}
