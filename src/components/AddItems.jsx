import React, { Component } from "react";
import { list } from "../Data";
import ItemList from "./ItemList";

class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      name: "",
      newItem: {},
      newList: [],
    };
  }
  setName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleAdd = (event) => {
    const index = list.length + 1;
    console.log(index);
    this.setState(
      Object.assign(this.state.newItem, {
        id: index,
        itemname: this.state.name,
      }),
      () => {
        //console.log("newItem", this.state.newItem);
        this.addContact();
      }
    );
    //console.log(newList);
    // newList : [this.state.list.push(this.state.name)]
  };

  addContact = () => {
    let newItemList = [...this.state.list];
    console.log("old List ", newItemList);
    newItemList.push({...this.state.newItem });
    //console.log("newItem addItem", this.state.newItem);
    console.log("newItemList", newItemList);
    this.setState({ list: newItemList }, () => {
      //console.log(this.state.list);
    });
  };
  
  render() {
  //<ItemList list></ItemList>
    return (
      <div>
        <form>
          <label>
            Add new Item:
            <input
              type="text"
              value={this.state.name}
              onChange={this.setName}
            />
          </label>
          <button type="button" onClick={this.handleAdd}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItems;
