import { useEffect, useState } from "react";
const User =({name})=>{
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
    //    setInterval(()=>{
    //     console.log("Namaste react op");
    //    },1000);
    console.log("useEffect");
       return()=>{
        clearInterval(timer);
       console.log("UseEffect Return");
       };
    },[]);
    console.log("render")
    return(
        <div className="user-card">
        <h1>count = {count}</h1>
        <h1>count = {count2}</h1>
        <h2>Name : {name} </h2>
        <h3>Location : Indore</h3>
        <h4>Contact : payal@gmail.com</h4>
        </div>
    );
};
export default User;