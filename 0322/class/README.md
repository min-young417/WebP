# 3월 22일 수업 정리

### React
사용자인터페이스를만들기위한JavaScript 라이브러리  
가상DOM(Document object model)과 JSX(JavaScript XML) 방식으로 동작하는 프레임워크  
SPA(Single Page Application) 개발을 위한 프레임워크

### DOM tree & CSSOM tree & Render tree

<img width="500" alt="img01" src="https://github.com/min-young417/WebP/assets/122364547/3db15769-3706-40b0-bf21-5a3d7763818d">

### Virtual DOM
뷰(HTML)에 변화가 있을 때, 구가상돔(Old Node)과 새 가상돔(NewNode)을 비교하여 변경된 내용만 DOM에 적용

<img width="500" alt="img02" src="https://github.com/min-young417/WebP/assets/122364547/62b34b5f-d8b5-4e38-a1e5-7f929dd6edea">

### npm, npx, nvm, yarn
**npm(Node Package Manager)** : nodejs에서 사용하는 모듈들을 관리하고 배포하는 패키지 관리자  
**npx(Node Package Execute)** : npm을 더 편하게 사용하기위한 도구  
**nvm(Node Version Manager)** : nodejs 버전을 여러 개 사용할때 편리  
**Yarn(Yet Another Resource Negotiator)** : Node.js 자바스크립트 런타임 환경을 위해 페이스북이 2016년개발한 소프트웨어 패키지 시스템  

### Babel
최신의 자바스크립트 문법을 오래된 브라우저가 이해할 수 있도록 오래된 문법으로 변환해 줌  
JSX 문법을 변환해 줌

### WebPack
자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구  
**모듈** : 프로그래밍 관점에서, 특정 기능을 갖는 작은 코드 단위  
**번들링** : js, .css, .png ... 각각의 파일들을 모두 모듈로 보고, 이 모듈들을 배포용으로 하나의 파일로 통합시켜주는 작업

### React 시작하기
> npx create-react-app my-app  
> cd my-app  
> npm start  

### React 폴더 구조
**node_modules** : 현재 프로젝트에 포함된 라이브러리들이 설치되어있는 폴더  
**public** : index.html과 같은 정적 파일이 포함되는 곳으로 컴파일이 필요없는 파일들이 위치하는 폴더  
**src** : 리액트 내부에서 작성하는 거의 모든 파일들이 이 폴더 내부에서 작성되며 이 폴더에 있는 파일들은 명령어에 따라 JS로 컴파일이 진행  
**gitignore** : 깃에 포함하고 싶지않은 파일의 이름 혹은 폴더 등을 입력하는 파일  
**package.json** : 프로젝트에 관련된 기본적인 내용(프로젝트의 이름,버전 등)과 라이브러리들의 목록이 포함  
**README.md** : 프로젝트에 대한 설명을 작성하는 곳  

### src 내부 폴더 구조
**assets** : 이미지 혹은 폰트와 같은 파일들이 저장되는 폴더  
**components** : 재사용 가능한 컴포넌트들이 위치하는 폴더  
**config** : 여러개의 config 파일들이 위치하는 폴더  
**constants** : 공통적으로 사용되는 상수들을 정의한 파일들이 위치하는 폴더  
**hooks (= hoc)** : 커스텀훅이 위치하는 폴더  
**pages** : react router등을 이용하여 라우팅을 적용할 때 페이지 컴포넌트를 이 폴더에 위치  
**services (= api)** : 보통 api 관련 로직의 모듈 파일이 위치하며 auth와 같이 인증과 관련된 파일이 포함  
**styles** : css 파일들이 포함되는 폴더  
**utils** : 정규표현식 패턴이나 공통함수 등 공통으로 사용하는 유틸 파일들이 위치하는 폴더  
**contexts** : contextAPI를 사용할 때 관련 파일들이 위치하는 곳으로 상태관리를 위해 contextAPI 대신 redux를 사용 할 경우 폴더 이름을 store로 사용  