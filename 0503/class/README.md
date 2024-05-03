# 5월 3일 수업 정리

### userReducer
useState를 대체할 수 있는 함수  
좀 더 복잡한 상태 관리가 필요한 경우 reducer를 사용  

```jsx
import React, { useReducer } from “react”;
const [state, dispath] = useReducer(reducer, initialState, init);
```

1) state : 컴포넌트에서 사용할 상태  
2) dispatch 함수 : 컴포넌트 내에서 state의 업데이트를 일으키기 위해 사용하는 함수  
3) reducer 함수 : 현재 state, action 객체를 인자로 받아, 기존의 state를 대체하여 새로운 state를 반환하는 함수  
4) initialState : 초기 state  
5) init : 초기 함수  

> useReducer  

<img src="https://github.com/min-young417/WebP/assets/122364547/88f6acd6-e4dd-4c30-9051-b02cab0f0cd6" width="300"/>

### userContext
React는 Context API를 제공하여 앱 안에서 전역적으로 사용되는 데이터를 여러 컴포넌트끼리 쉽게 공유할 수 있는 방법을 제공.   
Context를 사용하면 Props로 데이터를 일일이 전달해 주지 않아도 해당 데이터를 가지고 있는 상위 컴포넌트에 그 데이터가 필요한 하위 컴포넌트가 접근할 수 있다.  
userContext는 Context로 분류한 데이터를 쉽게 받아올 수 있게 도와주는 역할.  

<img src="https://github.com/min-young417/WebP/assets/122364547/99646e91-1eb1-40df-a34d-8d66fdf1e757" width="600"/>

> useContext

<img src="https://github.com/min-young417/WebP/assets/122364547/ab50aea5-ee07-4225-8a52-221389b44864" width="300"/>
<img src="https://github.com/min-young417/WebP/assets/122364547/2db6fdcb-e065-4187-b2a2-e71aa90fc3b5" width="300"/>

### useRef

userRef는 저장공간 또는 DOM요소에 접근하기 위해 사용되는 React Hook.  
.current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환.  
반환된 객체는 컴포넌트의 전 생애주기를 통해 유지된다.   

> useRef

<img src="https://github.com/min-young417/WebP/assets/122364547/165801b7-c788-48f2-b68e-901ded56987b" width="300"/>

- forwardRef   
부모 컴포넌트에서 자식 컴포넌트 안의 DOM element에 접근하고 싶을 때 사용한다.  
함수형 컴포넌트는 인스턴스가 없기 때문에 ref 속성을 사용할 수 없다.  
함수형 컴포넌트를 forwardRef로 감싸주게 되면 ref를 사용할 수 있다.  

### useImperativeHandle

useImperativeHandle 훅은 자식 컴포넌트가 부모 컴포넌트로부터 함수나 메서드를 노출하고 커스터마이징 할 때 사용  
이를 통해 부모 컴포넌트는 자식 컴포넌트 내부의 특정 함수나 메서드에 직접 접근할 수 있으며, 이를 활용하여 자식 컴포넌트의 인터페이스를 더쉽게 조작하거나 노출할 수 있다.  

> useImperativeHadle

<img src="https://github.com/min-young417/WebP/assets/122364547/fe0c4fa7-a15c-455e-98ee-38e69ae27b57" width="300"/>

### useEffect

useEffect 함수는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook  
useEffect는 component가 mount 됐을 때, component가 unmount 됐을 떄, component가 update 됐을 때 특정 작업을 처리할 수 있다.  
즉, 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴폰넌트에서도 사용할 수 있게 된 것이다.  

> useEffect Ex

<img src="https://github.com/min-young417/WebP/assets/122364547/058ddefe-edd2-4da8-80a4-0f1cde859076" width="300"/>

### useEffect vs useLayoutEffect

userEffect는 컴포넌트들이 render와 paint 된 후 실행된다.
비동기적으로 실행된다.  
Paint 된 후 실행되기 때문에, useEffect 내부의 DOM에 영향을 주는 코드가 있을 경우 사용자 입장에서는 화면의 깜빡임을 보게 된다.  

<img src="https://github.com/min-young417/WebP/assets/122364547/cf7317fa-d77b-4db7-965e-c9258e436a1f" width="300"/>

useLayoutEffect는 컴포넌트들이 render 된 후 실행되며, 그 이후에 paint 가 된다.   
이 작업은 동기적으로 실행된다.  
Paint 가 되기 전에 실행 되기 때문에 DOM을 조작하는 코드가 존재하더라도 사용자는 깜빡임을 경험하지 않는다.   

<img src="https://github.com/min-young417/WebP/assets/122364547/b2657be3-5ba3-4f17-b717-b03fa867902b" width="300"/>

### useInsertionEffect

CSS-in-JS 방식을 사용하는 라이브러리를 위한 Hook.
이 경우가 아니라면, useEffect나 useLayoutEffect를 사용하는 것이 권장.  
useEffect와 마찬가지로, 서버사이트에선 실행되지 않고 클라이언트사이드에서만 실행된다.  
렌더링 전 다크모드 여부를 경정해야 할 경우에도 사용된다.   

```jsx
import { useInsertionEffect } from 'react';
 // 컴포넌트
function MyButton() {
	function useCSS(rule) {
	useInsertionEffect(() => {
 	// ... <style> 태그를 여기에서 주입하세요 ...
 	});
 		return rule;
 	}
const className = useCSS('...');
return <div className={className} />;
```

### useMemo

동일한 값을 리턴하는 함수를 반복적으로 호출할 경우 맨 처음 값을 메모리헤 저장해서 필요할 대마다 또다시 계산하지 않고 메모리에서 꺼내서 재사용을 하는 기법.  
간단히 말해서 자주 필요한 값을 맨 처음 계산할 때 캐싱해 놓아서 그 값이 필요할 깨마다 다시 계산을 하는 것이 아니라 캐시에서 꺼내서 사용하는 것.   

### useCallback

부모 컴포넌트에서 정의된 함수가 자식 컴포넌트로 props로 전달될 때, 부모 컴포넌트가 재렌더링되면 해당 함수는 새로운 참조를 가지게 된다.  
그러면 자식 컴포넌트는 props가 변경되었다고 인식하여 불필요한 재랜더링을 하게 된다.  
이러한 문제는 자바스크립트의 함수가 클로저(closure)라는 특성 때문에 발생하는데, 클로저는 함수가 생성된 시점의 환경을 ’기억‘한다.   
이 문제를 해결하기 위해 react에서는 useCallback이라는 Hook을 사용한다.  
useCallback을 사용하면 useCallback 첫번째 인자로 전달된 함수를 메모리제이션(저장)하고, 컴포넌트가 재렌더링될 때마다 새로 생성되지 않고, 의존성 배열에 명시된 값이 변경될 때만 함수가 새로 생성된다.   

> useCallback

<img src="https://github.com/min-young417/WebP/assets/122364547/46d2c4ad-fd39-46e4-8105-78646ea6efe1" width="300"/>

### useTransition

UI를 차단하지 않고 상태를 업데이트 할 수 있는 리액트 훅
useTransition은 컴포넌트 최상위 수준에서 호출되어 startTransition을 통해 우선순위가 낮은 상태 업데이트들을 transition이라고 표시해 리액트가 UI 렌더링시 우선순위에 따라 업데이트 할 수 있도록 한다. 이로써 렌더링이 오래 걸리는 컴포넌트의 블락을 피할 수 있게 된다. 

> useTransition

<img src="https://github.com/min-young417/WebP/assets/122364547/3092b4bb-1f4a-49e8-bed0-9718554e6628" width="300"/>

### use

Promise를 정의하는 데 필요한 상용구 코드의 양을 줄여 데이터 가져오기 프로세스를 단순화하도록 설계된 솔루션.  
use를 사용하면 promise을 인수로 전달하여 데이터를 비동기적으로 사져올 수 있다. 또한 if 문 내에서 “use”를 사용하여 특정 조건에 따라 조건부로 데이터를 일시 중지할 수 있다.  

```jsx
import { use } from "react";

export default function Note({id, shouldIncludeAuthor}) {
// fetchingdataasynchronously
  const note= use(fetchNote(id));
  let byline= null;
  
  if (shouldIncludeAuthor) {
// canbeusedinsideif statements
// Because`use` is insideaconditionalblock, weavoidblocking
// unncessarilywhen`shouldIncludeAuthor` isfalse.
    const author= use(fetchNoteAuthor(note.authorId));
    byline= <h2>{author.displayName}</h2>;
  }
  
  return(
    <div>
      <h1>{note.title}</h1>
      {byline}
      <section>{note.body}</section>
    </div>
  );
}
```

### useDebugValue

React DevTools에서 사용자 지정 hook에 label을 추가할 수 있는 React Hook.  
아무것도 return 하지 않는다.   
React Hooks 중 하나로 개발자 도구 Dev Tools에서 컴포넌트의 상태를 디버깅할 때 사용.  

> useDebugValue

```jsx
import { useDebugValue, useState } from 'react';

export default function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  useDebugValue(count, count => `Count: ${count}`);
  function handleIncrement() {
    setCount(count + 1);  
  }
  
  function handleDecrement() {
    setCount(count- 1);
  }
  
  return {
    count,
    handleIncrement,
    handleDecrement,
  };
}
```

### useId

react에서는 컴포넌트의 상태를 변경할 때마다 렌더링이 발생하므로, ID를 생성하기 위해 일반적인 JS 변수를 사용하면 ID가 매번 재생성될 수 있다.  
이러한 문제점을 해결하기 위해 고유한 ID를 생성할 수 있는 useId 훅이 도입되었다.   
유니크한 id가 없을 떄만 해당 훅을 사용하면 된다.   

```jsx
import { useId } from 'react';
 
function PasswordField() {
	const passwordHintId = useId();
 	return (
 		<>
 			<label>
 				Password:
 				<input
 					type="password"
 					aria-describedby={passwordHintId}
				 />
 			</label>
 			<p id={passwordHintId}>
				 The password should contain at least 18 characters
			</p>
		</>
	);
}
```

useSyncExternalStore
리액트에서 내부적으로 제공하는 useState, useReducer와 같은 산태관리 apu가 아니라 자체적으로 상태관리 퉁을 만들어 리액트 훅과 연동시킨 상태관리 라이브러리들을 external store라고 한다. 대표적으로 mobx, redux, recoil, jotai, xtsate, zustand, react qurey등이 있다.  
리액트가 외부 저장소의 변경사한을 “구독”할 수 있도록 도와주는 훅.  

```js
useSyncExternalStore(
	subscribe: (callback) => Unsubscribe,
	getSnapshot: () => State, 
	getServerSnapshot?:() => State
)
```

### Custom Hook

개발자가 직접 작성하여 새롭게 생성한 Hook
1) 조건문, 반복문 등에서 호출될 수 없고 컴포넌트 최상단에서만 호출 가능한다.
2) React 컴포넌트 함수 내에서만 호출 되어야 한다.
3) 함수 이름의 접두어는 반드시 ‘use’로 지정해야 한다. 