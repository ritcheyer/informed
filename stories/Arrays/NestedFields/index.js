import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';
import {
  Form,
  Input,
  ArrayField,
  Debug,
  useArrayFieldItemState
} from '../../../src';

const initialValues = {
  friends: [
    {
      name: 'Joe',
      age: 27
    },
    {
      name: 'Jane',
      age: 22
    }
  ]
};

const NestedForm = () => (
  <div>
    <Form initialValues={initialValues}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, marginRight: '2rem' }}>
          <ArrayField name="friends">
            {({ add }) => {
              return (
                <>
                  <button
                    onClick={() => {
                      add();
                    }}
                    type="button">
                    Add
                  </button>
                  <ArrayField.Items>
                    {({ remove, name }) => (
                      <label>
                        <h5>{name}</h5>
                        <Input name="name" label="Name" required />
                        <Input name="age" label="Age" type="number" />
                        <button type="button" onClick={remove}>
                          Remove
                        </button>
                      </label>
                    )}
                  </ArrayField.Items>
                </>
              );
            }}
          </ArrayField>
        </div>
        <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
          <Debug values />
        </div>
      </div>
    </Form>
  </div>
);

export default withDocs(readme, NestedForm);
