import { useImperativeHandle} from 'react';
function ChildComponent(props, ref) {
  useImperativeHandle(ref, () => {
    return{
      getText: () => 'useImperativeHandle테스트'
    };
  }, []);
 
  return<span>childrenref테스트</span>
}
 
export default ChildComponent;