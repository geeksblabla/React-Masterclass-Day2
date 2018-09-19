import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import NewItem from './NewItem';
import Items from './Items';



const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true, },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
   items:defaultState
  };

  UnpackedAllItems = () => {
    const items = this.state.items.map(i => ({...i,packed:false}))
    this.setState({items})
  }

  addItem = (name)=>{
    const item = {value:name, id : uniqueId(),packed:false}
    const items = [item,...this.state.items];
    this.setState({items})
  }
  removeItem = (id)=>{
    const items  = this.state.items.filter(i => i.id!==id)
    this.setState({items})
  }
  togglePacked = (id)=> {
      const items  = this.state.items.map(i => {
        if(i.id===id){
          return ({...i,packed:!i.packed})
        }
        return i
      })
      this.setState({items})
  }

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right? 

  render() {
    // Get the items from state
    const {items } = this.state
    const unpackedItems = items.filter(i=> !i.packed)
    const packedItems = items.filter(i=> i.packed)
    return (
      <div className="Application">
        <NewItem  onSubmit={this.addItem}/>
        <Items title="Unpacked Items" items={unpackedItems}  togglePacked={this.togglePacked} removeItem={this.removeItem}/>
        <Items title="Packed Items" items={packedItems} togglePacked={this.togglePacked} removeItem={this.removeItem}/>
        <button className="button full-width" onClick={this.UnpackedAllItems}> Mark All As Unpacked </button>
      </div>
    );
  }
}

export default Application;
