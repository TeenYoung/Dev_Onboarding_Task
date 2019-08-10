import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

export default class MenuHeader extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu>
                <Menu.Item header>React</Menu.Item>
                <Menu.Item
                    name="customers"
                    active={activeItem === "customers"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name="products"
                    active={activeItem === "products"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name="stores"
                    active={activeItem === "stores"}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name="sales"
                    active={activeItem === "sales"}
                    onClick={this.handleItemClick}
                />
            </Menu>
        );
    }
}