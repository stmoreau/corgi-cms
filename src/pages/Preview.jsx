import React, { Component } from 'react';
import ComponentGenerator from '../components/ComponentFinder';
import IonHeader from '../components/IonHeader';
import IonFooter from '../components/IonFooter';

class Preview extends Component {
  componentDidMount() {
    const { json } = this.props;
    if (json && json.title) {
      document.title = `Corgi Preview: ${json.title}`;
    }
  }

  header = json => {
    return <IonHeader element={json.body.header} />;
  };

  content = json => {
    return (
      <ion-content>
        {json.body.content.map((el, i) =>
          el.component ? <ComponentGenerator element={el} key={i} /> : ''
        )}
      </ion-content>
    );
  };

  footer = json => {
    return <IonFooter element={json.body.footer} />;
  };

  render() {
    const { json } = this.props;
    return json && json.body ? (
      <ion-page>
        {json.body.header ? this.header(json) : ''}
        {json.body.content ? this.content(json) : ''}
        {json.body.footer ? this.footer(json) : ''}
      </ion-page>
    ) : (
      <h1>Nothing to preview yet</h1>
    );
  }
}

export default Preview;
