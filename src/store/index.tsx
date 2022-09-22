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
  dispatch: Dispatch<{
    type: string;
    payload?: Partial<IState>;
  }>;
}
const initState = {
  count: 1
}
const Context = createContext<IContext>({
  state: initState,
  dispatch: () => { },
});
export const useCount = useContext(Context)
export const ContextProvider: React.FC<Props> = (props) => {
  const reducer = useCallback((preState, action) => {
    const { type } = action;
    switch (type) {
      case 'increment':
        return { count: preState.count + 1 };
      default:
        return preState;

    }
  }, []);
  const [value, dispatch] = useReducer(reducer, initState)
  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}
export default ContextProvider