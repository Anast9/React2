import React from "react";
//import Radium from 'radium'; // Corrected the import statement
import classes from "./Car.css";



class Car extends React.Component {

  componentWillReceviveProps(nextProps) {
   console.log('Car componentWillReceviveProps', nextProps);
   
  }

  shouldComponentUpdate(nextProps, nextState){
   console.log('Car shouldComponentUpdate', nextProps, nextState);
   return nextProps.name.trim() !== this.props.name.trim()
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log('Car getDerivedStateFromProps', nextProps, prevState);
  }
  componentDidUpdate(nextProps, nextState) {
   console.log('Car componentDidUpdate', nextProps, nextState);
   return nextState
  }

 
  getSnapshotBeforeUpdate(){
    console.log('Car  getSnapshotBeforeUpdate')
  }
  componentWillUnmount(){
    console.log('Car componentWillUnmount')
  }

  
  render() {
    console.log('Car render')

    if (Math.random() > 0.7){
      throw new Error(' car render failed');
    }
    const inputClasses = [classes.input];



    if (this.props.name !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold');
    }

    return (
      <div className="Car">
        <h3>Дорамы Имя: {this.props.name}</h3>
        <p>Дата выхода: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default Car;
