import makeStore from '../hooks/makeStore';

import { reducer, initialState } from '../reducerSettings';


const { StoreProvider, useAppState, useAppDispatch } = makeStore(reducer, initialState);

export {StoreProvider, useAppState, useAppDispatch};