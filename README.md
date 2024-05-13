## 멋쟁이사자처럼 12기 클론코딩 과제

이번 시간에는 그동안 배운 styled component와 React hook(useState, useEffect)을 사용하여 직접 클론코딩을 진행해볼 겁니다.
이전 세션에 비해 다소 난이도가 올라갈 수 있으나 실제 구현되어있는 서비스를 직접 따라 만들면서 배우는 것만큼 빠르고 효과적인 공부법은 없으니까요.
모두 화이팅!

## 실습 진행방법

이번 주차는 과제 중심으로 세션이 진행됩니다!
직접 Component를 만들어서 아래의 홈페이지와 같은 페이지를 구현해보세요.

https://getbootstrap.com/docs/4.3/examples/album/

- Icon 이미지 가져오기 : https://heroicons.com

### 어른 사자의 길

1. 우측 상단 햄버거 버튼 클릭 시 진행되는 동적 기능
2. 기타 애니메이션 효과
3. 하단 Footer

## 구현 화면

![20240513_14493447](https://github.com/yerroong/FE-react-styled-component-clonecoding/assets/127104536/73cc79a9-c2d3-4f5f-b076-c2cbf1326086)

## 구현 조건

1. `components`, `assets`, `pages` 3개의 폴더로 구분하여 개발합니다.
   - components 폴더엔 내가 구현한 컴포넌트들을, assets 에는 이미지 파일들을, pages 에는 내가 보여줄 페이지 컴포넌트를 위치시킵니다.
2. 상단에 `Header`는 스크롤하여도 화면에 고정되어 보이도록 합니다.

## 컴포넌트 계층 구조
Contents, Header, Pictures 세개의 컴포넌트로 구성됨.

Contents 구조 (헤더 아래 내용을 나타냄)
- Container: 화면을 가로지르며 세로 중앙 정렬된 공간
- ContentWrapper: 컨텐츠의 내용을 담고 있는 영역
- Title: 앨범의 제목을 표시
- Subtitle: 앨범에 대한 간단한 설명을 표시
- ButtonContainer: 버튼들을 가로로 정렬하는 컨테이너
- Button: 주된 액션을 나타내는 버튼

Pictures 구조
- Wrapper: 최상위 컨테이너로, 포토카드들을 감싸는 역할
- Thumbnail: card의 이미지를 표시하는 역할
- MainWrapper: 각각의 카드를 감싸는 역할
- WordWrapper: time과 버튼을 포함하는 부분을 감싸는 역할
- ButtonWrapper: 버튼을 감싸는 역할
+) Button: 각각의 버튼 요소, Time: 카드 아래에 위치한 시간 정보를 표시, P: 카드에 표시되는 내용을 나타내는 부분
