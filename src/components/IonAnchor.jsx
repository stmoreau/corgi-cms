import React from 'react';

const IonAnchor = ({ element }) => {
  return (
    <ion-anchor style={element.styles} href={element.href}>
      {element.text}
    </ion-anchor>
  );
};

export default IonAnchor;
