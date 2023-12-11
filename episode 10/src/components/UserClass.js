import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
    this.state = {
        // count : 0,
        // count2 : 1,
        userInfo:{
            name:"Dummy",
            location : "Default",
            avatar_url : "htp://dummy-photo.com",
        },

    };    
    //  console.log("child constructore");
    }
  async componentDidMount(){
        // console.log("Child component Did Mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo : json,
        });
        console.log(json);
    }
    componentDidUpdate(){
        this.timer=setInterval(()=>{
            console.log("child - componentDidMount");
        },1000)
        console.log("component Did Upadate");
    }
    componentWillUnmount(){
        clearInterval(this.timer);
       console.log("component will unmount");
    }
    render(){
        // console.log("child component did mount");
        // const {name} = this.props;
        // const {count, count2} = this.state;
        // const {count} = this.state;

        // const [count2] = this.state;
        const{name,location,avatar_url} = this.state.userInfo;
        return(
         <div className="user-card">
            {/* <h1>Count : {this.state.count}</h1> */}
        {/* <h1>Count : {count}</h1> */}
        {/* <h1>Count2 : {count2}</h1> */}
         {/* never update state variable directly like this*/}
        {/* <button onClick={()=>{
            this.state.count = this.state.count + 1;
        }}>Click Increase</button>zz */}
        {/* <button onClick={()=>{
            this.setState({
                count: this.state.count +1,
                 count2 : this.state.count2+1,
            });
        }}>Click Increase</button> */}
        <img src={avatar_url}/>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : payal@gmail.com</h4>
        </div>
        );
    }
}
export default UserClass;