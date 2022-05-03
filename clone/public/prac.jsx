//bacic checkout for revise
import React from 'react';
import styled from "styled-components"

const Look=styled.div`
${(props)=>props.val==1?`
background:black;
color:white`:props.val==2?`
background:yellow;
color:black`:`background:white;
color:black;`}
`
function Prac() {
  const [count,setCount]=React.useState(0);
  const [count2,setCount2]=React.useState(0)
  const Ref=React.useRef()
  const timerRef=React.useRef()

  const incre=()=>{
    let arr=["red","green","yellow","pink"];
    console.log(Ref.current)
    Ref.current.style.color=arr[count]
    setCount((prev)=>{
      if(prev==4)
      {
        return 0
      }
      return prev+1;
    })
  }

  React.useEffect(()=>{
    timer()  
    return delay
  },[count2])


  const timer=()=>{
    timerRef.current=setInterval(()=>{
      console.log("mount")
      setCount2((prev)=>{
        if(prev==10)
        {
          return 0
        }
        return prev+1
      })
    },1000)
  }

  const delay=()=>{
    console.log("unmount")
    clearInterval(timerRef.current)
  }
  return (
    <Look val={count}>
      <h1 ref={Ref}>Counter:{count}{count2}</h1>
      <button onClick={incre}>Incre</button>
      <button onClick={()=>setCount(count-1)}>Decre</button>
      <button onClick={delay}>Pause</button>
    </Look>
  );
}
