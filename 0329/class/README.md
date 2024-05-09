# 3월 29일 수업 정리
### JSX (JavaScript XML)
XML 과 유사한 구문을 사용하여 DOM( 문서개체모델) 트리를 생성할 수 있는 JavaScript 확장  
브라우저에서 실행하기 전에 바벨을 사용하여 일반 자바스크립트 형태의 코드로 변환 됨

#### Javascript Library
HTML 엘리먼트를 동적으로 생성하여 DOM에 추가
```html
<body>
  <div id="root"></div>

  <script type="module">
    const headingElement = document.createElement("h1");
    headingElement.textContent = "안녕, 리액트!";
    headingElement.className = "heading";

    const rootElement = document.getElementById("root");
    rootElement.append(headingElement);
  </script>
</body>
```

#### HTML & React Raw API & JSX
<img width="300" alt="img01" src="https://github.com/min-young417/WebP/assets/122364547/1731ff00-5ec2-4839-87be-2fc7ad8f66cf">

#### JSX는 
1. 반드시 부모 요소 하나가 감싸는 형태여야 한다.
2. 자바스크립트 표현식을 사용할 수 있다.
3. JSX도 표현식이다.
4. if문(for문) 대신 삼항 연산자(조건부 연산자) 사용
5. 속성에 따옴표를 이용해 문자열 리터럴을 정의 할 수 있다.  
속성에 중괄호를 이용해 자바스크립트 표현식을 포함 시킬 수 있다.
6. React DOM은 HTML 어트리뷰트 이름 대신 camelCase를 사용한다.
7. JSX의 주석 방법 {/*…*/} or //

#### JSX 예제
> book

<img width="300" alt="img02" src="https://github.com/min-young417/WebP/assets/122364547/ec5a75b5-4892-43eb-9f4d-6e97d1f2437e"> 

### Elements
가상 DOM은 리액트 엘리먼트로 이루어져 있고 브라우저 DOM은
DOM 엘리먼트로 이루어져 있다.  
리액트앱을이루는가장기본적인단위  
엘리먼트(element)는 View에 렌더링 할 내용을 React에 알려주기 위한 수단으로, React 애플리케이션을
구성하는 가장 작은 블록

### React Elements
**React Elements**
```javascript
{
  type: 'button',
  props: {
    className: 'bg-green',
    children: {
      type: 'b',
      props: {
        children: 'Hello, element!'
      }
    }
  }
}
```
**DOM Elements**
```html
<button class='bg-green'>
  <b>
    Hello, element!
  </b>
</button>
```

### Javascript Object
**객체(Object)** : “key: value” pair의 모음  
**속성(properties)** : “key: value” pair  
