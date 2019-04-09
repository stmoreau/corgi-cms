import React from 'react';

const IonAnchor = ({ element }) => {
  return (
    // color options that can be passed as style are "primary", "secondary", "tertiary", "success", "warning", "danger", "light", "medium", and "dark
    <ion-anchor color="primary" href={element.href}>
      {element.text}
    </ion-anchor>
  );
};

export default IonAnchor;
