# "함께 공부하자" 프로젝트

## 프로젝트 소개

사람들과 스터디를 진행하던 도중에 스터디가 끝나고 자신이 궁금했던 것들이나 공유하고 싶었던 것들을 문제로 만들어서 사람들과 같이 공부하면 어떨까? 해서 시작하게 된 프로젝트입니다.

https://we-study-6b4fd.web.app 현재는 닫은 상태입니다.

## 프로젝트 실행

```bash
$ cd client
$ npm install
$ npm run dev

$ cd ..
$ cd server
$ npm install
$ npm run start
```

## 사용 기술

TypeScript, JavaScript, React, React-Query, Recoil, Cypress, Styled-Components, Node.js, Express, MongoDB

## 고려사항

### 상태를 어떻게 관리할까?

하나의 라이브러리로 모든 상태를 관리하는 것이 아닌 React-Query를 사용해서 클라이언트 상태와 서버 상태를 분리해서 관리하였습니다. 장황한 코드 없이 데이터를 언제 어떻게 fetch 하는지 선언적으로 코드를 작성하기 때문에 알아보기 쉬운 코드를 작성할 수 있었고, 비동기 처리 부분에서 장점이 많은 React-Query를 사용했습니다.

클라이언트에서 상태관리를 하기 위해 Recoil을 선택했습니다. Recoil을 선택한 이유는 많이 사용하는 Redux 같은 경우는 보일러 플레이트가 많았고, 코드가 복잡해질 우려가 있어서 전역 useState처럼 사용되는 Recoil을 사용했습니다.

페이지 네이션, 혹은 검색 쿼리 등 페이지와 연관된 (새로고침 해도 복구되어야 하는 상태)는 search params로 분리하여 링크를 공유하거나, 페이지를 다시 열어도 복구되도록 했습니다

### 서버에 문제가 생겼을 경우 어떻게 대처할까?

서버에 문제가 생겨서 퀴즈를 가져오는 것을 실패했을 경우 ErrorBoundary를 사용해서 실패한 컴포넌트 대신 ErrorComponent를 띄워주고, 재요청을 보낼 수 있도록 구현했습니다.

### E2E 테스트를 도입하게된 이유?

상태관리 방법을 Recoil 100%에서 서버 상태를 React-Query로만 관리하자는 결정이 있었습니다. 이로 인해서 코드 베이스가 많이 바뀌는 작업이 있었고, 변경된 코드를 가진 기능들을 직접 손으로 클릭해보면서 테스트할 수밖에 없었습니다. 또한 앞으로도 꾸준히 코드가 변경될 텐데 직접 계속 수동으로 테스트를 하는 건 비효율적이고 안정성이 떨어진다고 생각했습니다.

이러한 이유로 해결 방법을 찾아보던 중에 E2E 테스트라는 것을 알게 되어 공부하게 되었고, 프로젝트의 기능들을 순서대로 테스트하는 코드를 작성했습니다. 결과적으로 테스트를 통해서 숨겨진 버그도 발견하고, 내가 작성한 코드에 자신감을 갖고 리팩토링할 수 있었습니다.

## API 명세

|                         |                                                          |
| ----------------------- | -------------------------------------------------------- |
| 유저정보 가져오기       | GET `/users/me`                                          |
| 회원가입                | POST `/users/sign-up `                                   |
| 퀴즈 추가               | POST `/quizs`                                            |
| 퀴즈 삭제               | DELETE `/quizs/:${quizID}`                               |
| 퀴즈 업데이트           | PATCH `/quizs`                                           |
| 퀴즈 가져오기           | GET `/quizs/categories=${categoryId}?page=${pageNumber}` |
| 내가 만든 퀴즈 가져오기 | GET `/quizs/me`                                          |
| 퀴즈 좋아요 하기        | POST `/quizs/favorite`                                   |
| 퀴즈 좋아요 취소        | DELETE `/quizs/:${quizId}/favorite`                      |
| 좋아요한 퀴즈 가져오기  | GET `/quizs/favorite`                                    |
| 퀴즈 검색               | GET `/search?query=${query}`                             |
