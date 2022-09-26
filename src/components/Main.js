
import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms'
import FilmsPresentation from './FilmsPresentation';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
           film: Films
        };
      }
      render() {
        return <FilmsPresentation film={this.state.film}/>
      }
    }
    export default Main
    

