import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',
    panda: 'https://goo.gl/oNbtoq',
    pp: 'https://goo.gl/oNbtoq',
}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImages extends Component {
    state = { src: ANIMAL_IMAGES[this.props.animal] }

    render(){
        console.log("-> render")
        return (
            <img 
                alt={this.props.animal}
                src={this.state.src}
                width='250'

            />
        )
    }

    componentWillReceiveProps(nextProps){
        console.log("1. componentWillReceiveProps")
        console.log(nextProps)
        this.setState({src: ANIMAL_IMAGES[nextProps.animal]})
    }

    shouldComponentUpdate(nextProps){
        console.log("2. shouldComponentUpdate")
        console.log('/// Next ->', nextProps.animal)
        console.log('/// Prev ->', this.props.animal)
        return nextProps.animal !== this.props.animal;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("3. componentWillUpdate")
        console.log('/// Next Prop ->', nextProps.animal)
        console.log('/// Next State ->', nextState)
        const img = document.querySelector('img')
        console.log('from img element', { alt: img.alt })
        // web animations api
        img.animate([ {
        filter: 'blur(0px)'
        }, {
        filter: 'blur(2px)'
        }], {
        duration: 500,
        easing: 'ease'
        })

    }

    componentDidUpdate(prevProps, prevState) {
        console.log("4. componentDidUpdate")
        console.log('/// prev Prop ->', prevProps.animal)
        console.log('/// prev State ->', prevState)
        const img = document.querySelector('img')
        console.log('from img element', { alt: img.alt })
        // web animations api
        img.animate([ {
        filter: 'blur(2px)'
        }, {
        filter: 'blur(0px)'
        }], {
        duration: 1500,
        easing: 'ease'
        })
    }
    
    

    
}

AnimalImages.propTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

class EjemploCicloDeActuacion extends Component {
    state = {animal: 'panda'}
    
    _renderAnimalButton(animal) {

        return (
            <button
                // disabled={animal === this.state.animal }
                key={animal}
                onClick={() => this.setState({animal})}
            >
                {animal}
            </button>
        )
        
    }
    
    render(){

        return(
            <div>
                <h4>Ejemplo Ciclo De Actuacion</h4>
                <div>
                    {ANIMALS.map(animal => this._renderAnimalButton(animal))}
                </div>
                <AnimalImages animal={this.state.animal}  />
            </div>
        )
    }
}

export default EjemploCicloDeActuacion;