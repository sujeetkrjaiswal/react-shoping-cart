import {
  cartIncrementItemCount
} from '../src/actions'
import {
  ACTION_CART_INCREMENT_ITEM_COUNT
} from '../src/actions/const'

describe('actions', () => {
  it('should create an action to increment a item count to cart', () => {
    const itemId = 1
    const expectedAction = {
      type: ACTION_CART_INCREMENT_ITEM_COUNT,
      itemId
    }
    expect(cartIncrementItemCount(itemId)).toEqual(expectedAction)
  })
})
