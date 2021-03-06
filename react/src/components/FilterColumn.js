import React, { Component } from 'react'

import { Checkbox } from "antd";
import "./FilterColumn.css"

export class FilterColumn extends Component {
  render() {
    return (
      <div className="filter-column__container">
        <p>Filter</p>
        <Checkbox.Group>
          { this.props.filterType.map(value => {
              return (
                <div key={`checkbox${Math.random()}`}>
                  <Checkbox  value={value}>By {value}</Checkbox>
                  <br/>
                </div>
              );
            })
          }
        </Checkbox.Group>
      </div>
    )
  }
}

export default FilterColumn
