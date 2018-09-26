import { observable, computed, action } from 'mobx';

export default class ItemStore {
  @observable items = [];


  @computed get packedItems() {
    return this.items.filter(item => item.packed);
  }

  @computed get unpackedItems() {
    return this.items.filter(item => item.unpacked)
  }

  @computed get filteredUnpackedItems() {
    return this.unpackedItems.filter(item => item.value.includes(this.unpackedItemsFilter));
  }


}
