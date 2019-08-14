import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import PropTypes from 'prop-types';

const Pagination = props => {
    const { itemsCount, pageSize, onPageChange, currentPage } = props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
  //if (pagesCount <= 1) return null;

  var pageNumbers = [];
  for (var i = 1; i < pagesCount + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <Menu floated="right" pagination>
          <Menu.Item as="a" icon active={currentPage === 1}>
              <Icon name="chevron left" />
      </Menu.Item>
      {pageNumbers.map(pageNumber => (
        <Menu.Item
              key={pageNumber}
              as="a"
              onClick={() => onPageChange(pageNumber)}
              active={pageNumber === currentPage}
        >
          {pageNumber}
        </Menu.Item>
      ))}
          <Menu.Item as="a" icon active={currentPage === pagesCount}>
        <Icon name="chevron right" />
      </Menu.Item>
    </Menu>
  );
};

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination;
