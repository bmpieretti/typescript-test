import * as React from 'react';

export interface AppProps { greeting: string; name: string; }

class App extends React.Component<AppProps, {}> {
  render() {
    const {
      greeting,
      name
    } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {greeting} {name}!
        </p>
      </div>
    );
  }
}

export default App;

