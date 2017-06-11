import 'whatwg-fetch'
import { API_ENDPOINT } from '../actions/const'

export default function () {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    // .then((data) => {
    //   console.log(data); // eslint-disable-line
    //   return data
    // })
}
