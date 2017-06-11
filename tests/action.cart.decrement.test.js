import {
  cartDecrementItemCount
} from '../src/actions'
import {
  ACTION_CART_DECREMENT_ITEM_COUNT
} from '../src/actions/const'

describe('actions', () => {
  it('should create an action to decrement a item count to cart', () => {
    const itemId = 1
    const expectedAction = {
      type: ACTION_CART_DECREMENT_ITEM_COUNT,
      itemId
    }
    expect(cartDecrementItemCount(itemId)).toEqual(expectedAction)
  })
})
