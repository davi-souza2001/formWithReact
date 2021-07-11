import React from 'react';
import './Form.css';

/* import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
/* window.location.href ='/mensage' */ //Uma forma de passarr de pagina porem invalida */

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nome: '', linguagem: 'Javascript', tipo: 'programador', bio:''};

    this.handleSubmit = (event)=>{
      event.preventDefault();
      console.log(this.state);
    }

    this.changeName = (event)=>{
      this.setState({nome: event.target.value});
    }

    this.changeSelect = (event)=>{
      this.setState({linguagem: event.target.value});
    }

    this.changeRadio = (event)=>{
      this.setState({tipo: event.target.value});
    }

    this.changeBio = (event)=>{
      this.setState({bio: event.target.value});
    }
  }
  
  render(){
    return(
      <div className="formu">
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome: <input type="text" value={this.state.nome} onChange={this.changeName} className="name" required/>
          </label>

          <br/>

          <label>
            Linguagem favorita: 
            <select value={this.state.linguagem} onChange={this.changeSelect} className="linguage" required>
              <option>Javascript</option>
              <option>Python</option>
              <option>C++</option>
            </select>
          </label>

          <br/>

          <label>
            <div  className="imam">
            <h4>Sou: </h4>
            <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador"/> programador
            <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante"/> estudante
            </div>
          </label>

          <br/>

          <label>
            <div className="bio">
            <h4>Bio:</h4>
            <textarea cols="50" value={this.state.bio} onChange={this.changeBio} required/>
            </div>
          </label>

          <br/>

          <input type="submit" value="Salvar" className="save" />
        </form>

        

      </div>
      
    )
  }

}

export default Form;