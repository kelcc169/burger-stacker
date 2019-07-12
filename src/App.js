import React from 'react';
import Ingredients from './Ingredients';
import BurgerStack from './BurgerStack';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'}],
      stack: []
    }
    this.addIngredient = this.addIngredient.bind(this);
    this.clearBurger = this.clearBurger.bind(this)
  }

  addIngredient(e, i) {
    e.preventDefault();
    var stackCopy = Array.from(this.state.stack)
    stackCopy.unshift(this.state.ingredients[i])

    this.setState({
      stack: stackCopy
    });
  }

  clearBurger() {
    this.setState({
      stack: []
    });
  }

  render() {
    return (
      <div className="container">
        <Ingredients 
          className="ingredients"
          ingredients={this.state.ingredients}
          onClick={this.addIngredient}
        />
        <BurgerStack
          className="ingredients"
          pieces={this.state.stack}
          onClick={this.clearBurger}
        />
      </div>
    );
  }
}

export default App;
