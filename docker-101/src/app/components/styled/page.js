// @flow strict

import styled from 'styled-components';

export const LectureTable = styled.table`
  td:nth-child(1) {
    min-width: 250px;
    border-top: 1px solid grey;
  }

  td:nth-child(3) {
    * { margin-left: 25px; }
  }
`;
