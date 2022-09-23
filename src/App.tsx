import './App.css';
import React, { useContext, useReducer } from 'react'
import Son from './pages/Son';
const initState = {
  count: 1
} // 定义初始化数据
export const Context = React.createContext<{
  state: typeof initState,
  dispatch: React.Dispatch<any>
}>({
  state: initState,
  dispatch: () => { },
})


function App() {
  const reducer = (preState, action) => {
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
  } // 定义reducer
  const [state, dispatch] = useReducer(reducer, initState) // 把数据传递给reducer

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <div>这是一个组件</div>
        <Son />
      </div>
    </Context.Provider>
  );
}

export default App;
