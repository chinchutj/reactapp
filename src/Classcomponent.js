import React, {Component} from 'react'

class Classcomponent extends Component{

    constructor(props){
        super(props)
        this.state={
            status:'Origin:INDIAN',
            status1:'abcd'
        }
    }

    myClass=()=>{
        document.getElementById("cp2").innerHTML='10 august 1994';
   
    }
   
    myClass1=()=>{
        var a='Home:';
        var b='Chicago';
        document.getElementById("cp3").innerHTML=a+' '+b;
    }
    render(){
        return(
            <div> 
                <button onClick={this.myClass}>Date of Birth</button>
                <p id="cp2"></p>
                
                {this.state.status}
                <br/><br/>
                <button onClick={this.myClass1}>HOME</button>
                <p id="cp3"></p>
                <br/>
               
            </div>
        )
    }
}
export default Classcomponent


































