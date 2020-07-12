import React, { Component } from "react";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// showing vs-code github setup
class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    }, () => console.log(this.state));
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };

  render() {
    // console.log(this.state.id);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
/*
<div className="col-4 bg-warning"><TodoInput /></div>
<div className="col-4 bg-danger">hello from app</div>
<div className="col-4 bg-primary">hello from app</div>
*/
/*
  <div>
      </div>

        <div className="container">
          <div className="row">
            <TodoInput></TodoInput>
            <TodoList></TodoList>
          </div>
        </div>
      </div>
*/
