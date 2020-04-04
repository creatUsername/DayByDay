import React, { Component } from 'react'

class ProductCategoryRow extends Component {
  render() {
    const { category } = this.props
    return (
      <tr style={{ textAlign: 'left' }}>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends Component {
  render() {
    const { product } = this.props
    const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class SearchBar extends Component {
  render() {
    const { filterText, isStockOnly, handleFilterChange, handleStockChange } = this.props
    return (
      <>
        <input
          placeholder="Search..."
          value={filterText}
          autoFocus
          onChange={handleFilterChange}
        />
        <br />
        <input
          type="checkbox"
          checked={isStockOnly}
          onChange={handleStockChange}
        />
        Only show products in stock
        <br />
      </>
    )
  }
}

class ProductTable extends Component {
  render() {
    const { filterText, isStockOnly, list } = this.props
    const rows = []
    let lastCategory = null
    list.forEach((product) => {
      if (product.name.indexOf(filterText) === -1) {
        return
      }
      if (isStockOnly && !product.stocked) {
        return
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        )
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })
    return (
      <table style={{ margin: '0 auto', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}


class FilterableProductTable extends Component {
  state = {
    filterText: '',
    isStockOnly: false
  }

  handleFilterChange = e => {
    this.setState({
      filterText: e.target.value
    })
  }

  handleStockChange = e => {
    this.setState({
      isStockOnly: e.target.checked
    })
  }

  render() {
    const { list } = this.props
    const { filterText, isStockOnly } = this.state
    return (
      <div>
        <SearchBar
          filterText={filterText}
          handleFilterChange={this.handleFilterChange}
          isStockOnly={isStockOnly}
          handleStockChange={this.handleStockChange}
        />
        <ProductTable
          filterText={filterText}
          isStockOnly={isStockOnly}
          list={list}
        />
      </div>
    )
  }
}

export default class Demo10 extends Component {
  state = {
    productList: [
      { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
      { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
      { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
      { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
      { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
      { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
    ]
  }

  render() {
    return (
      <>
        <FilterableProductTable list={this.state.productList} />
      </>
    )
  }
}