import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const IonText = ({ element }) => {
  return (
    <ion-text style={element.styles}>{ReactHtmlParser(element.text)}</ion-text>
  );
};

export default IonText;
