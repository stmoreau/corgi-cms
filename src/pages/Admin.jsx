import React, { Component } from 'react';
import AdminForm from '../components/AdminForm';

class Admin extends Component {
  componentDidMount() {
    document.title = `Corgi Admin`;
  }

  render() {
    const { json, updateStateJson } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">Welcome to Corgi CMS</h1>
        <AdminForm formData={json} updateFormData={updateStateJson} />
      </div>
    );
  }
}

export default Admin;
