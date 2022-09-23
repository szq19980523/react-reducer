import React, { createContext, Dispatch, ReactPropTypes, useCallback, useContext, useReducer } from 'react';
interface Prop {
  a?: 1,
  children?: JSX.Element
}
type Props = Prop & ReactPropTypes;
interface IState {
  count: number;
}
interface IContext {
  state: IState;
  dispatch: Dispatch<Action>;
}
type Action = {
  type?: 'string',
  payload: any
} | (() => Promise<any>)
const initState = {
  count: 1
}
const Context = createContext<IContext>({
  state: initState,
  dispatch: () => { },
});
export const useCount = () => {
  return useContext(Context)
}
export const ContextProvider: React.FC<Props> = (props) => {
  const reducer = useCallback((preState, action) => {
    let { type } = action;
    if (typeof action === 'function') {
      type = action()
    }
    switch (type) {
      case 'increment':
        return { count: preState.count + 1 };
      default:
        return preState;
    }
  }, []);
  const [state, dispatch] = useReducer(reducer, initState)
  const funcDispatch: React.Dispatch<Action> = (action: Action) => {
    if (typeof action === 'function') {
      action().then((res) => {
        dispatch(res)
      })
    } else {
      dispatch(action)
    }
  }
  return (
    <Context.Provider value={{ state, dispatch: funcDispatch }}>
      {props.children}
    </Context.Provider>
  )
}
export default ContextProvider