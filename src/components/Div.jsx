import React from 'react';
import styled from 'styled-components';

const DivComponent = ({ element }) => {
  const Div = styled.div(element.style);
  return <Div>{element.content}</Div>;
};

export default DivComponent;
