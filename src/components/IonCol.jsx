import React from 'react';
import ComponentGenerator from './ComponentFinder';

const IonCol = ({ element }) => {
  return (
    <ion-col
      align-self-start={element.alignSelfStart}
      align-self-center={element.alignSelfCenter}
      align-self-end={element.alignSelfEnd}
      align-self-stretch={element.alignSelfStretch}
      align-self-baseline={element.alignSelfBaseline}
      offset={element.offset}
      offset-lg={element.offsetLg}
      offset-md={element.offsetMd}
      offset-sm={element.offsetSm}
      offset-xl={element.offsetXl}
      offset-xs={element.offsetXs}
      pull={element.pull}
      pull-lg={element.pullLg}
      pull-md={element.pullMd}
      pull-sm={element.pullSm}
      pull-xl={element.pullXl}
      pull-xs={element.pullXs}
      push={element.push}
      push-lg={element.pushLg}
      push-md={element.pushMd}
      push-sm={element.pushSm}
      push-xl={element.pushXl}
      push-xs={element.pushXs}
      size={element.size}
      size-lg={element.sizeLg}
      size-md={element.sizeMd}
      size-sm={element.sizeSm}
      size-xl={element.sizeXl}
      size-xs={element.sizeXs}
    >
      {element.content.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )}
    </ion-col>
  );
};

export default IonCol;
