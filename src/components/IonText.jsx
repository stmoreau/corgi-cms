import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const IonText = ({ element }) => {
  // color options that can be passed as style are "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark
  return <ion-text color="danger">{ReactHtmlParser(element.text)}</ion-text>;
};

export default IonText;
