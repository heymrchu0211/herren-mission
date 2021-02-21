# 헤렌 인사담당자님 안녕하세요.

입사지원자 김춘영이라고 합니다.<br>
헤렌 면접전 사전질문 내용에 대한 답변입니다.<br>
아래 링크로 접속하시면 결과물을 확인하실 수 있습니다.<br>
https://heymrchu0211.github.io/herren-mission/


## 클론코딩 준비과정

<img src="https://github.com/heymrchu0211/herren-mission/blob/main/herren_ready.jpg" width="600px">

작업에 들어가기 앞서 전체적인 구조를 파악하고 큰 틀을 설정하기 위해서 그림을 그려보았습니다.<br>
간략하게나마 이렇게 시각적으로 큰 틀을 잡고나니 좀 더 정돈된 생각으로 작업을 시작할 수 있어서 좋았습니다.

## LAYOUT

기존 사이트를 확인해보니 float과 inline-block을 사용하여 레이아웃 조정이 되어 있었는데요.<br> 
클론코딩을 할때는 flex layout moudule를 사용하여 레이아웃을 조정 했습니다. flex를 사용한 이유는 사전질문 내용에 브라우저 호환성에 대한 구체적인 지시사항은 없고 다양한 가정을 가지고 작업에 임해도 무방하다고 하여 공비서 사이트를 이용하는 사용자들의 브라우저 환경이 Internet Explorer 10이상이다 라는 상황으로 가정하여 flex를 사용 하였습니다.

## HTML

html은 BEM방법론을 사용하여 작성하였습니다. BEM이라는 것은 Block Element Modified의 약자입니다. 이름만으로는 이게 무엇을 뜻하는지 뭐에 쓰이는 건지 알기가 어려운데요. 한마디로 말하면 "html을 작성할때 class명을 어떻게 명명할 것인지에 대한 규칙" 입니다. class 네이밍 규칙을 사용하면 일관성 있고 직관적인 html 작성이 가능해 유지관리에도 용이하고 제 작업물을 다른 작업자들과 공유할때도 좀 더 수월하게 소통할 수 있다는 장점이 있습니다. 그것이 BEM방법론을 사용한 이유입니다. 아래 코드는 클론코딩 할때 작성한 index.html 코드의 일부분입니다.
```html
  <header class="header">
    <div class="header__info">
      <div class="header__owner-wrap">
        <a class="header__shop-name" href="">
          <strong>헤렌테스트</strong>
        </a>
        <dl class="header__owner-name">
          <dt>점주</dt>
          <dd>테스트</dd>
        </dl>
      </div>
    </div>
  </header>
```
## CSS

**초기화**<br>
reset파일에 초기화 할 스타일들을 작성 하였습니다. 여기서 초기화라는 것은 브라우저들이 기본값으로서 제공하는 스타일들을 제거하여 초기세팅을 하는 것을 의미합니다. 기본값을 제거하는 이유는 그 기본값들이 불필요하거나 또는 브라우저마다 다른 형태로 표현되기 때문인데요. 예를 들어, li요소는 아래 이미지처럼 앞에 검은색 점박이 모양의 dot이 있습니다. 하지만 일반적으로 이 dot은 보이지 않도록 감춰야 하는 경우가 많습니다. 그래서 list-style이라는 속성의 값을 none으로 처리합니다.

![네이버 검색버튼 이미지](https://github.com/heymrchu0211/herren-mission/blob/main/image-dot.png)

또 한가지 예를 들자면, Internet Explorer에서 img 요소가 a요소의 자식으로 있는 경우에 아래 이미지처럼 img요소에 border가 생기게 됩니다. 크롬이나 파이어폭스 등 타 브라우저에서는 그렇지 않은데 Internet Explorer에서만 이런 현상이 나타납니다. 이 border는 일반적으로 불필요 합니다. 그래서 이 현상을 막기 위해 border속성의 값을 0을 주는 것입니다.

![네이버 검색버튼 이미지](https://github.com/heymrchu0211/herren-mission/blob/main/image-ie-img-border.png)
![네이버 검색버튼 이미지](https://github.com/heymrchu0211/herren-mission/blob/main/img-chrome-not-border.png)
<br>
<br>

**반복되는 스타일 정리**<br> 
반복되는 스타일들을 common, mixin, variable파일에 모아두려고 했습니다.<br> 
하지만 공비서 우리샵 앨범 페이지에는 반복되는 스타일들이 적어서 그 양은 다소 적습니다.
<br>
<br>

**scss를 사용하여 스타일 작성**<br>
스타일을 작성할때 scss를 사용하는 이유는 가독성 확보에 용이하고 variable, mixins 등을 사용하면 반복작업을 최소화할 수 있기 때문입니다.<br>
가독성 확보에 용이하다는 것은 selector를 중첩할 수 있기 때문입니다.
순수 css에서는 selector를 반복적으로 작성해야 한다는 단점이 있습니다.
하지만 scss를 사용하게 되면 아래와 같이 중첩이 가능하여 부모자식 관계로 있는 요소들의 구조를 간결하게 작성할 수 있고 또한 상위 선택자를 참조할 수 있기 때문에 BEM방법론과 함께 사용하는 경우에 더욱 편리하다는 것을 확인하실 수 있습니다. 아래 코드는 클론코딩 할때 작성한 style.scss 코드의 일부분입니다.

```scss
  .header {
  position: relative;
  width: 16rem;
  transform: translateY(-33px);

  &__info {
    background: linear-gradient(to right, #3fdcdb, #4ab0e3);
  }

  &__owner-wrap {
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  &__shop-name {
    display: block;
    padding: 3.3rem 2rem 3.7rem;
    font-size: 2rem;
    font-weight: 700;
    color: #fff;
  }

  &__owner-name {
    display: flex;
    padding: 0 2rem 1rem;
    color: #fff;

    dt {
      margin-right: 1rem;
      font-weight: 700;
    }
  }
```

다음으로는 변수로서 사용할 수 있는 variable이 있습니다. css를 작성하다 보면 반복되는 스타일들이 있는데 특히 color를 관리할때 variable을 사용하게 되면 유지관리에 매우 용이합니다. 아래 코드가 scss에서의 변수선언입니다.

```scss
  $color-primary: #37454a;
  $color-highlight: #3fd2d1;
  $color-border: #d9e6e8;
```

만약 #37454a;이라는 color값을 가진 요소가 페이지 내에 수십 개 혹은 수백 개 이상 존재하고 있는데 color값을 수정해야 할 상황이 생겼다고 가정해보겠습니다. 이때 variable을 사용하지 않는다면 하나하나 일일이 수정을 해줘야 하는 일이 생깁니다. 하지만 variable을 사용한다면 그 해당 변수값만 바꿔주면 되기 때문에 반복작업을 최소화할 수 있습니다.

다음으로는 재사용이 가능한 css 선언 그룹을 만들 수 있는 mixins가 있습니다.
아래 코드는 기본적인 형태의 mixins 코드입니다.

```scss
@mixin solid-line($width, $color) {
  border: $width solid $color;
}

.box1 { 
  @include solid-line(1px, red); 
}
.box2 { 
  @include solid-line(5px, blue); 
}
```

scss에서 제공하는 다른 기능들이 많이 있지만 현재까지는 제가 말씀드린 것들만 사용해봤습니다.<br>
scss는 아래 사이트들에서 학습하고 있습니다.<br>
https://sass-guidelin.es/ko/<br>
https://heropy.blog/2018/01/31/sass/<br>
https://www.youtube.com/watch?v=s9XP4luQ0Yw&list=PL_6yF2upGJYtKji9Wqrb3NoaowD5yTdXg&index=12
<br>
<br>

## JAVASCRIPT
앨범 상세 팝업 슬라이드에서 페이저를 만드는 것이 조금 까다로웠습니다.<br> 
공비서 앨범 페이지에 있는 슬라이드와 매우 유사한 예제가 있어 참고 하여 작업했습니다.<br>
https://im-developer.tistory.com/97
<br>
<br>

## 클론코딩 하면서 발견한 기존 사이트의 문제점
페이지 전반적으로 font-size가 많이 작다고 느꼈습니다.<br>
앨범 리스트 요소들의 정렬이 왼쪽으로 쏠려 있어서 균형이 깨져보였습니다.
<br>
<br>

## 클론코딩 하면서 느낀점
개발단과 어떤식으로 데이터 교류가 이루어지고 어떤식으로 협업이 되는지를 잘 아는것도 중요하다고 생각합니다.<br>
그래야 그런 부분들을 고려한 퍼블리싱을 할 수 있다고 생각하기 때문입니다.
그걸 잘 아는 방법은 일단 자바스크립트에 대한 지식이 우선되어야 한다고 생각합니다.<br>
자바스크립트 기본 개념들은 아래 사이트 등을 통해 학습하고 있으며 다양한 예제들로 공부하고 있습니다.<br>
https://ko.javascript.info/<br>
https://poiemaweb.com/


`소중한 시간 내어 저의 작업물을 열람해주셔서 감사합니다.`








