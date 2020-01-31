 import React, { Component } from 'react';

 class Forms extends Component {

    constructor(){
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerm: true,
        }
    }

    onSubmiHandle = e => {
        e.preventDefault();
        console.log(this.state)
    }

    onChangeHandle = e => {
        this.setState({ inputTerm: e.target.checked})
    }
    
    render(){
        return(
            <form onSubmit={this.onSubmiHandle}>
                <p>
                    <label htmlFor='name'>Nombre </label>
                    <input
                        id="name"
                        name="name"
                        onChange={ e => this.setState({ inputName: e.target.value })}
                        placeholder="Introduce tu nombre"
                        ref={inputElement => this.inputName = inputElement}
                        value={this.state.inputName}
                    ></input>
                </p>
                <p>
                    <label htmlFor='twitter'>Twitter </label>
                    <input
                        id="twitter"
                        name="twitterAccount"
                        onChange={ e => this.setState({ inputTwitter: e.target.value })}
                        placeholder="Introduce tu Twitter"
                        value={this.state.inputTwitter}
                    ></input>
                </p>
                <p> 
                    <label htmlFor='condiciones'>Acepto las condiciones</label>
                    <input 
                        checked={this.state.inputTerm}
                        onChange={this.onChangeHandle}
                        type="checkbox"
                    ></input>
                </p>
                <button>Enviar</button>
            </form>
        );
    }
 
}

export default Forms;