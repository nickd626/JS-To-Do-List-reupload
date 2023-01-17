import React, { Component } from 'react'

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [],
        isSubmitted: false
    }
  }
  
  addItem(item) {
    this.setState(prevState => ({ items: [...prevState.items, { item, completed: false }] }));
  }
  
  toggleCompleted(index) {
    this.setState(prevState => {
      const items = [...prevState.items];
      items.splice(index, 1);
      return { items };
    });
  }

  render() {
    


    return (
        <div>
      <div className='input'>
        <h1 className='title'>To-Do List</h1>
        <input
        className='input-field'
        type="text"
        placeholder='Add an Item'
        onChange={event => this.setState({ listItem: event.target.value })}
        />
        <button 
        className='add-btn'
        onClick={() => {
            this.addItem(this.state.listItem);
            this.setState({ isSubmitted: true })
        }}>
            Add
        </button>
        </div>
        <div>
            <ul>
                {this.state.items.map((item, index) => (
                    <li 
                    className='items'
                    key={item.item}>
                    <h1 className='item-title'>{item.item}</h1>
                    <button 
                    className='rmv-btn'
                    onClick={() => this.toggleCompleted(index)}>
                    X
                    </button>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    )
  }
}
