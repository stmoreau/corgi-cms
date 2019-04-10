import React from 'react';
import IonHeader from './IonHeader';
import IonText from './IonText';
import IonAnchor from './IonAnchor';
import IonGrid from './IonGrid';
import IonRow from './IonRow';
import IonCol from './IonCol';
import SimpleImg from './SimpleImg';

const ComponentFinder = ({ element, i }) => {
  if (element && element.component) {
    if (element.component === 'img') {
      return <SimpleImg element={element} key={i} />;
    } else if (element.component === 'header') {
      return <IonHeader element={element} key={i} />;
    } else if (element.component === 'text') {
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
