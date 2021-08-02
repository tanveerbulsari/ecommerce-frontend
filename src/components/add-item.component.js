import React, { Component } from "react";
import { connect } from "react-redux";
import { createItem } from "../actions/items";
import ItemsDataService from "../services/items.service";
class AddItem extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.newItem = this.newItem.bind(this);

    this.state = {
      id: null,
      title: "",
      description: "",
      categoryId:"",
      categories:[]
    };
  }
  componentDidMount() {
    this.getCategories();
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeCategory(e){
    this.setState({
      categoryId: e.target.value,
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  saveItem() {
    const { name, description, categoryId } = this.state;
  
    this.props
      .createItem(name, description, categoryId)
      .then((data) => {
        debugger
        this.setState({
          id: data.body.id,
          name: data.body.name,
          description: data.body.description
        });
        console.log(data);
        alert("Product Added Successfully")
        this.newItem();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newItem() {
    this.setState({
      name: "",
      description: "",
      categoryId:""
    });
  }

  getCategories() {
    ItemsDataService.getCategories()
      .then((response) => {
        debugger
        this.setState({
          categories: response.data.body.categories,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newItem}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <div className="form-group">
              <select   onChange={this.onChangeCategory}>
                {this.state.categories.map((category) => <option key={category.id} value={category.id}
              
                >{category.name}</option>)}
              </select>
            </div>
            <button onClick={this.saveItem} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(null, { createItem })(AddItem);
