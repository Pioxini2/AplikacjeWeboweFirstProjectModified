import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewDataForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pk: props.data ? props.data.pk : null,
      data: props.data ? props.data.data : "",
      amount: props.data ? props.data.amount : 0,
    };
  }
  

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createData = e => {
    e.preventDefault();
    console.log(e.target.data.value);
    console.log(e.target.amount.value);
    if(e.target.data.value == "" || e.target.amount.value == 0 ){
      alert("Wprowadz dane do pol");
    }
    else{
      this.setState({data: e.target?.data.value,amount: e?.target.amount.value});
      axios.post(API_URL, this.state).then(() => {
        this.props.resetState();
        this.props.toggle();
      });
    }
    
  };
  editData = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting data:", this.state); // Log the data being sent
  
    // axios
    //   .post(API_URL, this.state)
    //   .then((response) => {
    //     console.log("Response:", response.data);
    //     this.props.resetState();
    //     this.props.toggle();
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error); // Log any errors
    //   });
  }
  

  render() {
    return (
      <Form onSubmit={this.props.data ? this.editData : this.createData}>
        <FormGroup>
          <Label for="data">Name</Label>
          <Input
            type="text"
            name="data"
            id="data"
            placeholder="Name"
            value={this.state.data}
            onChange={this.onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">Amount</Label>
          <Input
            type="number"
            name="amount"
            id="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onChange}
          />
        </FormGroup>
        <Button>Send data</Button>
      </Form>
    );
  }
}

export default NewDataForm;
