# 4월 5일 수업정리

### Component
프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈  
React는 모든 페이지가 Component로 구성  
입력(props)을 받아 출력(Element)하는 역할

### React Component
props를 입력하고 React Element를 리턴  
props : properties의 줄임말로, 리액트 컴포넌트의 속성 

#### 1) Class Component
```javascript
class Welcome extends React.Component{
	render(){
		return <h1>안녕, {this.props.name}</h1>;
	}
}
```
#### 2) Function Component
```javascript
function Welcome(props){
 	return <h1>안녕, {props.name}</h1>;
}
```

#### +Component Name
항상 대문자로 시작(소문자로 시작하는 Component는 DOM 태그로 인식되기 때문)  
*폴더는 소문자로 시작하는 카멜케이스로 작성, 컴포넌트를 만드는 파일은 대문자로 시작하는 카멜케이스로 이름 작성

#### Class Component, Function Component 예제
> comp

<img src="https://github.com/min-young417/WebP/assets/122364547/00420163-7532-474f-a84c-1e07c15c59d2" width="200"/>

### Props
properties의 줄임말  
상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용(단방향의 데이터 흐름)  
React Component는 props를 이용해 서로 통신  

#### props 예제
> prop

<img src="https://github.com/min-young417/WebP/assets/122364547/65cffd2c-afd9-475b-a9be-dfc459ca04b9" width="300"/>

> prop2

<img src="https://github.com/min-young417/WebP/assets/122364547/7e5c3d4b-793c-4a54-8aaf-0b8abceda880" width="300"/>
