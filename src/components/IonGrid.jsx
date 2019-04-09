import React from 'react';
import ComponentGenerator from './ComponentFinder';

const IonGrid = ({ element }) => {
  return (
    <ion-grid>
      {element.content.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )}
    </ion-grid>
  );
};

export default IonGrid;
