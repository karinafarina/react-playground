import React from "react";
import './Accordion.css'

class Accordion extends React.Component {
  static defaultProps = {
    sections: []
  };
  state = {
    activeSectionIndex: null,
  };
  
  handleClick = (index) => {
    this.setState({ activeSectionIndex: index });
  }
  
  renderListItems() {
    return this.props.sections.map((section, index) => (
      <li className='Accordion__item' key={index}>
        <button type="button"
                onClick={() => this.handleClick(index)}
        >
          {section.title}
        </button>
        {(this.state.activeSectionIndex === index) && 
        <p className='content'>
          {section.content}
        </p>}
      </li>
      )  
    )
  }
  
  render() {
    return(
      <div>
        <ul className='Accordion'>{this.renderListItems()}</ul>
      </div>
    )
  }
}

export default Accordion;