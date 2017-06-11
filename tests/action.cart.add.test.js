import {
  addToCart,
} from '../src/actions'
import {
  ACTION_CART_ADD_ITEM,
} from '../src/actions/const'

describe('actions', () => {
  it('should create an action to add a item to cart', () => {
    const itemId = 1
    const expectedAction = {
      type: ACTION_CART_ADD_ITEM,
      itemId
    }
    expect(addToCart(itemId)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to add a item to cart', () => {
    const itemId = 12
    const expectedAction = {
      type: ACTION_CART_ADD_ITEM,
      itemId
    }
    expect(addToCart(itemId)).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to add a item to cart', () => {
    const itemId = 12
    const expectedAction = {
      type: ACTION_CART_ADD_ITEM,
      itemId
    }
    expect(addToCart(itemId)).toEqual(expectedAction)
  })
})