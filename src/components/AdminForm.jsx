import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusCircle,
  faMinusCircle,
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlusCircle, faMinusCircle, faArrowCircleUp, faArrowCircleDown);
const uiSchema = {
  'ui:enumDisabled': ['row'],
};
const componentsSchema = {
  title: 'Configure your site',
  type: 'object',
  //   required: ['title'],
  properties: {
    title: {
      type: 'string',
      title: 'Title',
      default: 'Hello world!',
    },
    body: {
      type: 'array',
      title: 'Build the content',
      items: {
        $ref: '#/definitions/elements',
      },
    },
  },
  definitions: {
    elements: {
      type: 'object',
      properties: {
        component: {
          title: 'Choose the component',
          type: 'string',
          enum: ['div', 'text', 'a', 'grid', 'img'],
          enumNames: ['Div', 'TextComponent', 'Anchor', 'Grid', 'Image'],
        },
        text: {
          type: 'string',
          title: 'Text',
          description: 'A sample text to import',
        },
      },
      dependencies: {
        component: {
          oneOf: [
            {
              properties: {
                component: {
                  enum: ['a'],
                },
                href: {
                  type: 'string',
                  title: 'Href',
                  description: 'path to the link',
                },
              },
              required: ['href'],
            },
            {
              properties: {
                component: {
                  enum: ['img'],
                },
                file: {
                  type: 'string',
                  format: 'data-url',
                  title: 'Single Image',
                },
              },
            },
            {
              properties: {
                component: {
                  enum: ['grid'],
                },
                file: {
                  type: 'string',
                  format: 'data-url',
                  title: 'Add background image',
                },
                content: {
                  title: 'Add row',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      component: {
                        enum: ['row'],
                        default: 'row',
                      },
                      flexWrap: {
                        title: 'Flex-wrap',
                        type: 'string',
                        enum: ['nowrap', 'wrap', 'wrap-reverse'],
                        enumNames: ['Nowrap(Default)', 'Wrap', 'Wrap-reverse'],
                      },
                      alignItems: {
                        title: 'Align-Items',
                        type: 'string',
                        enum: [
                          'flex-start',
                          'flex-end',
                          'center',
                          'baseline',
                          'stretch',
                        ],
                        enumNames: [
                          'Flex-start',
                          'Flex-end',
                          'Center',
                          'Baseline',
                          'Stretch',
                        ],
                      },
                      justifyContent: {
                        title: 'Justify-content',
                        type: 'string',
                        enum: [
                          'flex-start',
                          'flex-end',
                          'center',
                          'space-between',
                          'space-around',
                        ],
                        enumNames: [
                          'Flex-start',
                          'Flex-end',
                          'Center',
                          'Space-between',
                          'Space-around',
                        ],
                      },
                      content: {
                        title: 'Add column',
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            component: {
                              enum: ['col'],
                              default: 'col',
                            },
                            alignSelf: {
                              title: 'Align-Self',
                              type: 'string',
                              enum: [
                                'align-self-center',
                                'align-self-start',
                                'align-self-end',
                                'align-self-stretch',
                                'align-self-baseline',
                              ],
                              default: 'align-self-center',
                            },
                            offset: {
                              description:
                                'The amount to offset the column, in terms of how many columns it should shift to the end of the total available.',
                              title: 'Offset',
                              type: 'string',
                              enum: [
                                'offset',
                                'offset-lg',
                                'offset-sm',
                                'offset-xl',
                                'offset-xs',
                              ],
                              default: 'offset',
                            },
                            pull: {
                              description:
                                'The amount to pull the column, in terms of how many columns it should shift to the start of the total available.',
                              title: 'Pull options',
                              type: 'string',
                              enum: [
                                'pull',
                                'pull-lg',
                                'pull-md',
                                'pull-sm',
                                'pull-xl',
                                'pull-xs',
                              ],
                              default: 'pull',
                            },
                            push: {
                              title: 'Push options',
                              type: 'string',
                              enum: [
                                'push',
                                'push-lg',
                                'push-md',
                                'push-sm',
                                'push-xl',
                                'push-xs',
                              ],
                              default: 'push',
                            },
                            size: {
                              description:
                                'The size of the column, in terms of how many columns it should take up out of the total available. If "auto" is passed, the column will be the size of its content.',
                              title: 'Size options',
                              type: 'string',
                              enum: [
                                'size',
                                'size-lg',
                                'size-md',
                                'size-sm',
                                'size-xl',
                                'size-xs',
                              ],
                              default: 'size',
                            },
                            content: {
                              title: 'Add column content',
                              type: 'array',
                              items: {
                                $ref: '#/definitions/elements',
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            {
              properties: {
                component: {
                  enum: ['div', 'text'],
                },
              },
            },
          ],
        },
      },
    },
  },
};

class AdminForm extends Component {
  handleSubmit = ({ formData }) => {
    this.props.updateFormData(formData);
    console.log(this.props.json);
  };
  handleChange = ({ formData }) => {
    console.log(formData);
  };
  arrayFieldTemplate = props => {
    const rowStyle = {
      border: '1px solid red',
      padding: '10px',
    };
    const rowStyle2 = {
      border: '1px solid blue',
      padding: '10px',
    };
    return (
      <div className="row" style={rowStyle}>
        <div className="col col-sm-12">
          {props.title}
          <br />
          {props.items.map((element, index) => (
            <div key={index} className="row" style={rowStyle2}>
              <div className="col-sm-12 text-right">
                {element.hasRemove && (
                  <button
                    className="btn btn-danger mr-2"
                    type="button"
                    onClick={element.onDropIndexClick(index)}
                  >
                    <FontAwesomeIcon icon="minus-circle" />
                  </button>
                )}
                {element.hasMoveUp && (
                  <button
                    className="btn btn-info mr-2"
                    onClick={element.onReorderClick(index, index - 1)}
                  >
                    <FontAwesomeIcon icon="arrow-circle-up" />
                  </button>
                )}
                {element.hasMoveDown && (
                  <button
                    className="btn btn-info"
                    onClick={element.onReorderClick(index, index + 1)}
                  >
                    <FontAwesomeIcon icon="arrow-circle-down" />
                  </button>
                )}
              </div>
              <div className="col col-sm-12">{element.children}</div>
            </div>
          ))}
          {props.canAdd && (
            <button
              className="btn btn-info"
              type="button"
              onClick={props.onAddClick}
            >
              <FontAwesomeIcon icon="plus-circle" />
            </button>
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <Form
        className="admin-form"
        uiSchema={uiSchema}
        schema={componentsSchema}
        formData={this.props.formData}
        ArrayFieldTemplate={this.arrayFieldTemplate}
        onSubmit={this.handleSubmit}
        onChange={this.handleChange}
      />
    );
  }
}

export default AdminForm;
