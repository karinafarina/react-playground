import React from 'react';
//import Split from './composition/Split';
import './App.css';
//import Tooltip from './composition/Tooltip';
import TheDate from './state/TheDate';
//import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

{/*const firstTooltip = (
    <Tooltip color='hotpink' message='tooltip message'>
      ipsum
    </Tooltip>
  )

  const secondTooltip = (
    <Tooltip color="#126BCC" message='another tooltip message'>
    officiis
    </Tooltip>
  )*/}

function App() {
  return (
    <main className='App'>
      <TheDate />
      {/*<Counter count={123} />*/}
      <HelloWorld />
      <Bomb />
      <RouletteGun />
      {/*<Split className='left' flexBasis={2}>This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        <Tooltip message='one more tooltip message'>
        Necessitatibus?
        </Tooltip>
      </Split>
      <Split className="right">This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.</Split>*/}
    </main>
  );
}

export default App;
