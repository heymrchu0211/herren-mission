/******************** 상세 팝업 슬라이드 ********************/

var modal = document.querySelector('.modal'); // 슬라이드 모달 최상위 요소
var albumItem = document.querySelectorAll('.main__album-item'); // 앨범 아이템들 요소
var btnNext = document.querySelector('.modal__btn-next'); // 다음 버튼
var btnPrev = document.querySelector('.modal__btn-prev'); // 이전 버튼
var slideWrap = document.querySelector('.modal__slide-wrap'); // 슬라이드 컨테이너 요소
var slideList = document.querySelector('.modal__slide-list'); // 슬라이드 아이템들의 부모 요소
var slideItem = document.querySelectorAll('.modal__slide-item'); // 슬라이드 아이템들 요소
var slideLength = slideItem.length; // 슬라이드 아이템들의 개수
var currentIndex = 0; // 현재 슬라이드의 순번
var slideSpeed = 600; // 슬라이드 이동 속도
var slidePager_wrap = document.querySelector('.modal__pager-wrap'); // 페이저 부모요소
var slidePager_create = ''; // 생성할 페이저들이 생성되면 그 페이저들을 할당할 변수를 미리 지정해둠
var slidePagerItem; // 페이저
var slideBtnClose = document.querySelector('.modal__btn-close');

// 첫번째 슬라이드와 마지막번째 슬라이드
var slide_firstChild = slideList.firstElementChild;
var slide_lastChild = slideList.lastElementChild;

// 첫번째 슬라이드와 마지막번째 슬라이드 복제 
var slide_clonedFirst = slide_firstChild.cloneNode(true);
var slide_clonedLast = slide_lastChild.cloneNode(true);

// 첫번째 복제 슬라이드는 맨뒤에 추가하고 마지막번째 복제 슬라이드는 첫번째 원본 슬라이드 앞에 추가
slideList.appendChild(slide_clonedFirst);
slideList.insertBefore(slide_clonedLast, slide_firstChild);

// 슬라이드 이미지의 개수에 따라서 pager 생성 (만약 나중에 슬라이드 이미지가 더 추가된다면 추가된 이미지의 개수까지 고려하여 유동적으로 페이저 생성을 하기 위함.)
for (var i = 0; i < slideLength; i++) {
  slidePager_create += '<button class="';
  slidePager_create += (i === currentIndex) ? 'active' : '';
  slidePager_create += '" data-index="' + i + '"></button>';
}

// 생성한 pager들을 pager부모 요소안에 html요소로 넣기
slidePager_wrap.innerHTML = slidePager_create;

// pager부모 요소안에 생긴 pager 요소들을 slidePagerItem라는 변수에 할당
slidePagerItem = slidePager_wrap.querySelectorAll('button');

// 다음버튼 클릭시 다음 슬라이드로 이동하는 함수
function nextSlide() {
  if (currentIndex < slideLength) {
    slideList.style.transform = 'translate(-' + ((currentIndex + 2) * 100) + '%)';
    slideList.style.transition = slideSpeed + 'ms';
  }

  if (currentIndex === slideLength - 1) {
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = 'translateX(-' + 100 + '%)';
    }, slideSpeed);

    currentIndex = -1;
  }

  currentIndex++;
  for (var i = 0; i < slidePagerItem.length; i++) {
    slidePagerItem[i].classList.remove('active');
  }
  slidePagerItem[currentIndex].classList.add('active');
}

// 이전버튼 클릭시 이전 슬라이드로 이동하는 함수
function prevSlide() {
  if (currentIndex >= 0) {
    slideList.style.transform = 'translate(-' + (currentIndex * 100) + '%)';
    slideList.style.transition = slideSpeed + 'ms';
  }

  if (currentIndex === 0) {
    setTimeout(function () {
      slideList.style.transition = "0ms";
      slideList.style.transform = 'translateX(-' + (slideLength * 100) + '%)';
    }, slideSpeed);

    currentIndex = slideLength;
  }

  currentIndex--;
  for (var i = 0; i < slidePagerItem.length; i++) {
    slidePagerItem[i].classList.remove('active');
  }
  slidePagerItem[currentIndex].classList.add('active');
}

// 3초마다 다음 슬라이드로 이동
var autoSlide = setInterval(nextSlide, 3000);

// 다음버튼 클릭시 다음 슬라이드로 이동
btnNext.addEventListener('click', function () {
  nextSlide();
});

// 이전버튼 클릭시 이전 슬라이드로 이동
btnPrev.addEventListener('click', function () {
  prevSlide();
});

// 페이저 클릭시 해당 페이저의 index에 상응하는 이미지 슬라이드로 이동
for (var i = 0; i < slidePagerItem.length; i++) {
  slidePagerItem[i].addEventListener('click', function () {

    currentIndex = Number(this.getAttribute('data-index'));

    slideList.style.transform = 'translate(-' + ((currentIndex + 1) * 100) + '%)';
    slideList.style.transition = slideSpeed + 'ms';

    for (var i = 0; i < slidePagerItem.length; i++) {
      slidePagerItem[i].classList.remove('active');
    }
    slidePagerItem[currentIndex].classList.add('active');
  });
}

// 닫기 버튼 클릭시 모달창 닫힘
slideBtnClose.addEventListener('click', function () {
  modal.classList.remove('active');
});

// 앨범 아이템 클릭시 모달창 열기
for (var i = 0; i < albumItem.length; i++) {
  albumItem[i].addEventListener('click', function () {
    modal.classList.add('active');

    for (var i = 0; i < albumItem.length; i++) {
      albumItem[i].classList.remove('clicked');
    }
    this.classList.add('clicked');
  });
}

// 모달창 바깥영역을 클릭해도 모달창 닫히게 하기
window.addEventListener('click', function (e) {
  if (e.target == modal) {
    modal.classList.remove('active');
  }
});


/******************** 달력 위젯 ********************/

var widget_toggleBtn = document.querySelectorAll('.calendar-widget__btn-toggle'); // 토글 버튼
var toggleTabs_contents = document.querySelectorAll('.calendar-widget__toggle-contents-wrap > div:not(:last-child)'); // 토글버튼을 클릭하면 보이게 될 컨텐츠 영역들

// "오늘" 토글버튼 클릭시
widget_toggleBtn[0].addEventListener('click', function (event) {
  event.preventDefault();

  if (this.parentElement.classList[1] == 'to-right') {

    this.parentElement.classList.remove('to-right');
    this.nextElementSibling.classList.remove('active');
    this.classList.add('active');

    show_tabsContents(event);
  }
});

// "날짜별" 토글버튼 클릭시
widget_toggleBtn[1].addEventListener('click', function (event) {
  event.preventDefault();

  if (this.parentElement.classList[0] !== 'to-right') {

    this.parentElement.classList.add('to-right');
    this.previousElementSibling.classList.remove('active');
    this.classList.add('active');

    show_tabsContents(event);
  }
});

// 토글버튼과 쌍이 맞는 컨텐츠영역을 보이게 하는 함수 
function show_tabsContents(event) {
  var original_target = event.target.getAttribute('href');
  var tab_target = original_target.replace('#', '');

  for (var i = 0; i < toggleTabs_contents.length; i++) {
    toggleTabs_contents[i].style.display = 'none';
  }

  document.getElementById(tab_target).style.display = 'block';
}

document.getElementById('toggle-tabs-1').style.display = 'block';

// 탭메뉴와 쌍이 맞는 컨텐츠영역을 보이게 하는
var widget_tabsTarget = document.querySelectorAll('.calendar-widget__tabs-target'); // taps 버튼
var widget_tabsContents = document.querySelectorAll('.calendar-widget__today > div'); // tabs 버튼을 클릭하면 보이게 될 컨텐츠 영역들

for (var i = 0; i < widget_tabsTarget.length; i++) {
  widget_tabsTarget[i].addEventListener('click', function (event) {
    event.preventDefault();

    var original_target = event.target.getAttribute('href');
    var tab_target = original_target.replace('#', '');

    for (var i = 0; i < widget_tabsContents.length; i++) {
      widget_tabsContents[i].style.display = 'none';
      widget_tabsTarget[i].classList.remove('active');
    }
    this.classList.add('active');

    document.getElementById(tab_target).style.display = 'block';
  });
}

document.getElementById('tabs-1').style.display = 'block';