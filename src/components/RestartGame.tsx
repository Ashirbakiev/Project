import * as React from 'react';

export default (props: any) => {
  if (props.win) { return (<div className="you-win">
    <div className="winner">Вы выиграли! 🎉 😁</div>
    <button onClick={props.onRestart}>сыграй еще раз</button>
  </div>) }
  if (props.gameOver){return(<div className="you-win">
    <div className="winner">Вы проиграли! 🎉 😁</div>
    <button onClick={props.onRestart}>сыграй еще раз</button>
  </div>)}

  return (
    null
  )
}