﻿import React, { Component } from "react";
import { Icon, Modal, Button, Table, Form } from "semantic-ui-react";
import Pagination from "./common/Pagination";
import Axios from "axios";

var dummyData = [
  {
    id: 1,
    name: "Timothy Young",
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
  },
  {
    id: 5,
    name: "Tim",
    address: "36 Murdoch St"
  },
  {
    id: 6,
    name: "Ya",
    address: "37 Murdoch St"
  },
  {
    id: 7,
    name: "Yang",
    address: "38 Murdoch St"
  },
  {
    id: 8,
    name: "Wen",
    address: "39 Murdoch St"
  },
  {
    id: 9,
    name: "Tim",
    address: "36 Murdoch St"
  },
  {
    id: 10,
    name: "Ya",
    address: "37 Murdoch St"
  },
  {
    id: 11,
    name: "Yang",
    address: "38 Murdoch St"
  },
  {
    id: 12,
    name: "Wen",
    address: "39 Murdoch St"
  }
];

const apiEndPoint = "api/Customers";

class Customer extends Component {
  state = {
    customers: [],
    pageSize: 5,
    currentPage: 1,
    newCustomer: { name: "", address: "" }
  };

  async componentDidMount() {
      const { data: customers } = await Axios.get(apiEndPoint);
      this.setState({ customers });
  }

    handleNewCustomer = () => {
        const newCustomer = { name: "", address: "" };
        this.setState({ newCustomer });
    }

  handleCreate = async () => {
    const { newCustomer } = this.state;
    const { data: customer } = await Axios.post(apiEndPoint, newCustomer);

    const customers = [customer, ...this.state.customers];
    this.setState({ customers });
    };

    handleEdit = customer => {
        const { name, address } = customer;
        const newCustomer = { name, address }
        this.setState({ newCustomer });
    }

    handleUpdate = async customer => {
        const { newCustomer } = this.state;
        newCustomer.id = customer.id;
        await Axios.put(apiEndPoint + "/" + customer.id, newCustomer)

        const customers = [...this.state.customers];
        const i = customers.indexOf(customer);
        customers[i] = newCustomer
        this.setState({ customers });
    };

    handleDelete = async customer => {
        const { data: deletedCustomer } = await Axios.delete(apiEndPoint + "/" + customer.id)

        const customers = this.state.customers.filter(c => c.id !== deletedCustomer.id);
    this.setState({ customers });
  };

  handleInputChange = ({ currentTarget: input }) => {
    const newCustomer = { ...this.state.newCustomer };
    newCustomer[input.name] = input.value;
    this.setState({ newCustomer });
    };

  handlePageChange = pageNumber => {
    this.setState({ currentPage: pageNumber });
  };

  renderCustomersTable() {
    const { customers } = this.state;
    const { length: customersCount } = customers;
      const { pageSize, currentPage } = this.state;
      const { name, address } = this.state.newCustomer;

    if (customersCount === 0) return <h3>Opps, we don't have any customer!</h3>;

    const showCustomers = customers.filter(
      c =>
        customers.indexOf(c) >= (currentPage - 1) * pageSize &&
        customers.indexOf(c) < currentPage * pageSize
      );

      

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
          {showCustomers.map(customer => (
            <Table.Row key={customer.id}>
              <Table.Cell>{customer.name}</Table.Cell>
              <Table.Cell>{customer.address}</Table.Cell>
              <Table.Cell>
                <Modal
                  dimmer="blurring"
                  closeOnDimmerClick={false}
                          trigger={
                              <Button color="yellow" onClick={() => this.handleEdit(customer)}>
                      <Icon name="edit" />EDIT
                    </Button>
                  }
                  header="Update Customer Info"
                  content={
                    <Form style={{ margin: 30 }}>
                          <Form.Input required label="NAME" name="name"
                              value={name}
                              onChange={ this.handleInputChange} />
                          <Form.Input required label="ADDRESS" name="address"
                              value={address}
                              onChange={ this.handleInputChange} />
                    </Form>
                  }
                  actions={[
                    "Cancel",
                    <Button
                      key={"edit"}
                      onClick={() => this.handleUpdate(customer)}
                      positive
                    >
                      Update
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

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Pagination
                itemsCount={customersCount}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }

  render() {
    const { name, address } = this.state.newCustomer;

    return (
      <React.Fragment>
        <Modal
          dimmer="blurring"
          closeOnDimmerClick={false}
                trigger={
                    <Button primary onClick={this.handleNewCustomer}>
              <Icon name="user" />New Customer
            </Button>
          }
          header="Create New Customer"
          content={
            <Form style={{ margin: 30 }}>
              <Form.Input
                required
                label="NAME"
                name="name"
                value={name}
                onChange={this.handleInputChange}
              />
              <Form.Input
                required
                label="ADDRESS"
                name="address"
                value={address}
                onChange={this.handleInputChange}
              />
            </Form>
          }
          actions={[
            "Cancel",
            <Button key={"create"} onClick={() => this.handleCreate()} positive>
              Create
            </Button>
          ]}
        />
        {this.renderCustomersTable()}
      </React.Fragment>
    );
  }
}

export default Customer;
