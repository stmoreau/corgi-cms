import React from 'react';
import ComponentGenerator from './ComponentFinder';

const IonRow = ({ element }) => {
  return (
    <ion-row
      nowrap={element.nowrap}
      wrap-reverse={element.wrapReverse}
      align-items-start={element.alignItemsStart}
      align-items-center={element.alignItemsCenter}
      align-items-end={element.alignItemsEnd}
      align-items-stretch={element.alignItemsStretch}
      align-items-baseline={element.alignItemsBaseline}
      justify-content-start={element.justifyContentStart}
      justify-content-center={element.justifyContentCenter}
      justify-content-end={element.justifyContentEnd}
      justify-content-around={element.justifyContentAround}
      justify-content-between={element.justifyContentBetween}
    >
      {element.content.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )}
    </ion-row>
  );
};

export default IonRow;
