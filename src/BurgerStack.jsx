import React from 'react';

class BurgerStack extends React.Component {
  render() {
    return (
      <div className="ingredients">
        {this.props.pieces.map((piece, i) => 
        <div className='burger' 
          key={i} 
          style={{backgroundColor: piece.color}}
          >{piece.name}
        </div>)}
        <button onClick={this.props.onClick}>Clear Burger</button>
      </div>
    );
  }
}

export default BurgerStack;