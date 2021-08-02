import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllProducts,
} from "../actions/items";
import {
  fetchAllCategories,
} from "../actions/categories";


class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.refreshData = this.refreshData.bind(this);


    this.state = {
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchAllCategories();
  }
  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle,
    });
  }

  refreshData() {
    this.setState({
      currentIndex: -1,
    });
  }
 render() {
    const { searchTitle, currentIndex } = this.state;
    debugger
    const { items } = this.props;
    const { categories } = this.props;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.findByTitle}
              >
                Search
              </button>
            </div>
            
          </div>
        </div>
        <div className="col-md-6">
          <h4>Items List</h4>

          <ul className="list-group">
            {items &&
              items.map((item, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  key={index}
                >
                  {item.name}
                </li>
              ))}
          </ul>
          <div className="form-group">
              <select   >
                {categories && categories.map((category) => <option key={category.id} value={category.id}
              
                >{category.name}</option>)}
              </select>
            </div>
          
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  debugger
  return {

    items: state.items,
    categories: state.categories
  };
};

export default connect(mapStateToProps, {
  fetchAllProducts,
  fetchAllCategories,
})(ItemsList);
