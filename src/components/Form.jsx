import React from 'react';

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
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome: <input type="text" value={this.state.nome} onChange={this.changeName}/>
          </label>

          <br/>

          <label>
            Linguagem favorita
            <select value={this.state.linguagem} onChange={this.changeSelect}>
              <option>Javascript</option>
              <option>Python</option>
              <option>C++</option>
            </select>
          </label>

          <br/>

          <label>Python
            Sou:
            <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador"/> programador
            <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante"/> estudante
          </label>

          <br/>

          <label>
            Bio:
            <textarea cols="50" value={this.state.bio} onChange={this.changeBio}/>
          </label>
          <input type="submit" value="Salvar"/>
        </form>
      </>
    )
  }

}

export default Form;