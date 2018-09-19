import React, { Component } from 'react';


class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.props.onCheckOff}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.props.onRemove}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
