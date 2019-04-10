import React from 'react';
import ComponentGenerator from './ComponentFinder';

const IonCol = ({ element }) => {
  const alignSelfStart =
    element.alignSelf === 'align-self-start' ? '' : undefined;
  const alignSelfCenter =
    element.alignSelf === 'align-self-center' ? '' : undefined;
  const alignSelfEnd = element.alignSelf === 'align-self-end' ? '' : undefined;
  const alignSelfStretch =
    element.alignSelf === 'align-self-stretch' ? '' : undefined;
  const alignSelfBaseline =
    element.alignSelf === 'align-self-baseline' ? '' : undefined;
  const classNames = element.colClasses ? element.colClasses.join(' ') : ' ';
  return (
    <ion-col
      class={classNames}
      style={element.styles}
      align-self-start={alignSelfStart}
      align-self-center={alignSelfCenter}
      align-self-end={alignSelfEnd}
      align-self-stretch={alignSelfStretch}
      align-self-baseline={alignSelfBaseline}
      offset={element.offset}
      size={element.size}
    >
      {element.content.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )}
    </ion-col>
  );
};

export default IonCol;
