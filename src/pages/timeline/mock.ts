import { PostProps } from '../../components/Post';
import { PostStatus } from '../../components/Post/Summary';

/*
const dummyPost1: PostProps = {
  title: 'When Breath Becomes Air',
  author: 'by Paul Kalanithi',
  rating: 3,
  coverImage: 'https://textbookcentre.com/media/products/when_breath.jpg',
  backgroundImage: 'https://source.unsplash.com/collection/4491773',
  status: PostStatus.CurrentlyReading,
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
*/

const PostProps0: PostProps = {
  title: '숨결이 바람 될 때',
  author: '폴 칼라니티',
  rating: 4,
  coverImage:
    'http://www.nwmedia.co.kr/wp-content/uploads/2016/09/%EC%88%A8%EA%B2%B0%EC%9D%B4-%EB%B0%94%EB%9E%8C-%EB%90%A0-%EB%95%8C-cover.jpg',
  backgroundImage:
    'https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1102&q=80',
  status: PostStatus.Read,
  userName: 'stacyyya',
  userProfileImage: 'https://ca.slack-edge.com/TFAMP566L-UFBAWS82F-19c634732a66-72',
  modifiedDate: '2 weeks ago',
  likeCount: 516,
  liked: false,
  key: '1',
  note:
    '제목에 끌려 집어들었고, 앉은 자리에서 다 읽었다. 그러나 솔직히 기분좋은 글은 아니다. <br/><br/>\
     진료기록의 나열과 짧은 코멘트들을 보고 있자니 작가의 개인적인 일기장을 훔쳐보는 듯한 꺼림칙함과, 진료 녹취록을 타이핑해서 책으로 낼 생각을 했다는 것에 대한 놀라움이 공존했다.<br/><br/>\
    원래 정신과 진료는 비밀보장이 대원칙이다. 본인의 이야기를 녹음하고 받아적은 것이니 법적 문제는 없겠지만, 내가 상담의였다면 이 책에 대한 이야기를 처음 들었을 때 굉장히 미묘한 기분이 들었을 것 같다. <br/><br/>\
    상담 녹취에 대한 것이야 지속적으로 고지하고 있었으니 괜찮았을 진 몰라도 이를 받아적어 출간하는 것은 매우 다른 차원의 이야기이다. 부디 저자분이 출간 준비를 모두 마친 후에서야 동의를 구한 것이 아니었기를. <br/> <br/>\
    계속 떠오르는 질문도 있었다: 과연 저자는 의사 선생님께 인세를 드리고 있을까.스스로를 객관화하는 과정과 "찌질한" 생각들을 문서화하고 공표하는 생각을 할 용기는 분명 저자 개인에게는 큰 도움이 될 것이다. 수입도 부수적으로 따라오니 더할 나위 없다. <br/><br/>\
    주위 사람들에게 본인을 이해시키는 데도 좋을 테다. 그러나 대다수의 사람들에게 공감을 이끌어낼 수 있는 글은 아닌 것 같다. 개인적으로 일부 공감되는 내용이 있기는 하지만, 저자의 부정적 감정에 매몰되는 시간이 훨씬 길었다. <br/><br/>\
    책을 읽는 덴 30분 정도 걸렸는데, 활기찬 감정을 되찾는 덴 한 시간이 걸리다니. 손해보는 장사를 한 기분이다. 작가에 대한 응원의 마음이 없었다면 솔직히 저 별점을 주지도 않았을 것이다.본인이 심하게 우울하다면, 부디 바라건대 이 책을 읽지 마시기를. <br/><br/>\
    그 시간에 전문 상담사를 찾거나, 하다못해 좋아하는 게임을 하건 유투브를 보건 방송을 보건 무언가 다른 걸 하셨으면 좋겠다.',
};

const PostProps1 = {
  title: '죽고 싶지만 떡볶이는 먹고 싶어',
  author: '백세희',
  rating: 3,
  coverImage: 'https://misc.ridibooks.com/cover/754023693/xxlarge',
  backgroundImage:
    'https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  status: PostStatus.Read,
  userName: 'Ryan',
  userProfileImage: 'https://ca.slack-edge.com/T024T5ZGE-U1SF21DL3-f1ad3c44c3e0-72',
  modifiedDate: '2 weeks ago',
  likeCount: 516,
  liked: false,
  key: '2',
  note:
    '제목에 끌려 집어들었고, 앉은 자리에서 다 읽었다. 그러나 솔직히 기분좋은 글은 아니다. <br/><br/>\
진료기록의 나열과 짧은 코멘트들을 보고 있자니 작가의 개인적인 일기장을 훔쳐보는 듯한 꺼림칙함과, 진료 녹취록을 타이핑해서 책으로 낼 생각을 했다는 것에 대한 놀라움이 공존했다. 원래 정신과 진료는 비밀보장이 대원칙이다. 본인의 이야기를 녹음하고 받아적은 것이니 법적 문제는 없겠지만, 내가 상담의였다면 이 책에 대한 이야기를 처음 들었을 때 굉장히 미묘한 기분이 들었을 것 같다. 상담 녹취에 대한 것이야 지속적으로 고지하고 있었으니 괜찮았을 진 몰라도 이를 받아적어 출간하는 것은 매우 다른 차원의 이야기이다. 부디 저자분이 출간 준비를 모두 마친 후에서야 동의를 구한 것이 아니었기를. 계속 떠오르는 질문도 있었다: 과연 저자는 의사 선생님께 인세를 드리고 있을까.<br/><br/>\
스스로를 객관화하는 과정과 "찌질한" 생각들을 문서화하고 공표하는 생각을 할 용기는 분명 저자 개인에게는 큰 도움이 될 것이다. 수입도 부수적으로 따라오니 더할 나위 없다. 주위 사람들에게 본인을 이해시키는 데도 좋을 테다. 그러나 대다수의 사람들에게 공감을 이끌어낼 수 있는 글은 아닌 것 같다. 개인적으로 일부 공감되는 내용이 있기는 하지만, 저자의 부정적 감정에 매몰되는 시간이 훨씬 길었다. 책을 읽는 덴 30분 정도 걸렸는데, 활기찬 감정을 되찾는 덴 한 시간이 걸리다니. 손해보는 장사를 한 기분이다. 작가에 대한 응원의 마음이 없었다면 솔직히 저 별점을 주지도 않았을 것이다.<br/><br/>\
본인이 심하게 우울하다면, 부디 바라건대 이 책을 읽지 마시기를. 그 시간에 전문 상담사를 찾거나, 하다못해 좋아하는 게임을 하건 유투브를 보건 방송을 보건 무언가 다른 걸 하셨으면 좋겠다.',
};

const PostProps2 = {
  title: '슬램덩크',
  author: '이노우에 다케히코',
  rating: 5,
  coverImage: 'http://www.comicplaza.co.kr/shop/data/goods/1540781983502l0.jpg',
  backgroundImage:
    'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  status: PostStatus.Read,
  userName: 'Shrimp1box',
  userProfileImage: 'https://ca.slack-edge.com/T024T5ZGE-U039TQL2Y-8b9c1dec9867-1024',
  modifiedDate: '2 weeks ago',
  likeCount: 1024,
  liked: true,
  key: '3',
  note:
    '나의 중학교 시절 나의 감성을 흔들었던 여섯명의 형들이다.<br/><br/>\
친구집에 있던 책을 우연히 보고 난 후 그 때부터 나온 단행권 21권부터는 모두 직접 사서 보았다.<br/><br/>\
일부러 연재가 되던 것은 보지 않고,<br/><br/>\
단행본이 나올 때를 기다리는 설레임과 함께 누렸던 기쁨....<br/><br/>\
\
이 책의 주인공은 강백호이다.<br/><br/>\
농구에 대해서는 정말이지 아무 것도 모르는 강백호.<br/><br/>\
그러나 좋아하는 소녀를 위해 무작정 시작하게 된 농구.<br/><br/>\
하지만 그 곳에서 찾게 된 자신의 진짜 소질과 비전.',
};

const PostProps3 = {
  title: '자존감 수업',
  author: '윤홍균',
  rating: 4,
  coverImage: 'https://misc.ridibooks.com/cover/2025000011/xxlarge',
  backgroundImage:
    'https://images.unsplash.com/photo-1494208133010-7227229a632a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  status: PostStatus.WantToRead,
  userName: 'Ryan',
  userProfileImage: 'https://ca.slack-edge.com/T024T5ZGE-U1SF21DL3-f1ad3c44c3e0-72',
  modifiedDate: '3 weeks ago',
  likeCount: 78,
  liked: false,
  key: '4',
  note:
    '다들 사는게 힘든가보다. 요즘 베스트셀러 순위를 보면 사람의 마음을 다루고, 위로하는 책들이 쏟아져나온다는 걸 실감할 수 있다. 우스갯소리로 이제는 교회보다 많은게 심리 상담소라고... 예전에는 정신과에 간다고 하면 뭔가 이상한 사람으로 쳐다봤지만, 지금은 그런 인식도 많이 사라지고, 오히려 정신이 건강한 사람들도 예방차원, 교육차원에서라도 적극적으로 그런 상담센터를 찾는다. 회사 차원에서도 직원들의 심신의 안정을 위해 회사 전담 상담소를 설치하는 사례도 많이 있고, 직원들도 쉬는 시간이나 점심 시간 등을 이용해서 상담을 받으며 살아갈 힘을 다시 얻는 경우도 봐왔다.<br/><br/>\
과학 문명이 발달하고, 생활이 편리해질 수록 아이러니하게도 우리의 마음은 허해지는 것 같다. 과학 기술의 발달 속도가 너무나 빨라서 인간의 마음이, 정신이 그 속도를 따라잡지 못해 발생하는 수많은 문제들. 느리고 아날로그적인 독일에 와서 나는 훨씬 더 직접적으로 체감하고 느낀다. IT 강국, 빨리빨리 코리아의 중심 서울에 살다가 아날로그적인 독일의 작은 시골 마을로의 이동은 거주지를 옮긴 것 이상의 변화를 우리 가족에게 주고 있음을 느낀다. 너무나 빨리 달리는 것, 옆도 주위도 둘러보지 않고 앞으로만 달리는 빠른 문명에 대한 반감이 독일 사회에는 있다. 그들은 그 속도를 따라잡지 못해서가 아니라, 일부러 그 속도를 늦추고 있다는 생각이 든다. 그들이 가장 소중하게 생각하는 삶의 질을 보장받기 위해서다. 그렇게 선택할 수 있는 힘이 바로 이 나라의 자존감이 높기 때문이 아닌가하는 생각이 들었다.<br/><br/>\
\
가끔 내가 그토록 빠르고 경쟁적인 한국 사회에 아직도 발을 담그고 있었다면, 분명 나는 거기서 빠져나오지 못했을 터인데하며 가슴을 쓸어내릴 때가 있다. 그 소용돌이의 한 가운데에서 아마 나는 알면서도 결코 한 발 앞으로 나오기가 정말 힘들었을 것이다. 그 안에서, 거기서 살아남을 방법을 모색하기는 했겠지만. 앞으로 내가 다시 한국에 돌아가게 되더라도, 또는 여기 남더라도, 지금 이 시가는 내 인생관을 다시 점검하게 해주는 매우 중요한 시간이 될 것이다.',
};

const PostProps4 = {
  title: '언어의 온도',
  author: '이기주',
  rating: 4,
  coverImage: 'https://misc.ridibooks.com/cover/1930000003/xxlarge',
  backgroundImage:
    'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  status: PostStatus.CurrentlyReading,
  userName: 'Ryan',
  userProfileImage: 'https://ca.slack-edge.com/T024T5ZGE-U1SF21DL3-f1ad3c44c3e0-72',
  modifiedDate: '1 week ago',
  likeCount: 832,
  liked: false,
  key: '5',
  note:
    '책을 놓아버리고 싶은 순간이 종종 있었는데, _“아름다운 것을 아름답다고 느낄 때 우린 행복하다….” 이 한 문장 때문에 끝까지 버틸 수 있었던 것 같다.<br/><br/>\
아름다운 것을 봐도 그냥 "아 아름답구나" 하는 순간이 있는가 하면, 핏줄 하나하나까지 곤두서서 경이로움을 느끼게 되는 순간이 있다. 아마도 이 순간을 말한게 아닌가 싶다. 아름다움에 대한 기준은 저마다 다르지만, 정말 자신이 아름답다고 느끼는 것을 발견했을때의 행복감은 다들 똑같지 않을까.<br/><br/>\
역시 책의 내용도 이런 순간들에 대한 것이다. 제목은 사실 왜 이렇게 붙었는지는 모르겠다. "언어의 온도"라는 말은 책 머릿말에 잠깐 나오고 그 뒤로는 전혀 등장하지 않는다. 언어에 온도가 있다고 한다면 이 작가는 확실히 따뜻한쪽이구나 라는 생각은 했다. 그런 의미에서 작가가 남성이라는 점이 인상깊었다. (물론 나도 여자 치고는 글을 차갑고 무미건조하게 쓰는 편이긴 하다.)<br/><br/>\
작가의 장점을 들자면, 감수성이 매우 깊고, 언어에 대한 감각이 예민하거나 혹은 예민하게 다듬는 걸 좋아하는 사람이라는 생각이 들었다. 특히 "사과"에 대해 말한 부분이 인상깊었다. "진짜 사과는, 아픈 것이다."<br/><br/>\
사실 아쉽게도 인상적이었던 몇몇 글을 제외하면 일기장에 어울리는 글들이 아닌가 하는 생각이 들었다. "능숙과 느끼는 한 끗 차이"라는 박진영의 말처럼(물론 무대매너에 대해 한 말이긴 하지만) 이 작가가 능숙과 느끼의 경계를 아슬아슬하게 넘나드는 것이 느껴졌다.<br/><br/>\
본의 아니게 "김훈의 <자전거 여행>"과 비교하면서 읽게되어서 그런지 몰라도, 이 글은 어쩌면 한밤의 힘을 받은게 아닐까 싶을 정도로 감성적이다. 일부 글은 그 감성이 너무 지나쳐서, 독자가 공감할 새도 없이 튕겨나갈 정도인 것 같다. 또 일부 글들은 너무 가벼워서 다른 글들과 비등한 무게감이 없다. 이런 글들이 종종 보이면, 내가 활자를 정성들여 읽고 있는 시간이 아까워진다. 어디서든 볼 수 있는 글을 보려고 책을 사는건 아니지 않은가.<br/><br/>\
그리고 글들에 눈에 띄는 패턴이 있다. "어떤 경험" - "거기서 연상되는 질문" - "일반화 또는 \'~일지도 모른다\'로 끝나는 소회". 에세이나 짧은 글들이 기본적으로 가지는 패턴들이긴 한데, 이게 너무 눈에 띄어서 불편했다. 솔직히 "어떤 경험" 부분은 대부분 글에 있으나 마나한 문장일 때가 많았다. 결국 뒷부분에 하고 싶은 얘기를 하기 위해서 억지로 끼워 넣은 느낌이 드는 글이 많았고, 거기서 추출해 낸 (작가가 강조하던)"본질"도 약하기 그지없었다.<br/><br/>\
그리고 자신의 경험과 주변의 사물들을 모두 인간의 삶에 대입해 보려고 하려는 노력이 좀 버겁게 느껴졌다. 굳이 인간의 삶에 억지로 대입하지 않아도 그 자체로도 충분히 말할 거리가 많지 않을까?<br/><br/>\
어쨌든 이 작가는 한권의 책을 오롯이 감당해 내기엔 조금 부족한 역량을 가지고 있다고 생각한다.',
};

const PostProps5 = {
  title: '오베라는 남자',
  author: '프레드릭 배크만',
  rating: 5,
  coverImage: 'https://misc.ridibooks.com/cover/372001321/xxlarge',
  backgroundImage:
    'https://images.unsplash.com/photo-1534143340226-6cbc7628dbe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  status: PostStatus.CurrentlyReading,
  userName: 'Ryan',
  userProfileImage: 'https://ca.slack-edge.com/T024T5ZGE-U1SF21DL3-f1ad3c44c3e0-72',
  modifiedDate: '1 week ago',
  likeCount: 132,
  liked: false,
  key: '6',
  note:
    "보다가 몇 번이나 울 뻔했는지 모릅니다. 표지의 부루퉁한 할아버지와 괴팍한 그의 성격을 표현한 책소개 글을 보았을 때는 이렇게 아름다운 사랑을 하는 사람일 것이라고는 생각도 못했습니다. 과연 인구 900만의 스웨덴에서 70만부 이상 판매된 베스트셀러답습니다.<br/><br/>\
무엇이든 발길질을 하며 상태를 확인하는 남자. BMW 운전자와는 말도 섞지 않는 남자. 키보드 없는 아이패드에 분노하는 남자. 가장 싫어하는 광고 문구는 \"건전지는 포함되지 않습니다\". 웬만하면 마주치고 싶지 않은 까칠한 이웃 남자, 오베. <br/><br/>\
오베는 어느 화요일 오전, 한 번도 경험해본 적 없는 일을 하게 되었다. 부엌 싱크대 앞에 서서 멍하니 천장을 바라보는 일. 그리고 그는 결심한다. 세상에서 가장 튼튼한 고리를 천장에 박겠노라고. 그 고리에 밧줄을 걸고 자살할 것이다. 늘 그렇듯 오베는 이 일을 해낼 것이라는 사실을 의심하지 않았다. 하지만 오베가 막 고리를 박으려는 순간, 엄청나게 귀찮고 성가신 소리가 들려온다.<br/><br/>\
이웃집에 이사 온 '이상한' 가족들 때문에 자살도 마음대로 못하는 오베. 과연 그는 희한한 이웃들과 성가신 고양이의 기상천외한 방해공작, 관료제의 로봇 하얀 셔츠들의 도발을 물리치고 무사히 아내 곁으로 갈 수 있을까? 아니면 자신의 일상에 생기기 시작한 균열을 받아들이고, 하얀 셔츠들로부터 루네를 지켜낼 수 있을까?<br/><br/>\
주인공 오베는 정말 까칠합니다. 성격도 모났고, 대인관계 능력이 형편없습니다. 자신의 원칙만을 지키다보니 사람과의 사귐이 쉽지 않습니다. 그리고 그런 것에 개의치않고 자신을 지키며 살아가는 사람입니다. 그래서 실제로 이런 사람이 있다면 친해지기 어려운 정도가 아니라 싫어하게 될 것이라 생각합니다.<br/><br/>\
하지만 어째서인지 이 작품을 읽고나면 오베라는 할아버지, 남자가 한없이 사랑스럽게만 느껴지게 됩니다. 처음에는 퉁명스럽고 새침한 모습을 보이지만 애정을 갖기 시작하면 부끄러워하는 성격이 드러난다는 일본의 '츤데레'라는 표현이 있습니다. 이 할아버지는 애정을 가져도 여전히 퉁명스럽고 거칠기에 츤데레라고 부를 수 없겠지만 까칠함으로 포장한 그의 서툰 애정 표현은 어딘가 간지럽기도 하면서 귀엽다고 생각하게 됩니다. 무엇보다 서툴고 오해를 사기 쉬운 그가 이해자를 만나고 사랑받는 모습을 보니 눈물이 다 나더군요. 죽는 그 날까지 퉁명스러움을 잃지 않았던 그였지만 사랑하는 사람에게 끝없는 애정을 쏟던 그의 모습이 너무 아름다워보였습니다.<br/><br/>\
가장 인상깊게 읽은 부분은 역시 오베와 그가 사랑한 아내의 이야기였습니다. <br/><br/>",
};

export const posts = [PostProps0, PostProps1, PostProps2, PostProps3, PostProps4, PostProps5];
