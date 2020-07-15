import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import Card from './Card';

import Chewbacca from './images/Chewbacca.png';
import C3PO from './images/C3PO.png';
import Leia from './images/Leia.png';

class App extends React.Component {
  render() {
    return (
      <div className="container max-w-md mx-auto mt-4">
        <Card
          avatar={Chewbacca}
          name="Chewbacca"
          role="Resistance Pilot"
          planet="Kashyyyk"
        />
        <Card
          avatar={C3PO}
          name="C3PO"
          role="Communications / Comic Relief"
          planet="Tatooine"
        />
        <Card
          avatar={Leia}
          name="Leia"
          role="Princess / Resistance Commander"
          planet="Alderaan"
        />
      </div>
    );
  }
}

export default hot(App);
