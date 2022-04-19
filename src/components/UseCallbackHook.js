import React, {useCallback, useState} from 'react';
import UseCallbackHookChild from './useCallbackHookChild';
const UseCallbackHook = () => {
    const [data, setData]=useState(['Product1', 'Product2']);
    const addData=useCallback(()=>{
        setData([...data, `Product${data.length+1}`]);
    },[data]);
    return (
        <UseCallbackHookChild data={data} addData={addData} />
    )
}
export default UseCallbackHook;