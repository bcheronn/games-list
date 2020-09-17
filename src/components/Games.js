import React from 'react';

class Games extends React.Component {
  render() {
    const gamesListSize = this.props.gamesList.length;

  return (
    <div>
      Game: {gamesListSize}
    </div>
    );
  }
}

export default Games;