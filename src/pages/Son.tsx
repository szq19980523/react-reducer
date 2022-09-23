import React, { useContext } from 'react';
import { Context } from '../App'
const Son = () => {
  const context = useContext(Context)
  console.log(context);

  return (
    <div>
      这是子组件
      {context.state.count}
      <div onClick={() => context.dispatch({ type: 'increment' })}>子组件里点击count + 1</div>
    </div>
  )
}
export default Son