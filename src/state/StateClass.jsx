import React, { Component } from 'react';


class StateClass extends Component {
    constructor(props){
        super(props);
        this.state={
            fullname: 'Ouattara Ibrahim',
            age: 25
        }
    }
    arrow = ()=>this.setState({
        fullname: this.state.fullname.toLocaleUpperCase()
    })
    plus = ()=>this.setState({
        age: this.state.age + 1
    })
    minus = ()=>this.setState({
        age: this.state.age - 1
    })
    delete = ()=>this.setState({
        fullname: 'Ouattara Ibrahim',
        age: 25
    })
    render() {
        let styleButton = {width:30, height:30, marginRight:10, marginTop:30 ,borderRadius:100, border:'3px solid black', backgroundColor: 'aliceblue', cursor:'pointer'};
        return (
            <div style={{width:'30%', height:200, border:'1px solid red',padding:'30px 80px', textAlign:'center'}}>
                <h1 style={{fontWeight:'bolder', fontSize: 20}}>Nom : {this.state.fullname}</h1>
                <p style={{marginTop:20, fontWeight:'bolder', fontSize: 20}}>J'ai : {this.state.age} ans</p>
                <button onClick={this.plus} style={styleButton}><i className="fa-solid fa-circle-plus"></i></button>
                <button onClick={this.minus} style={styleButton}><i className="fa-solid fa-circle-minus"></i></button>
                <button onClick={this.arrow} style={styleButton}><i className="fa-solid fa-arrow-up"></i></button> 
                <button onClick={this.delete}style={styleButton}><i className="fa-solid fa-trash-can"></i></button> 
            </div>
        );
    }
}



export default StateClass;

