import React, { Component } from "react";
import { Icon, Modal, Button, Table, Form } from "semantic-ui-react";

var dummyData = [
  {
    id: 1,
    name: "Tim",
    address: "36 Murdoch St"
  },
  {
    id: 2,
    name: "Ya",
    address: "37 Murdoch St"
  },
  {
    id: 3,
    name: "Yang",
    address: "38 Murdoch St"
  },
  {
    id: 4,
    name: "Wen",
    address: "39 Murdoch St"
  }
];

class Customer extends Component {
  state = {
    customers: dummyData
  };

  handleEdit = customer => {};

  handleDelete = customer => {
    const customers = this.state.customers.filter(
      c => c.id !== customer.id
    );
    this.setState({ customers });
  };

  render() {
    if (this.state.customers.length === 0)
      return <h3>Opps, we don't have any customer!</h3>;

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.state.customers.map(customer => (
            <Table.Row key={customer.id}>
              <Table.Cell>{customer.name}</Table.Cell>
              <Table.Cell>{customer.address}</Table.Cell>
              <Table.Cell>
                <Modal
                  dimmer="blurring"
                  closeOnDimmerClick={false}
                  trigger={
                    <Button color="yellow">
                      <Icon name="edit" />EDIT
                    </Button>
                  }
                  header="Update Customer Info"
                  content={
                    <Form style={{ margin: 30 }}>
                      <Form.Input required label="Name" />
                      <Form.Input required label="Address" />
                    </Form>
                  }
                  actions={[
                    "Cancel",
                    <Button onClick={() => this.handleEdit(customer)} positive>
                      Done
                    </Button>
                  ]}
                />
              </Table.Cell>
              <Table.Cell>
                <Modal
                  dimmer="blurring"
                  trigger={
                    <Button negative>
                      <Icon name="trash alternate" />DELETE
                    </Button>
                  }
                  header="Warning"
                  content="This action will permanently erase this customer from our database. Are you sure?"
                  actions={[
                    "Cancel",
                    <Button
                      onClick={() => this.handleDelete(customer)}
                      negative
                    >
                      Delete
                    </Button>
                  ]}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default Customer;
