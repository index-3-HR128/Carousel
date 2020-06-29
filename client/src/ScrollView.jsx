import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ScrollView extends Component {
  static childContextTypes =  {
    scroll:PropTypes.object
  }
  register = (place, ref) =>{
    this.elements[place] = ref;
  }
  unregister = (place) => {
    delete this.elements[place];
  }
  getChildContext() {
    return {
      scroll: {
        register: this.register,
        unregister:this.unregister
      }
    }
  }

  render(){
    return (
      React.Children.only(this.props.children)
    )
  }
}

export default ScrollView;
