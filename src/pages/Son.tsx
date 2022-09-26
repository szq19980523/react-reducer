import React, { Dispatch } from 'react';
import { Action, useCount } from '../store';
const Son = () => {
  const context = useCount()
  const add1 = (dispatch: Dispatch<Action>) => {
    // 3秒后执行
    setTimeout(() => {
      dispatch({ type: 'increment' })
    }, 3000)
  }
  return (
    <div>
      <div onClick={() => context.dispatch(add1)}>子组件里点击count + 1</div>
    </div>
  )
}
export default Son