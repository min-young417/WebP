import { useRef,forwardRef } from 'react';
import MyInput from './MyInput';

const ForwardedMyInput= forwardRef(MyInput);

function Form() {
  const ref= useRef(null);
  function handleClick() {
// useImperativeHandle에서focus만노출시키고있다.
// ref.current에서input관련다른변수나함수접근시도시에러발생한다.
    ref.current.focus();
  }
  
  return(
    <form>
      <ForwardedMyInput ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}

export default Form;
