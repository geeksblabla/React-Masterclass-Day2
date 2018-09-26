## Steps:
* Create constant  => string
   `export const REMOVE_ITEM = 'REMOVE_ITEM';`
* Create Action => return object
```js
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});
```
* Create reducer => function : logic

```js
import {  REMOVE_ITEM } from '../constants';

export default function(state = {}, action) {

  if (action.type === REMOVE_ITEM) {
    return state.filter(item => item.id !== action.id);
  }
  return state;
}
```
* Create Store  =>
```js
const store = createStore(
  reducers,
  initialState);
```

*  Provider

* use connect  HOC to connect react Component :

```jsx
import { toggleItem, removeItem } from '../actions/items-actions';

const mapStateToProps = ({ items, filter }) => {
  return { items: items.filter(item => item.packed && item.value.includes(filter.packedItemsFilter)) };
};

const mapDispatchToProps = dispatch => ({
  onCheckOff(id) {
    dispatch(toggleItem(id));
  },
  onRemove(id) {
    dispatch(removeItem(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);

```