import {
  removeFromCart
} from '../src/actions'
import {
  ACTION_CART_REMOVE_ITEM
} from '../src/actions/const'

describe('actions', () => {
  it('should create an action to add a item to cart', () => {
    const itemId = 1
    const expectedAction = {
      type: ACTION_CART_REMOVE_ITEM,
      itemId
    }
    expect(removeFromCart(itemId)).toEqual(expectedAction)
  })
})