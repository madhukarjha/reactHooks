import React from 'react';

const UseCallbackHookChild = ({data, addData}) => {
    return (
        <>
            {data && data.map((element) => {return element})}
           
            <button onClick={addData}>Add data</button>
        </>
    )
}
export default UseCallbackHookChild;