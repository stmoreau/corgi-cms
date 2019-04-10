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
  body: {
    header: {
      items: {
        text: {
          'ui:widget': 'textarea',
        },
        content: {
          items: {
            content: {
              items: {
                content: {
                  items: {
                    text: {
                      'ui:widget': 'textarea',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    content: {
      items: {
        text: {
          'ui:widget': 'textarea',
        },
        content: {
          items: {
            content: {
              items: {
                content: {
                  items: {
                    text: {
                      'ui:widget': 'textarea',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    footer: {
      items: {
        text: {
          'ui:widget': 'textarea',
        },
        content: {
          items: {
            content: {
              items: {
                content: {
                  items: {
                    text: {
                      'ui:widget': 'textarea',
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
      type: 'object',
      title: 'Build the content',
      properties: {
        header: {
          title: 'header content',
          type: 'array',
          items: {
            $ref: '#/definitions/elements',
          },
        },
        content: {
          title: 'main content',
          type: 'array',
          items: {
            $ref: '#/definitions/elements',
          },
        },
        footer: {
          title: 'footer content',
          type: 'array',
          items: {
            $ref: '#/definitions/elements',
          },
        },
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
          enum: ['text', 'a', 'grid', 'img'],
          enumNames: ['Text', 'Anchor', 'Grid', 'Image'],
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
                text: {
                  type: 'string',
                  title: 'A sample text to import',
                },
                styles: {
                  $ref: '#/definitions/style',
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
                styles: {
                  $ref: '#/definitions/style',
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
                styles: {
                  $ref: '#/definitions/style',
                },
                content: {
                  title: 'Row',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      component: {
                        enum: ['row'],
                        default: 'row',
                      },
                      rowClasses: {
                        type: 'array',
                        uniqueItems: true,
                        items: {
                          $ref: '#/definitions/classes',
                        },
                      },
                      flexWrap: {
                        title: 'Flex Wrap',
                        type: 'string',
                        enum: ['nowrap', 'wrap-reverse'],
                        enumNames: ['No Wrap', 'Wrap Reverse'],
                      },
                      alignItems: {
                        title: 'Align Items',
                        type: 'string',
                        enum: [
                          'align-items-start',
                          'align-items-center',
                          'align-items-end',
                          'align-items-stretch',
                          'align-items-baseline',
                        ],
                        enumNames: [
                          'Start',
                          'Center',
                          'End',
                          'Stretch',
                          'Baseline',
                        ],
                      },
                      justifyContent: {
                        title: 'Justify Content',
                        type: 'string',
                        enum: [
                          'justify-content-start',
                          'justify-content-center',
                          'justify-content-end',
                          'justify-content-around',
                          'justify-content-between',
                        ],
                        enumNames: [
                          'Start',
                          'Center',
                          'End',
                          'Around',
                          'Between',
                        ],
                      },
                      styles: {
                        $ref: '#/definitions/style',
                      },
                      content: {
                        title: 'Column',
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            component: {
                              enum: ['col'],
                              default: 'col',
                            },
                            colClasses: {
                              type: 'array',
                              uniqueItems: true,
                              items: {
                                $ref: '#/definitions/classes',
                              },
                            },
                            alignSelf: {
                              title: 'Align Self',
                              type: 'string',
                              enum: [
                                'align-self-start',
                                'align-self-center',
                                'align-self-end',
                                'align-self-stretch',
                                'align-self-baseline',
                              ],
                              default: 'align-self-start',
                            },
                            offset: {
                              description:
                                'The amount to offset the column, in terms of how many columns it should shift to the end of the total available.',
                              title: 'Offset',
                              type: 'string',
                              enum: [
                                '0',
                                '1',
                                '2',
                                '3',
                                '4',
                                '5',
                                '6',
                                '7',
                                '8',
                                '9',
                                '10',
                                '11',
                                '12',
                              ],
                              default: '0',
                            },
                            size: {
                              description:
                                'The size of the column, in terms of how many columns it should take up out of the total available. If "auto" is passed, the column will be the size of its content.',
                              title: 'Size options',
                              type: 'string',
                              enum: [
                                '1',
                                '2',
                                '3',
                                '4',
                                '5',
                                '6',
                                '7',
                                '8',
                                '9',
                                '10',
                                '11',
                                '12',
                              ],
                              default: '12',
                            },
                            content: {
                              title: 'column content',
                              type: 'array',
                              items: {
                                $ref: '#/definitions/elements',
                              },
                            },
                            styles: {
                              $ref: '#/definitions/style',
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
                  enum: ['text'],
                },
                text: {
                  type: 'string',
                  title: 'A sample text to import',
                },
                styles: {
                  $ref: '#/definitions/style',
                },
              },
            },
          ],
        },
      },
    },
    classes: {
      title: 'Add classes',
      type: 'string',
      anyOf: [
        {
          type: 'string',
          enum: ['container'],
          title: 'container(max-width:1160)',
        },
        {
          type: 'string',
          enum: ['container-md'],
          title: 'container-md(max-width:800)',
        },
        {
          type: 'string',
          enum: ['container-sm'],
          title: 'container-sm(max-width:640)',
        },
        {
          type: 'string',
          enum: ['text-left'],
          title: 'text-left',
        },
        {
          type: 'string',
          enum: ['text-center'],
          title: 'text-center',
        },
        {
          type: 'string',
          enum: ['text-right'],
          title: 'text-right',
        },
      ],
    },
    style: {
      type: 'object',
      title: 'Add styles',
      additionalProperties: {
        type: 'string',
      },
    },
  },
};

class AdminForm extends Component {
  handleSubmit = ({ formData }) => {
    this.props.updateFormData(formData);
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
                    Remove {props.title} <FontAwesomeIcon icon="minus-circle" />
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
              Add {props.title} <FontAwesomeIcon icon="plus-circle" />
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
      />
    );
  }
}

export default AdminForm;
