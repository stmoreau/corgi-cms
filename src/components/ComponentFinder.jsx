import React from 'react';
import Div from './Div';
import IonText from './IonText';
import IonAnchor from './IonAnchor';
import IonGrid from './IonGrid';
import IonRow from './IonRow';
import IonCol from './IonCol';

const ComponentFinder = ({ element, i }) => {
  if (element && element.component) {
    if (element.component === 'div') {
      return <Div element={element} key={i} />;
    } else if (element.component === 'p') {
      return <IonText element={element} key={i} />;
    } else if (element.component === 'a') {
      return <IonAnchor element={element} key={i} />;
    } else if (element.component === 'grid') {
      return <IonGrid element={element} key={i} />;
    } else if (element.component === 'row') {
      return <IonRow element={element} key={i} />;
    } else if (element.component === 'col') {
      return <IonCol element={element} key={i} />;
    }
  }
};

export default ComponentFinder;
