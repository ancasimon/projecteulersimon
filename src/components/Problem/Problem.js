import React from 'react';
import PropTypes from 'prop-types';
import problemShape from '../../helpers/propz/problemShape';

import './Problem.scss';

class Problem extends React.Component {
  static propTypes = {
    problem: problemShape.problemShape,
  }

  render() {
    const { problem } = this.props;

    return (
      <div className="card Problem">
        <div className="card-body">
          <h5 className="card-title">{problem.name}</h5>
          <p className="card-text">{problem.description}</p>
          <a className="card-link Link">See the answer</a>
          <a href={problem.solution} className="card-link Link">See the solution</a>
        </div>
      </div>
    );
  }
}

export default Problem;
