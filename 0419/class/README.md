# 4월 19일 수업 정리

### React Hook
일반적으로 Functional Component를 사용하였으나, 값의 상태를 관리(state) 혹은 Life Cycle Method를 사용하여야 할 때 Class Component를 사용해야 했다.  

**Class Component의 단점**
1) 코드의 구성이 어렵고 Component의 재사용성이 떨어진다.
2) 컴파일 단계에서 코드 최적화를 어렵게 한다.
3) 최신 기술의 적용이 효과적이지 않다. 

Class Component의 단점은 보완하여, Functional Component를 사용 할 수 있도록 등장한 것이 React Hook이다.

React v16.8에 새로 도입된 기능으로, Functional Component가 Class Component의 기능을 사용할 수 있도록 해주며 대표적인 예로는 useState, useEffect 등이 존재한다.

**Hook의 장점**
1) 함수형 컴포넌트에 상태를 추가하여 전반적인 로직을 단순화하고 zhefmf 이해하기 쉽게 만들 수 있다.
2) 컴포넌트 계층 구조를 변경하지 않고도 여러 컴포넌트 간에 상태 로직을 재사용할 수 있다.
3) 함수편 컴포넌트에 생명주기 메서드와 유사한 기능을 제공하여 사이드 이펙트를 더 효율적으로 처리할 수 있다.

**Hook의 규칙**
1) 최상위(at the Top Level)에서만 Hook을 호출해야 한다.
2) 오직 React 함수 내에서 Hook을 호출해야 한다.   

**Built-in React Hooks**  
<img src="https://github.com/min-young417/WebP/assets/122364547/ea8ed053-43a6-44a4-9679-a468732e9c11" width="600"/>

### useState
```jsx
import { useState } from ‘react’;

function MyComponent() {
    const [state, setState] = useState(initialState);
    // ...
```
- array destructuring를 사용하여 [something, setSomething]과 같은 상태 변수의 이름을 지정한다.
- useState는 initialState 값 과 set 함수가 포함된 배열을 반환한다.
- 이 상태 변수의 현재 상태는 처음에 사용자가 제공한 초기 상태(initialState)로 설정된다.
- set 함수는 상태를 다른 값으로 다시 업데이트하고, 리랜더링을 트리거 할 수 있는 함수로, 상호 작용에 대한 응답으로 다른 값으로 변경할 수 있다. 그래서 화면의 내용을 업데이트하려면 다음 상태 값을 가진 set 함수를 호출하면 된다. 
- Pitfall(함정)
  + set 함수를 호출해도 이미 실행 중인 코드의 현재 상태는 변경되지 않는다.   
다음 useState 렌더링부터 반환되는 항복에만 영향을 미친다. 

####  Basic useState examples
> Counter (number)

<img width="400" alt="image02" src="https://github.com/min-young417/WebP/assets/122364547/d2c9f7cf-04d8-4d5d-823d-72267f27eb95">

> Text field (string)

<img width="400" alt="image03" src="https://github.com/min-young417/WebP/assets/122364547/97108dfc-3472-49c6-851e-d2e9ed3742ed">

> Checkbox (boolean)

<img width="400" alt="image04" src="https://github.com/min-young417/WebP/assets/122364547/481c22f4-cd2a-47e2-8831-2fadce4e8556">
<img width="400" alt="image05" src="https://github.com/min-young417/WebP/assets/122364547/4ab648e2-a690-465d-a98e-9c4bd7189a7d">

> Form (two variables)

<img width="400" alt="image06" src="https://github.com/min-young417/WebP/assets/122364547/de0a0734-a73e-46f5-b6ca-f369bccc8147">

<br/>

**Updating state based on the previous state**  
React는 updater function을 queue에 넣는다. 그런 다음, 다음 렌더링하는 동안 그것들을 같은 순서로 호출한다.  
React는 개발 모드에서 updater를 두 번 호출하여 updater가 순수한지 확인한다.

**The difference between passing an updater and passing the next state directly example**  
- passing the next state directly : Updater function을 패스하지 못하므로 "+3" 버튼이 의도한 대로 작동하지 않는다.  
```jsx
import { useState } from 'react';
 
export default function Counter() {
  const [age, setAge] = useState(42);
  
  function increment() {
    setAge(age + 1);
  }
  
  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  )
}
```  
- Passing the updater function : Updater function을 통과하므로 "+3" 버튼이 작동한다.
```jsx
import { useState } from 'react';

export default function Counter() {
  const [age, setAge] = useState(42);
  
  function increment() {
    setAge(a => a + 1);
  }
  
  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <button onClick={() => {
        increment();
      }}>+1</button>
    </>
  );
}
```
<br/>  

**Updating state based on the previous state**
상태(state) 안에 객체롸 배열을 만들 수 있다.  
React에서 상태는 읽기 전용으로 간주되므로 기존 객체를 변경하는 대신 대체해야 한다.

**Avoiding recreating the initial state**  
React는 초기 상태를 한 번 저장하고 다음 렌더링에서 무시한다.  
createInitialTodos()의 결과는 초기 렌더에만 사용되지만, 여전히 모든 함수를 호출할 수 있다.  
큰 배열을 생성하거나 복잡한 계산을 수행하는 경우에는 이 함수가 낭비가 될 수 있다.  
이를 해결하기 위해 useState에 초기화 함수(initializer function)로 전달할 수 있다.

**The difference between passing an initializer and passing the initial state directly example**
- Passing the initializer function
  - initializer 함수를 전달하므로 createInitialTodos 함수는 초기화 중에만 실행된다.  
  입력을 입력할 때와 같이 구성 요소가 다시 렌더링 될 때는 실행되지 않는다.
- Passing the initial state directly
  - 이니셜라이저 함수를 전달하지 않으므로 input에 입력할 때와 같은 모든 렌더에서 createInitialTodos 함수가 실행된다.  
  동작에서는 눈에 띄는 차이는 없지만 이 코드는 효율성이 떨어진다.

**Resetting state with a key**
목록을 렌더링할 때 키(key) 속성을 자주 접하게 된다.  
하지만 이는 또 다른 목적을 제공하기도 한다.  
구성 요소에 다른 키를 전달하여 구성 요소의 상태를 재설정할 수 있다.

**Storing information from previous renders**
일반적으로 이벤트 핸들어에서 상태를 업데이트한다.  
그러나 드물게 렌더링에 응답하여 상태를 조정할 수도 있다.  
예를 들어 prop이 변경될 때 상태 변수를 변경할 수도 있다.  

**Troubleshooting**
- I've updated the state, but loggin gives me the old value
- I've updated the state, but the screen dosen't update
- My initializer or updater fnuction runs twice
- I'm trying to set state to a function, but it gets called instead
> https://react.dev/reference/react/useState  
해당 사이트에서 해결 방법을 알 수 있음. 
