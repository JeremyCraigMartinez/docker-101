// @flow strict

import React from 'react'; // $FlowFixMe
import { Link } from 'react-router-dom'; // $FlowFixMe
import { connect } from 'react-redux';

import md from '../../../helpers/markdown';
import type { State } from '../../../reducers/types/reducer-states';

import containers from '../../containers/markdown/assignment';
import images from '../../images/markdown/assignment';
import volume from '../../volume/markdown/assignment';
import network from '../../network/markdown/assignment';
import services from '../../services/markdown/assignment';

type StateProps = {
  week: number | null,
  assignmentDescription: (week: number | null) => string, // $FlowFixMe
  fileInput: any, // $FlowFixMe
  handleSubmit: (any, any) => void,
};
const Assignment = ({ week, assignmentDescription, fileInput, handleSubmit }: StateProps) => (
  <div>
    <h3><Link to='./pre/'>Assignment Prep</Link>{' > Assignment > '}<Link to='./post/'>Assignment Recap</Link></h3>

    <div dangerouslySetInnerHTML={md.render(assignmentDescription(week))} />

    <form onSubmit={handleSubmit.bind(null, fileInput)}>
      <label>
        Upload file:
        <input type='file' ref={fileInput} />
      </label>
      <br />
      <button type='submit'>Submit</button>
    </form>
  </div>
);

const mapStateToProps = (state: State): StateProps => {
  let assignmentDescription = () => '';
  switch (state.base.topic) {
    case 'containers':
      assignmentDescription = containers;
      break;
    case 'images':
      assignmentDescription = images;
      break;
    case 'network':
      assignmentDescription = network;
      break;
    case 'services':
      assignmentDescription = services;
      break;
    case 'volume':
      assignmentDescription = volume;
      break;
    default:
      // do nothing
  }
  return {
    week: state.base.subject != null ? state.base.subject.week : null,
    assignmentDescription,
    fileInput: React.createRef(),
    handleSubmit: (fileInput, event) => {
      if (fileInput.current.files[0] == null) return;
      event.preventDefault();
      alert(`Assignment submitted - ${fileInput.current.files[0].name}`);
    },
  };
};

export default connect<StateProps, {||}, StateProps, {||}, _, _>(mapStateToProps)(Assignment);
