import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import fileDownload from 'js-file-download';
import Admin from './pages/Admin';
import Preview from './pages/Preview';
import AppNavigationButton from './components/AppNavigationButton';
import UploadFile from './components/UploadFile';
import Welcome from './components/Welcome';
import logo from './logo.svg';

function withProps(Component, props) {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />;
  };
}

class App extends Component {
  state = {
    showNav: true,
    json: JSON.parse(localStorage.getItem('content-json')) || {},
  };

  updateStateJson = formData => {
    this.setState({ json: formData }, () => {
      localStorage.setItem('content-json', JSON.stringify(formData));
    });
  };

  exportHtml = () => {
    this.setState({ showNav: false }, () => {
      fileDownload(document.documentElement.outerHTML, 'index.html');
      this.setState({ showNav: true });
    });
  };

  exportJson = () => {
    fileDownload(JSON.stringify(this.state.json), 'html-information.json');
  };

  onDrop = acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      const binaryStr = reader.result;

      this.setState({ json: JSON.parse(binaryStr) }, () => {
        localStorage.setItem('content-json', binaryStr);
      });
    };

    acceptedFiles.forEach(file => reader.readAsBinaryString(file));
  };

  render() {
    const { showNav } = this.state;
    return (
      <Router basename="/">
        <div>
          {showNav ? (
            <nav
              id="navbar"
              className="navbar navbar-dark bg-dark navbar-expand-lg sticky-top"
            >
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link" to="/">
                  <img
                    style={{
                      width: '26px',
                    }}
                    src={logo}
                    alt="logo"
                  />
                </NavLink>
                <NavLink className="nav-item nav-link" to="/admin">
                  Admin
                </NavLink>
                <NavLink className="nav-item nav-link" to="/preview">
                  Preview
                </NavLink>

                <AppNavigationButton
                  text="Export HTML"
                  type="primary"
                  handleClick={this.exportHtml}
                />

                <AppNavigationButton
                  text="Export JSON"
                  type="primary"
                  handleClick={this.exportJson}
                />

                <UploadFile onDrop={this.onDrop} />
              </div>
            </nav>
          ) : (
            ''
          )}
          <Route exact path="/" component={Welcome} />

          <Route
            exact
            path="/preview"
            component={withProps(Preview, { json: this.state.json })}
          />
          <Route
            exact
            path="/admin"
            component={withProps(Admin, {
              json: this.state.json,
              updateStateJson: this.updateStateJson,
            })}
          />
        </div>
      </Router>
    );
  }
}

export default App;
