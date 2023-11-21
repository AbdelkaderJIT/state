import React from 'react';
import './App.css';


class App extends React.Component {
  state = {
    fullName: "Sara jarboui",
    bio:"louage egyptien chez les pyramides avec des pierre sans froid et chaud",
    imgSrc:"famech image",
    profession:"taxi pluriel",
    show:false,
    timer:0,
 
  };

  handleClick=()=>{
    if (this.state.show === true){
      this.setState({show:false})
    }else{
      this.setState({show:true})
    }}

    handleTimer=()=>{
      
    }
  
    componentDidMount() {

 setInterval( ()=>(this.setState({timer:this.state.timer + 1})), 1000);
    }
    
    

  render(){
    
    
    return(
      <>
      {
         this.state.show === true?
           <div style={{display: "flex"}}>
           <h1 style={{marginRight:"50px"}}> {this.state.fullName}</h1>
           <h1 style={{width:"700px", marginRight:"50px"}}> {this.state.bio}</h1>
           <h1 style={{marginRight:"50px"}}> {this.state.imgSrc}</h1>
           <h1 style={{marginRight:"50px"}}> {this.state.profession}</h1>
           <button style={{display:"flex",flex:"flex-start", fontSize:"27px", textAlign:"center", paddingTop:"50px"}} onClick={this.handleClick}> Hide </button>
         
           </div>
         :
      
         <div style={{display: "flex", justifyContent:"center"}}>
         <h1>Hellow ! Click dat button yow !</h1>
         <button onClick={this.handleClick}> Show</button>
        
         </div>
       
      }
       <h1 style={{display: "flex", justifyContent:"center"}}>{this.state.timer}</h1>
      </>
    )
}
}

export default App ;
