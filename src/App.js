import React from 'react';
import './App.css';
import TabNav from './components/TabNav';
import Tab from './components/Tab';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'Tab 1'
    }
  }
  setSelected = (tab) => {
    this.setState({ selected: tab });
  }
  render() {
    return (
      <div className="App mt-4">
        <TabNav tabs={['Tab 1', 'Tab 2', 'Tab 3']} selected={this.state.selected} setSelected={this.setSelected}>
          <Tab isSelected={this.state.selected === 'Tab 1'}>
            <p>Text for tab 1</p>
          </Tab>
          <Tab isSelected={this.state.selected === 'Tab 2'}>
            <h1>Text for tab 2</h1>
          </Tab>
          <Tab isSelected={this.state.selected === 'Tab 3'}>
            <ul>
              <li>Test 1</li>
              <li>Test 2</li>
              <li>Test 3</li>
            </ul>
          </Tab>
        </TabNav>
      </div>
    );
  }
}
export default App;