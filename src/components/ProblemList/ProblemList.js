import React from 'react';
import PropTypes from 'prop-types';
import problemShape from '../../helpers/propz/problemShape';

import Problem from '../Problem/Problem';

import './ProblemList.scss';

class ProblemList extends React.Component {
  static propTypes = {
    problems: PropTypes.arrayOf(problemShape.problemShape),
  }

  render() {
    const { problems } = this.props;
    const sortedProblems = problems.filter((prob) => prob.isResolved === true).sort((a, b) => a.id - b.id);
    const buildProblemList = sortedProblems.map((problem) => (
      <Problem key={problem.id} problem={problem} />
    ));

    return (
    <div className="ProblemList">
      <h2 className="header">Check Out the List of Challenges and My Solutions</h2>
      <div className="container d-flex flex-wrap">
        {buildProblemList}
      </div>
    </div>
    );
  }
}

export default ProblemList;
