import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructore");
    };
    componentDidMount(){
        // console.log("parent component did mount");
    }
    render(){
        // console.log("parent render");
        return(
                    <div>
       <h1>About</h1>
       <h2>This is Namaste react web series</h2>
       {/* <User name = {"Payal (function)"}/> */}
       <UserClass name = {"payal (class)"}/>
        </div>

        );
    }
}

// const About = () =>{
//     return (
//         <div>
//        <h1>About</h1>
//        <h2>This is Namaste react web series</h2>
//        <User name = {"Payal (function)"}/>
//        <UserClass name = {"payal (class)"}/>
//         </div>
//     );
// };
export default About;