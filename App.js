import React, {Component} from 'react';
//import Box from '@material-ui/core/Box';
import './App.css';
class App extends Component{
  constructor(){
    super()
    this.state={
      voteAllowed:0,
      voteNotAllowed: 0,
      name:'',
      fname:'',
      age:'',
      gender:'',
      data:[]
    }
  }
  onInputChange(e){
    console.log(e.target.value)
     this.setState({
      [e.target.name]:e.target.value// name:
    })
  }
  submitForm(e)
  {
    
    e.preventDefault() 
    const {name,Fname,age,voteAllowed,voteNotAllowed,data} = this.state;
    const obj={
      name,age,Fname
    }
    if (parseInt(age)>18){
      this.setState({
        voteAllowed : voteAllowed+1
      })
    } else {
        this.setState({
          voteNotAllowed:voteNotAllowed+1
        })
    }
  
  
    data.push(obj.target)
  }
 
  render(){
    return(
      
      <div className="container">
      <div className="row">
        <div className="col-sm-6">
        
        </div>
        <div style={{backgroundColor:"PaleTurquoise"}} className="col-xl-6">
        Vote Allowed:{this.state.voteAllowed}<br/>
       Vote Not Allowed:{this.state.voteNotAllowed}
      
        </div>
      </div>
        <form onSubmit={this.submitForm.bind(this)}>
        <> <h1>ONLINE VOTING APPLICATION </h1>
        <h2> <b>REGISTRATION FORM </b></h2></>
          <div className="form-group">
            <label for="name"><b>NAME:</b></label>
            <input type="text" onChange={this.onInputChange.bind(this)} 
            value={this.state.name} name="name" className="form-control" id="text"/>
            </div>
            
            <div className="form-group">
             <label for="fname"><b>FATHER NAME:</b></label>
             <input type="text"  name="fname" className="form-control"
            id="fl"onChange={this.onInputChange.bind(this)} 
            value={this.state.fname} required/>
            </div>

            <div className="form-group">
            <b>GENDER:-</b> <span class="req" style={{color:"red"}}><b>*</b></span><b>
               Male</b> <input type="radio" onChange={this.onInputChange.bind(this)} 
           value={this.state.gender} name="gender" 
             id="ml" required/>
              <b>Female</b>
             <input type="radio"   onChange={this.onInputChange.bind(this)} 
           value={this.state.gender}name="gender"required/>
             </div>
             
             <div className="form-group">
           <label for="voter"><b>VOTER ID:</b></label>
           <input type="text" onChange={this.onInputChange.bind(this)} 
           value={this.state.voter} name="voter" className="form-control" id="vot"required/>
          </div>

           <div className="form-group">
           <label for="age"><b>AGE:</b></label>
           <input type="number" onChange={this.onInputChange.bind(this)} 
           value={this.state.age} name="age" className="form-control" id="age"required/>

          </div>
          <button type="submit" className="btn btn-primary">SUBMIT</button>
          <button
      name="Reset"
      onClick={() =>this.setState({
        name:'',
        age:'',
        fname:'',
        gender:'',
       voter:'',
      })} 
      >RESET</button>
         </form>
      </div>
    );
  }
}
export default App;