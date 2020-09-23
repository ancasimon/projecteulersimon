import React from 'react';
import './App.scss';
import problemsData from '../helpers/data/problemsData';

import ProblemList from '../components/ProblemList/ProblemList';

class App extends React.Component {
  state = {
    problems: [],
  }

  componentDidMount() {
    const problems = problemsData.getProblems();
    this.setState({
      problems,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Project Euler</h1>
        <div className="problemList">
          <ProblemList problems={this.state.problems} />
        </div>
      </div>
    );
  }
}

export default App;
