import { promiseReducer } from './promiseReducer'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'


export const store = createStore(combineReducers(
													{
														promise: promiseReducer, 

													}
												), applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()))