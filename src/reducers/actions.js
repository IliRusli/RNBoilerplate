import { ADD_PLACE } from './sample/actionTypes';

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}