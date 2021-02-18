# 헤렌 인사담당자님 안녕하세요.

입사지원자 김춘영이라고 합니다.<br>
헤렌 면접전 사전질문 내용에 대한 답변입니다.<br>
아래 링크로 접속하시면 결과물을 확인하실 수 있습니다.<br>
https://heymrchu0211.github.io/herren-mission/


## 클론코딩 과정

<img src="https://github.com/heymrchu0211/herren-mission/blob/main/herren_ready.jpg" width="600px">

작업에 들어가기 앞서 전체적인 구조를 파악하고 큰 틀을 설정하기 위해서 그림을 그려보았습니다.<br>
간략하게나마 이렇게 시각적으로 큰 틀을 잡고나니 좀 더 정돈된 생각으로 작업을 시작할 수 있어서 좋았습니다.

기존 사이트를 확인해보니 float과 inline-block을 사용하여 레이아웃 조정이 되어 있었는데요.<br> 
클론코딩을 할때는 flex를 사용하여 레이아웃을 조정 했습니다. 때문에 브라우저 호환성은 Internet Explore 10 이상부터 입니다.<br>
float과 inline-block을 사용할수 있었지만 flex를 사용한 이유는  특별한 이유는 없었고 사전질문 내용에 브라우저 호환성에 대한 구체적인 지시사항은 없어서 flex를 사용해 보았습니다.<br>  
flex를 사용할 수 없는 환경이라면 float과 inline-block을 사용할 수 있습니다.

반복되는 스타일들을 common.scss, mixin.scss, variable.scss파일에 모아두려고 했습니다.<br> 
하지만 공비서 우리샵 앨범 페이지에는 반복되는 스타일들이 잘 보이지 않아서  그 양이 다소 적습니다.

스타일을 작성할때 scss를 사용한 이유는 가독성을 확보하고 variable, mixins 등을 사용하면 반복작업을 최소화할 수 있기 때문입니다.<br>
사실 지금까지는 scss를 간단하게만 몇번 써봤는데요. scss에 대해서 좀 더 자세히 공부해보려고 합니다.<br>
https://sass-guidelin.es/ko/<br>
https://heropy.blog/2018/01/31/sass/<br>
https://www.youtube.com/watch?v=s9XP4luQ0Yw&list=PL_6yF2upGJYtKji9Wqrb3NoaowD5yTdXg&index=12


앨범 상세 팝업 슬라이드에서 페이저를 만드는 것이 조금 까다로웠습니다.<br> 
공비서 앨범 페이지에 있는 슬라이드와 매우 유사한 예제가 있어 참고 하여 작업했습니다.<br>
https://im-developer.tistory.com/97


**클론코딩 하면서 발견한 문제점**

페이지 전반적으로 font-size가 많이 작다고 느꼈습니다.<br>
앨범 리스트 요소들의 정렬이 왼쪽으로 쏠려 있어서 균형이 깨져보였습니다.

**클론코딩 하면서 느낀점**

자바스크립트 공부를 많이 해야한다고 생각합니다.

슬라이드,탭메뉴 등을 구현하는 것도 중요하지만
개발단과 어떤식으로 데이터 교류가 이루어지고 어떤식으로 협업이 되는지를 잘 아는것도 중요하다 생각하기 때문입니다.<br> 
그걸 잘 아는 방법은 일단 자바스크립트에 대한 지식이 우선되어야 한다고 생각합니다.<br>
기본 개념들은 여기서 공부하면서 다양한 예제들로 공부를 할  생각입니다.<br>
https://ko.javascript.info/<br>
https://poiemaweb.com/











