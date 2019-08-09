import React, { Component } from "react";
import { Icon, Label, Button, Table } from "semantic-ui-react";

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

    handleEdit = customer => {
    }

    handleDelete = customer => {
        const remainingCustomers = this.state.customers.filter(c => c.id !== customer.id)
        this.setState({ customers: remainingCustomers })
    }


    render() {
        if (this.state.customers.length === 0) return <h3>Opps, we don't have any customer!</h3>

    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
                {this.state.customers.map(customer => (
                    <Table.Row key={customer.id}>
              <Table.Cell>{customer.name}</Table.Cell>
                  <Table.Cell>{customer.address}</Table.Cell>
                  <Table.Cell>
                      <Button onClick={() => this.handleEdit(customer) } color="yellow">
                          <Icon name='edit' />EDIT
                          </Button>
                  </Table.Cell>
                  <Table.Cell>
                      <Button onClick={() => this.handleDelete(customer)} negative>
                          <Icon name='trash alternate' />DELETE
                      </Button>
                  </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default Customer;
