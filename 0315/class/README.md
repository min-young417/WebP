# 3월 15일 수업 정리

### HTML(Hyper Text Markup Language)
웹 사이트의 모습을 기술하기 위한 마크업 언어  
**Hyper Text** : 참조(하이퍼링크)를통해독자가한문서에서다른문서로즉시접근할수있는텍스트.  
**Markup Language** : 문서가 화면에 표시되는 형식을 나타내거나 데이터의 논리적인 구조를 명시하기 위한 규칙들을 정의한 언어의 일종

### CSS(Cascading Style Sheet)
**CSS** : style sheet 언어, HTML 문서에 있는 요소들에 선택적으로 스타일을 적용

**Sass** : CSS의 단점을 보안하기 위해 만든 CSS 전처리기

### Javascript
스크립트 언어  
웹 페이지가 동작하는 것을 담당  
Ecma International의 프로토타입 기반의 프로그래밍 언어

### DOM(Document Object Model)
**DOM 트리** : HTML 태그의 포함 관계에따라DOM 객체의트리(tree) 생성, DOM 트리는 부모자식관계

**DOM 객체** : HTML 태그 당 하나의 DOM 객체 생성, DOM 노드(Node), DOM 엘리먼트(Element) 라고도 불림

### Rendering

<img width="300" alt="img01" src="https://github.com/min-young417/WebP/assets/122364547/b2e60e68-6cea-48be-9cd7-ecf910793854">

### SPA vs MPA
#### SPA
한개(Single)의 Page로 구성된 Application  
모든 정적 리소스를 최초 한번에 다운로드  
서버로부터완전한새로운페이지를불러오지않고현재의페이지를동적으로다시작성함으로써
사용자와소통하는웹사이트  
보통CSR(Client Side Rendering)방식으로 렌더링

<img width="500" alt="image02" src="https://github.com/min-young417/WebP/assets/122364547/e619612c-fb74-4db2-b5f0-fe2e79ce2c62">

#### MPA
여러개(Multiple)의 Page로 구성된 Application  
새로운 페이지를 요청할 때마다 서버에서 렌더링된 정적 리소스가(HTML, CSS, JS)가 다운로드  
페이지를이동하거나새로고침하면전체페이지를다시렌더링  
SSR(Server Side Application)방식으로 렌더링

<img width="500" alt="image03" src="https://github.com/min-young417/WebP/assets/122364547/cb7aba52-468a-418f-82b1-27ac6fdc3f14">

### Client - Server
**Client** : 특정 서비스를 이용하는 사용자, 웹 브라우저  
**Server** : 특정 서비스를 제공하는 자

<img width="300" alt="img04" src="https://github.com/min-young417/WebP/assets/122364547/c0995f6c-d3e9-49c2-9385-ca52c32343ec">

### Web Browser
HTML 문서와 그림, 멀티미디어 파일 등 월드 와이드 웹을 기반으로 한 인터넷 컨텐츠에 접근하기 위한 응용 프로그램  
웹 브라우저, 인터넷 브라우저 또는 웹 탐색기는 웹 서버에서 이동하며 쌍방향으로 통신하고 HTML 문서나 파일을 출력하는 그래픽 사용자 인터페이스 기반의 응용 소프트웨어