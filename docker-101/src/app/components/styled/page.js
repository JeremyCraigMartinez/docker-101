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

export const Footer = styled.div`
  height: 200px;
  background-color: #ddd;
  margin-top: 50px;
`;

export const Questionnaire = styled.div`
  textarea {
    width: 80%;
    height: 8em;
  }
`;
