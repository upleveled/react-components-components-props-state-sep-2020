import { PropsHeader } from './PropsHeader';
import React, { useState } from 'react';
import './App.css';
import { MainCounter } from './Counter';
import ClassCounter from './class-components/Counter.js';
import HooksCounter from './hooks/Counter.js';
import CssModulesProfile from './styling/CssModulesProfile';
import InlineStyledProfile from './styling/InlineStyledProfile';
import EmotionProfile from './styling/EmotionProfile';
import ControlledComponents from './ControlledComponents';
import LiftingStateUp from './LiftingStateUp';
import Button from './Button';
import PropTypesComponent from './PropTypes';
import Layout from './ChildrenPropinLayout';
import UseEffectComponent from './UseEffectComponent';
import DataFetchingWithUseEffect from './DataFetchingWithUseEffect';

const user = {
  avatar: 'https://miro.medium.com/max/580/1*tKM7HOZ4JUoMZMRLP3XbzA.png',
  firstName: 'Joey',
  lastName: 'C',
};

function App() {
  const [liftingStateUpName, setLiftingStateUpName] = useState('');

  return (
    <Layout>
      <div className="App">
        <PropsHeader
          // Props 1. Pass in information
          darkMode={true}
          text="UpLeveled"
          liftingStateUpName={liftingStateUpName}
        />
        <MainCounter />
        <h1>Class Components</h1>
        <ClassCounter title="Class Counter" />
        <h1>Hooks</h1>
        <HooksCounter title="Hooks Counter" />
        <h1>Inline Styling Profile</h1>
        <InlineStyledProfile user={user} />
        <h1>CSS Modules Profile</h1>
        <CssModulesProfile user={user} />
        <h1>Emotion Profile</h1>
        <EmotionProfile user={user} />
        <h1>Controlled Components</h1>
        <ControlledComponents />
        <h1>Lifting State Up</h1>
        <LiftingStateUp
          name={liftingStateUpName}
          setName={setLiftingStateUpName}
        />
        <h1>Button with Prop Spreading</h1>
        <Button>Example button text</Button>
        <h1>prop-types Example</h1>
        <PropTypesComponent username="karl" />
        <h1>useEffect Example</h1>
        <UseEffectComponent liftingStateUpName={liftingStateUpName} />
        <h1>Data Fetching with useEffect Example</h1>
        <DataFetchingWithUseEffect />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}

export default App;
