import React, { Component } from 'react';
import Item from './Item';
import Filter from './Filter';

class Items extends Component {
  state = {
    searchTerm :''
  };

  updateSearchTerm = searchTerm => {
      this.setState({searchTerm})
  };

  render() {
    const { title, items } = this.props;
    const {searchTerm} = this.state
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter searchTerm={searchTerm} onChange={this.updateSearchTerm} />
        {items
          .filter(item =>
            // Hmm… this needs some work.
            item.value.toLowerCase().includes(searchTerm.toLowerCase()),
          )
          .map(item => (
            <Item
              key={item.id}
              onCheckOff={() => this.props.togglePacked(item.id)}
              onRemove={() => this.props.removeItem(item.id)}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
