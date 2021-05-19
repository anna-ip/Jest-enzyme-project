import axios from 'axios'

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
}

//returns an object with type 'CORRECT_GUESS'
export function correctGuess() {
  return { type: 'CORRECT_GUESS' }
}
export const getSecretWord = () => {
  // TODO: write actual action in Redux / context sections
  return axios.get('http://localhost:3030').then((response) => response.data)
}
