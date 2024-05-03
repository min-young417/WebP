import { useEffect } from "react"; //useEffect를사용하기위해import
export default function UseEffectTest() {
  console.log("useEffect전");
  // useEffect도함수기때문에함수호출
  useEffect(() => {
    console.log("메롱으로바꿀거지롱");
    const hi= document.getElementById("hi");
    hi.innerText= "메롱";
  });
  
  console.log("useEffect후");
 
  return(
    <div className="App">
    <h1 id="hi">안녕하세요.</h1>
    </div>
  );
}
