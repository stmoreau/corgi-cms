import React from 'react';
import ComponentGenerator from './ComponentFinder';
const IonFooter = ({ element }) => {
  return (
    <ion-footer style={element.styles}>
      {element.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )}
    </ion-footer>
  );
};

export default IonFooter;
