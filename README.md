꾸준히 작성중인 프로젝트를 하면서 겪은 문제점들..
상태를 어떻게 관리할까? recoil

vite를 사용한 이유 React는 webpack을 사용하고 vite는 [Esbuild](https://esbuild.github.io/)를 사용하기때문에 vite가 빠를수밖에 없다. 모든 파일을 번들링 한후 서버를 시작하던 방식에서 서버를 먼저 시작하고 해당 브라우저에서 필요한 모듈을 전달합니다. 전과정에서 번들러가 아닌 ESM방식을 사용하기 때문에 앱 사이즈가 커져도 갱신시간에 영향을 끼치지 않습니다.[Vite를 사용하면 좋은이유](https://vitejs-kr.github.io/guide/why.html)

코드를 작성하다보니 중복되는 코드가 있는걸 쉽게 볼 수 있었다. 유저 데이터를 전역상태에서 가져오는 코드도 계속 같은 코드들을 컴포넌트들 똑같은 자리에 작성하고있었고, 이 문제를 해결하기 위해 hook란 파일을 만들고 코드를 추상화했다.

코드를 추상화하던 도중 로그인,회원가입 페이지는 태그만해도 150줄이 넘어가는데 중복된 컴포넌트, 재사용할 수 있는 컴포넌트가 없는데 이걸 추상화 해야할까?

???axios를 사용하는 코드도 추상화할수 있지않을까???

퀴즈리스트와, 검색결과리스트 컴포넌트가 중복이되는걸 확인하고 컴포넌트 재사용이 필요하다고 느꼈다. 그래서 layouts와 items라는 폴더를 만들고 퀴즈리스트를 layouts에 넣고 그 리스트에 들어가는 퀴즈를 item에 넣고 앞으로도 재사용할수있도록 추상화했다. 재사용이 가능한 컴포넌트가 있으면 바로바로 추상화하도록 해야겠다.

데이터를 가져오기만하면 끝일까? 라는 생각을 했다. 데이터를 가져오는데 실패하면? 내가 사용자였어도 바로 이상한 에러를 보고 화면을 닫아버릴 것같다. 퀴즈 리스트같은 데이터를 받아올때 실패하면 에러페이지를 띄워주고 다시 데이터를 가져오기를 시도할수있도록 해보았다.

새로고침시 날라가는 로그인 상태, 로그인을 했는데 헤더페이지가 로그인에서 로그아웃으로 변경되지 않는다. 이 문제를 해결하기위해 가장 위에있는 컴포넌트 App.tsx에서 새로고침이 될때마다 로그인이 되어있는지 여부를 판단하고 전역상태로 관리해서 로그인 상태가 필요한 하위 컴포넌트들에게 전달했다.

몽고디비에서 나는 퀴즈 json에 퀴즈를 만든 유저 이름을 넣을 때 직접 user를 넣어주지않고 populate를 사용해 email로 해당 email을 가진 유저를 가져오도록 했는데 몽고디비는 ObjectId로된 데이터만 populate를 지원한다. 결국 user 객체에 user ObjectId를 넣어주고 populate를 사용해서 유저정보를 가져왔다.

![objectid](https://user-images.githubusercontent.com/52567149/154542744-05b22ab1-28a5-4544-b25a-64d709e0914b.png)

firebase를 사용해도 결국 유저정보를 데이터베이스에 저장해야한다. firebase는 결국 email, password만 저장하기 떄문에 맞는 유저정보를 몽고디비에 검색하고 가져와서 전역상태로 관리한다.

검색기능을 추가할것인데 get 쿼리스트링으로 mongoDB 자체의 연산기능으로 하려다가 algoila를 추가하기로 결정 why? 지금은 상관없지만 데이터가 많아질경우 몽고디비가 혼자 하는일이 많아질테고 몽고디비는 메모리사용이 큰편이다. 또한 몽고디비 자체의 연산기능으로는 그 많은 데이터를 검색하고 가져오는게 무리가 있을것으로 생각했고. 그래서 검색을 지원하는 algolia를 사용하기로 했습니다.

회원가입이나 로그인 유효성 검사를 어떻게 할지 고민하다 react-hook-form + yup을 사용하기로 했다. 직접 내가 구현하기엔 시간도 부족하고, 코드가 많이 길어질것이라고 생각했음.

로그인, 회원가입등에 API가 느린 경우의 인터렉션처리를 하기위해 spinner로 사용자에게 로딩중임을 알려주도록 했다.
