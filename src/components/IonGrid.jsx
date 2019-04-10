import React from 'react';
import ComponentGenerator from './ComponentFinder';

const IonGrid = ({ element }) => {
  const backgroundImage = {
    backgroundImage: `url(${element.file})`,
    backgroundColor: 'transparent',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <ion-grid style={element.styles}>
      {element.file ? (
        <div style={backgroundImage}>
          {element.content.map((el, i) =>
            el.component ? <ComponentGenerator element={el} key={i} /> : ''
          )}
        </div>
      ) : (
        element.content.map((el, i) =>
          el.component ? <ComponentGenerator element={el} key={i} /> : ''
        )
      )}
    </ion-grid>
  );
};

export default IonGrid;
