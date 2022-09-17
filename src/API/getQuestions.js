import axios from 'axios'
import { baseURL } from '../baseURL'

const get = axios.create({
  baseURL: baseURL,
})

export default async function getQuestions(params) {
  return get('questions?'+params)
    .then((questions) => questions.data)
    .catch((err) => err.message)
}
