import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <Tabs value={this.state.value} onChange={this.handleChange}>
        <Tab label="Übersicht" value="a">
          <div>
            <h2 style={styles.headline}></h2>
          </div>
        </Tab>
        <Tab label="Profile" value="b">  
          <div>
            <h2 style={styles.headline}></h2>
          </div>
        </Tab>
        <Tab label="Mitglieder" value="c">
          <div>
            <h2 style={styles.headline}></h2>
          </div>
        </Tab>
        <Tab label="Mitarbeiter" value="d">
          <div>
            <h2 style={styles.headline}></h2>
          </div>
        </Tab>
      </Tabs>
    );
  }
}