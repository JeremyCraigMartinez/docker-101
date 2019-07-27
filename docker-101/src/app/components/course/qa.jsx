// @flow strict

import React from 'react'; // $FlowFixMe
import { Link, withRouter } from 'react-router-dom';

type Props = { history: { goBack: () => void } };

const Qa = ({ history }: Props) => (
  <div>
    <h1>Q & A</h1>
    <h3>Students and professors can use this platform for asking and answers questions about the course</h3>
    <Link onClick={() => history.goBack()}>Go back</Link>
  </div>
);

export default withRouter(Qa);
