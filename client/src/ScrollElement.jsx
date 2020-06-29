import React, {component} from 'react';
import { findDOMNode } from 'react-dom';
import scrollIntoView from 'scroll-into-view';
import PropTypes from 'prop-types';

class ScrollElement extends Component {
  static contextTypes = {
    scroll: propTypes.object
  }
  componentDidMount() {
    this.context.scroll.register(this.props.place, this._element);
  }
  componentWillMount() {
    this.context.scroll.unregister(this.props.place);
  }

  scrollTo = () {
    const node = findDOMNode(this.elements[place]);
    scrollIntoView(node,{
      time:500,
      align: {
        top: 0
      }
    })
  }

  render(){
    return (
      React.cloneElement(this.props.children,{
        ref: ref=> this._element = ref
      })
    )
  }
}

export default ScrollElement;
