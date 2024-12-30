import { useEffect } from "react";

const Even = ()=>{
    //마운트와 언마운트
    useEffect(()=>{
        //console.log(`Even Mount`);
        return ()=>{
            console.log(`Even unmount`);
        }
    },[]);
    return(
        <>
            <h1>Even</h1>
        </>
    );

}

export default Even;