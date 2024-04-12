# 4월 12일 수업정리

#### 리스트 컴포넌트 
> ex1

<img src="https://github.com/min-young417/WebP/assets/122364547/ea8ce92c-a293-43e5-9b2a-32d4dbe89ad8" width="200"/>

#### 화살표 함수
> ex2

<img src="https://github.com/min-young417/WebP/assets/122364547/684759d9-ed7b-4ceb-8678-3531b07db356" width="400"/>

#### 댓글 컴포넌트
> ex3

<img src="https://github.com/min-young417/WebP/assets/122364547/1e5befe6-35ca-4403-bceb-2aece5b5f1cf" width="400"/>

### 상태(state)
Component의 상태를 의미한다.  
컴포넌트의 내부에서 변경 가능한 데이터를 다루기 위해 사용하는 객체.  
값을 저장하거나 변경할 수 있는 객체로 보통 이벤트와 함께 사용된다.  
State 값이 변경되고 재 렌더링이 필요한 경우에 React가 자동으로 계산하여 변경된 부분을 렌더링한다.  

**일반 변수를 사용하는 경우** : 변수가 변경되어도 자동으로 화면이 바뀌지 않는다.

> ex4

<img src="https://github.com/min-young417/WebP/assets/122364547/e51de20d-6ca8-4a27-b600-a6da5a6de5dd" width="200"/>

**state를 사용하는 경우** : state를 사용하면 변수 값이 변경되었을 때 화면에 의도대로 재 렌더링 된다.

> ex5

<img src="https://github.com/min-young417/WebP/assets/122364547/6648adf8-474b-4724-bfa6-cde2e29a6514" width="200"/>

### setState는 비동기적으로 작동한다.

**동기(synchronous)**
요청을 보내면, 응답을 받아야 다음 동작이 이루어진다.  
순차적으로 실행되기 때문에, 어떵 작업이 수행 중이라면 다음 작업은 대기해야 한다.  
블로킹(작업 중단)이 발생한다.  

**비동기(asymchronous)**
작업 동료 여부에 관계 없이 다음 작업을 실행한다.  
동기 방식과는 달리 실행 순서를 보장하지 않는다.  
블로킹이 발생하지 않는다.  

setCount는 이벤트 핸들러 안에서 현재 state의 값에 대한 변화를 요청하기만 하는 것이라서 이벤트 핸들러가 끝나고 리액트가 상태를 바꾸고 화면을 다시 그리기를 기다려야 한다.

state는 값이 변경되면 리렌터링이 발생하는데, 변경되는 state가 많을수록 리렌더링이 계속 일어나고 속도도 저하되는 등, 성능적으로 문제가 많을 것이다. 그래서 16ms 동안 변경된 상태 값들을 모아서 한 번에 리렌더링을 진행하는데 이를 batch(일관) update라고 한다.

### 상태(state)의 종류
1) 클래스형 컴포넌트가 가지고 있는 state
2) 함수형 컴포넌트가 useState라는 함수로 사용하는 state

React v16.8 이전까지는 함수 컴포넌트에서는 state를 사용할 수 없었다.   
Reactv16.8부터도입된 useState Hook을 사용하면 함수 컴포넌트에서도 state를 사용할 수 있게 되었다.  

<img src="https://github.com/min-young417/WebP/assets/122364547/792da064-fca2-4968-93f0-f7711d735065" width="600"/>

### state 생성 및 사용
1) constructor 함수 쓰는 경우
```javascript
class MyCompo extends Component {
  constructor(props){
    super(props); 
    this.state = {
      state1: 초기값,
      state2: 초기값
    };
  };
}

render(){ ... }; 
```
2) constructor 함수 안쓴다면
```javascript
class MyCompo extends Component {
  state = {
    state1: 초기값,
    state2: 초기값
  };
}

render(){ ... };
```
3) render() 함수 안에서 const { 스테이트1, 스테이트2, ... } = this.state로 비구조 할당 사용 가능
```javascript
render(){
  const { state1, state2 } = this.state;
  return <>{state1}, {state2}</>;
}
const array = [1, 2]
const [one, two] = array
```
4) 값 변경시에는 setState를 쓰며, this.setState({ 스테이트명: 신규값 }) 형태로 사용 가능
```javascript
render(){
  const { state1, state2 } = this.state;
  return({
    <>
      {state1}, {state2}
      <button onClick = { ()=>{ this.setState( {state1: '변신'} ); } }>변경</button>
    </>
  });
}
```
5) state 값을 바꿔준 뒤 특정 작업(함수)을 실행하고 싶을 때, setState의 두 번째 파라미터에 콜백(callback) 함수를 등록하여 작업을 처리할 수 있음
```javascript
...
<button
    onClick={()=> {
        this.setState(
            {
                number : number+1
            },
            ()=>{
                console.log('setState의 호출 이후');
                console.log(this.state);
            });
        ...
```

＋)  React에서 state는 가변적으로 변경 가능한 값이기 때문에, 값을 set 하는 게 가능하다.  하지만 state에 직접적으로 값을 설정하면 안된다. this.state에 직접적으로 값을 설정할 수 있는 건 유일하게, 처음 state를 초기화하는 생성자(constructor)에서 만 가능하다.

### 컴포넌트에서 DOM 이벤트 사용
컴포넌트에서 출력된 특정 DOM 객체에 이벤트 컴포넌트가 동작하기 위해선 DOM 이벤트 프로퍼티를 사용해야 한다.  
우리가 흔히 쓰고있는 HTML 엘리먼트의 이벤트들은 JSX내에서 'on+이벤트명' 형태의 프로퍼티로 제공된다.  

<img src="https://github.com/min-young417/WebP/assets/122364547/77d04ec9-d351-4abf-9801-e7979f8c46b4" width="600"/>

### Event handling
소문자 대신 카멜케이스(camelCase)를 사용한다.  
JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달한다.  

#### 너비와 높이 증가 시키기

> ex6

<img src="https://github.com/min-young417/WebP/assets/122364547/e4d7836f-32f9-455c-9184-95f672bb9dc0" width="300"/>

### 생명주기(Life cycle)

<img src="https://github.com/min-young417/WebP/assets/122364547/54727967-b779-40de-b4e4-e6b823bf83c4" width="600"/>

1) Mounting  
Component가 생성되는 시점.  
생성자에서는 Component의 state를 정의.  
Component가 렌더링 되며 이후 componentDidMount함수가 호출된다.
2) Updaing  
Component의 props가 변경되거나 setState함수 호출에 의해 state가 변경되거나 falseUpdate라는 강제 업데이트 함수 호출로 인해 Component가 다시 렌더링 된다.
3) Unmounting  
Component의 unmount는 상위컴포넌트를 더 이상 화면에 표시하지 않게 될 때 unmount 된다.  

> ex7

<img src="https://github.com/min-young417/WebP/assets/122364547/31cae1e6-af24-4b84-b392-d2bb86e0b1dd" width="600"/>

> ex8

<img src="https://github.com/min-young417/WebP/assets/122364547/ea47d9f1-4390-4f96-bca5-64d855c198b9" width="600"/>

### Input Form

> ex9

<img src="https://github.com/min-young417/WebP/assets/122364547/3019fe90-0b86-49a6-9c97-0888ecc8c3ac" width="600"/>