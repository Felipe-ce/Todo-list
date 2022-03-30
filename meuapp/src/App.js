import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items:center;
  background-color: bisque;
}
`;

const Container = styled.div`
  width: 60vw;
  height: 80vh;
  background-color: tomato;
  text-align: center;
  color: #fff;
`;

class App extends Component {
  state = {
    tarefa: '',
    listaTarefa: [],
  };

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value,
    });
  };

  adicionar = () => {
    let { tarefa } = this.state;
    if (tarefa.length > 0) {
      this.setState({
        tarefa: '',
        listaTarefa: this.state.listaTarefa.concat({
          tarefa: tarefa,
          id: Date.now(),
        }),
      });
    }
  };

  remover = (id) => {
    let { listaTarefa } = this.state;
    this.setState({
      listaTarefa: listaTarefa.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <h1>Todo List</h1>
        <input onChange={this.handleChange} value={this.state.tarefa} />
        <button onClick={this.adicionar}>add</button>
        <ul>
          {this.state.listaTarefa.map((item) => (
            <li>
              {item.tarefa}
              <button onClick={() => this.remover(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
