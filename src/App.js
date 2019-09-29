import React from 'react';
import StackNavigator from './stackNavigator';
import Voren from "./components/FormDesign/index"
import OnBoarding from "./components/OnBoarding/index"
import Greet from "./components/OnBoarding/test"

import Contacts from "./components/API App/index"
function App() {
  return (
    <div >
      {/* <StackNavigator /> */}
      {/* <Voren /> */}
      {/* <OnBoarding />
      <Greet /> */}

      <Contacts />
    </div>
  );
}

export default App;
