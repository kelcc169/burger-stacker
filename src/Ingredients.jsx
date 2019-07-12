import React from 'react';

class Ingredients extends React.Component {
  render () {
    return (
      <div className="ingredients">
        {this.props.ingredients.map((ingredient, i) => 
          <div key={i}>{ingredient.name}
            <button onClick={(e) => this.props.onClick(e, i)}>  >  </button>
          </div>)}
      </div>
    );
  }
}

export default Ingredients;