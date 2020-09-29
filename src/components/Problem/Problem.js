import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

import PropTypes from 'prop-types';

import problemShape from '../../helpers/propz/problemShape';

import './Problem.scss';

class Problem extends React.Component {
  state = {
    isOpen: false,
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  static propTypes = {
    problem: problemShape.problemShape,
  }

  render() {
    const { isOpen } = this.state;
    const { problem } = this.props;

    return (
      <div className="card Problem">
        <div className="card-body">
          <h5 className="card-title">{problem.name}</h5>
          <p className="card-text">{problem.description}</p>

          <div>
            <Button className="col-sm-6 m-1 mx-auto" color="secondary" onClick={this.toggle} >Answer</Button>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>{problem.answer}</CardBody>
              </Card>
            </Collapse>
          </div>

          <div>
            <Button className="col-sm-6 m-1 mx-auto" color="secondary" href={problem.solution} target="_blank">Solution</Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Problem;
