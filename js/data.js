/*
보험 상품은 삼성생명 상품으로 되어 있습니다. 
(소스와 이미지 제공을 해주겠다고 해서 방향을 바꿨습니다.
타사에 연락 해봤지만 답이 없어 그냥 진행하기로 했습니다.
이미지 사진 12월 8일 받기로함)

암든든플러스 종신보험, 든든플러스 종신보험,0 
암생애설계유니버셜 종신보험(변액), 생애설계유니버셜 종신보험(변액),1
스마트 저축보험(단기,세액공제, 과세),2
연금저축보험(비과세),3
변액연금 (최저보증형),4
대장금 (종신 보장성보험, 펌핑, 환급),5
와치4U (100세, 펌핑, 환급),6
일당백 (100세, 저렴),7
비갱신암 (100세, 환급),8
뇌심 (100세, 저렴),9
갱신형 암보험,10
원더풀보장보험,11

데이터 변경 및 수정 필요!!
*/

const qnaList = [
  {
    q: '1. 나의 관심사는? ',
    a: [
      { answer: 'a. 난 아무것도 관심 없음', type: [] },
      { answer: 'b. 건강 보장에만 관심 있음', type: [7, 8, 9, 10, 11] },
      { answer: 'c. 건강 보장과 노후 준비에 관심 있음', type: [0, 1, 2, 5 ] },
    ]
  },
  {
    q: '2. 내가 보험회사를 선택할때 가장 중요하게 보는 것은? ',
    a: [
      { answer: 'a. 보험료만 저렴하면 상관없어', type: [7, 8, 9, 10, 11] },
      { answer: 'b. 보험료도 저렴하지만 내가 보장을 받을 때 줄 수 있는지가 중요해!', type: [7, 8, 9, 10, 11] },
      { answer: 'c. 가격이 비싸더라고 내가 100% 받을 수 있는 곳을 선호해!', type: [0, 1, 5, 6] },
    ]
  },
  {
    q: '3. 실손 다음으로 가장 중요하다고 생각하시는 것을 고르세요. ',
    a: [
      { answer: 'a. 사망보험금, 연금', type: [0, 1, 2, 3 , 4, 5] },
      { answer: 'b. 진단금', type: [5, 6, 7, 8, 9, 10, 11] },
      { answer: 'c. 입원, 수술비', type: [5, 6, 7, 8, 9, 10, 11] },
    ]
  },
  {
    q: '4. 납입은 어느정도 내면 적당하다고 생각하나요?',
    a: [
      { answer: 'a. 계속~', type: [10, 11] },
      { answer: 'b. 10년납', type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      { answer: 'c. 20년납', type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
    ]
  },
  {
    q: '5. 보험을 가입하는데 금액은 어느 정도를 원하신가요?',
    a: [
      { answer: 'a. 처음부터 조금만 내고 싶어 5만원 아래!', type: [10, 11] },
      { answer: 'b. a보단 비싸지만 10만원 아래정도!', type: [7, 8, 9] },
      { answer: 'c. 나는 10만원 이상도 괜찮아', type: [0, 1, 5, 6] }
    ]
  },
  {
    q: '6. 보험을 가입하고 보장은 언제까지 받고 싶으신가요?',
    a: [
      { answer: 'a. 짧게 15년 30년 정도', type: [10, 11] },
      { answer: 'b. 그래도 100세까지는 받아야지', type: [6, 7, 8, 9] },
      { answer: 'c. 요즘 얼마나 오래 사는데 죽기전까지는 받아야지', type: [0, 1, 5] },
    ]
  },
  {
    q: '7. 내가 낸 돈을 돌려받는 기능이 있다면 어떤것을 선택하실 건가요?',
    a: [
      { answer: 'a. 보장을 위해 보험료는 안받아도 괜찮아 보험료 페이백X', type: [7, 9, 10, 11] },
      { answer: 'b. 내가 낸 보험료의 일부라도 돌려받고 싶어 보험료 페이백 O', type: [6, 8]},
      { answer: 'c. 내가 낸 보험료는 다 돌려받고 싶어 환급금 O', type: [0, 1, 5] },
    ]
  },
  {
    q: '8. 진단금, 수술, 입원비를 펌핑해주는 기능이 있다면, 어떤 상품을 선택하실건가요?',
    a: [
      { answer: 'a. 진단금을 펌핑해주면 가격이 비싸지 않아? 그런거 필요없고 싸기만 하면 돼', type: [8, 9, 10, 11] },
      { answer: 'b. 진단금만 올라가면 만족해', type: [5]},
      { answer: 'c. 나이들면 병원에 입원하고 수술하는 비용이 만만치 않은데 다 되는게 좋지', type: [6] },
    ]
  },

  {
    q: '9. 보장을 선택할 때 중요하다고 생각하는 것은 무엇인가요?',
    a: [
      { answer: 'a. 나는 암진단금하고 치료비만 있으면 돼!', type: [0, 1, 8, 10] },
      { answer: 'b. 나는 암, 뇌, 심장이면 충분할 거같아!', type: [7, 11] },
      { answer: 'c. 나는 암, 뇌, 심장, 간, 폐, 신장까지 넓게 가져가고 싶어!', type: [5, 6 ] },
    ]
  },
  {
    q: '10. 세액공제의 여부와 후에 어떻게 하고 싶으신지 선택해주세요! ',
    a: [
      { answer: 'a. 세액공제O 후 과세', type: [2] },
      { answer: 'b. 세액공제O 후 비과세', type: [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11 ] },
      { answer: 'c. 세액공제X 후 비과세', type: [3, 4,] },
    ]
  },
  {
    q: '11. 나는 어떤 투자의 성향을 가지고 있나요?',
    a: [
      { answer: 'a. 위험하지만 수익률이 높은 걸 선호해!', type: [1, 4] },
      { answer: 'b. 위험이 있어도 최저를 보장해주니까 괜찮아!', type: [1, 4] },
      { answer: 'c. 최저를 보장해줘도 나는 내가 낸 돈은 100% 다 받고 싶어!', type: [0, 3, 5] },
    ]
  },
  {
    q: '12. 보험상품의 기능 중 가장 마음에 드는 것을 선택하세요!',
    a: [
      { answer: 'a. 사망보장O + 건강보장(암) + 연금전환O', type: [0, 1] },
      { answer: 'b. 사망보장O + 건강보장(넓게!) + 연금전환O', type: [5] },
      { answer: 'c. 사망보장X + 건강보장 + 연금전환X', type: [6, 7, 8, 9, 10, 11] },
    ]
  }
  
  
]

const infoList = [
  {
    name: '암든든플러스 종신보험(공시이율)',
    desc: '암진단금+사망보험금을 동시에! 세액공제, 비과세 연금전환 기능! 내가 낸 돈 이상으로 돌려받기! '
  },
  {
    name: '암생애설계유니버셜 종신보험(변액, 본인투자)',
    desc: '세액공제, 비과세 연금전환 기능! 본인 투자로 연금과 사망보험금 만들기!!'
  },
  {
    name: '스마트 저축보험(단기,세액공제, 과세)',
    desc: '단기 목돈마련! 강제저축기능!, 세액공제가능, 최저보증이율이 적용되어 원금보존 가능!'
  },
  {
    name: '연금저축보험(비과세)',
    desc: '5년납 10년이상 거취시 비과세 연금 가능!'
  },
  {
    name: '변액연금(본인투자!)',
    desc: '최저보증기능이 있고, 주식과 채권투자를 원하는대로 연금재원 마련!'
  },
  {
    name: '대장금 (종신+보장성보험, 펌핑, 환급)',
    desc: '넓은 건강보장과 사망보장을 동시에 보험료 펌핑과 환급가능, 후에 연금으로 활용가능!'
  },
  {
    name: '와치4U (100세, 펌핑, 환급)',
    desc: '보험료 펌핑, 넓은 건강보장, 건강관리 프로그램, 갤럭시 워치 증정!'
  },
  {
    name: '일당백 (100세, 저렴!)',
    desc: '저렴한 가격으로 건강보험상품! 다양한 특약으로 가족력, 지병에 따라 가입가능! 고혈압을 진단받으신분들도 가입이 가능한 보험상품!'
  },
  {
    name: '비갱신암 (100세, 환급)',
    desc: '비갱신형 암보험!, 보험료 환급특약(주보험료만 아닌! 특약까지 보험료 환급!) 다양한 항암치료 특약까지!, 국내에 이제 도입될 카티 치료까지 가능!'
  },
  {
    name: '올인원 뇌심 (100세, 저렴)',
    desc: '뇌, 심장 질환만 필요하신 분들을 위한 보험! 저렴하게 비갱신보험으로 세팅 가능!'
  },
  {
    name: '갱신형 암보험(갱신형)',
    desc: '초반 저렴한 가격!, 1회나 2회 갱신때 해지 목적, 단기간 보험을 유지하기 위한 적합한 상품 진단금을 많이 세팅하고 싶거나 다양한 항암치료, 로봇수술 등이 필요할때!'
  },
  {
    name: '원더풀보장보험(갱신형)',
    desc: '가격이 저렴하고, 넓은 수술 특약들로 내가 원하는대로 만들 수 있는 갱신형 건강보장 보험'
  }
]