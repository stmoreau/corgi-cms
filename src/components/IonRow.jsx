import React from 'react';
import ComponentGenerator from './ComponentFinder';

const IonRow = ({ element }) => {
  const nowrap = element.flexWrap === 'nowrap' ? '' : undefined;
  const wrapReverse = element.flexWrap === 'wrap-reverse' ? '' : undefined;

  const alignItemsStart =
    element.alignItems === 'align-items-start' ? '' : undefined;
  const alignItemsCenter =
    element.alignItems === 'align-items-center' ? '' : undefined;
  const alignItemsEnd =
    element.alignItems === 'align-items-end' ? '' : undefined;
  const alignItemsStretch =
    element.alignItems === 'align-items-stretch' ? '' : undefined;
  const alignItemsBaseline =
    element.alignItems === 'align-items-baseline' ? '' : undefined;

  const justifyContentStart =
    element.justifyContent === 'justify-content-start' ? '' : undefined;
  const justifyContentCenter =
    element.justifyContent === 'justify-content-center' ? '' : undefined;
  const justifyContentEnd =
    element.justifyContent === 'justify-content-end' ? '' : undefined;
  const justifyContentAround =
    element.justifyContent === 'justify-content-around' ? '' : undefined;
  const justifyContentBetween =
    element.justifyContent === 'justify-content-between' ? '' : undefined;
  const classNames = element.rowClasses ? element.rowClasses.join(' ') : ' ';

  return (
    <ion-row
      class={classNames}
      style={element.styles}
      nowrap={nowrap}
      wrap-reverse={wrapReverse}
      align-items-start={alignItemsStart}
      align-items-center={alignItemsCenter}
      align-items-end={alignItemsEnd}
      align-items-stretch={alignItemsStretch}
      align-items-baseline={alignItemsBaseline}
      justify-content-start={justifyContentStart}
      justify-content-center={justifyContentCenter}
      justify-content-end={justifyContentEnd}
      justify-content-around={justifyContentAround}
      justify-content-between={justifyContentBetween}
    >
      {element.content.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )}
    </ion-row>
  );
};

export default IonRow;
