import React from 'react';
import ComponentGenerator from './ComponentFinder';
const IonHeader = ({ element }) => {
  return (
    <ion-header style={element.styles}>
      {element.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )}
    </ion-header>
  );
};

export default IonHeader;
