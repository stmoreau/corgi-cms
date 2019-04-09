import React, { Component } from 'react';
import ComponentGenerator from '../components/ComponentFinder';

class Preview extends Component {
  componentDidMount() {
    const { json } = this.props;
    if (json && json.title) {
      document.title = `Corgi Preview: ${json.title}`;
    }
    console.log(json);
  }

  render() {
    const { json } = this.props;
    return json && json.body ? (
      json.body.map((el, i) =>
        el.component ? <ComponentGenerator element={el} key={i} /> : ''
      )
    ) : (
      <h1>Nothing to preview yet</h1>
    );
  }
}

export default Preview;
