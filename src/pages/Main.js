import React, { Component } from 'react';
import MainSpot from 'components/MainSpot';
import MenuLink from 'components/MenuLink';

class Main extends Component {
  render() {
    return (
      <div>
        <MainSpot/>
        <MenuLink/>
      </div>
    );
  }
}

export default Main;
