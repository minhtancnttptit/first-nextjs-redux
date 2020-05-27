import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import reducer from './reducers'

export const initStore = (initilaState = {}) => {
	return createStore(reducer, initilaState)
}

export const wrapper = createWrapper(initStore)