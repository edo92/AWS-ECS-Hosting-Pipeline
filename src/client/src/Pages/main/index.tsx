import React, { Component } from "react";
import axios from "axios";

type IEventChange = React.ChangeEvent<HTMLInputElement>;

interface IProps {
  test?: string;
}

interface IState {
  username?: string;
  data: string;
}

class MainPage extends Component<IProps, IState> {
  async componentDidMount() {
    await this.getInitialData();
  }

  async getInitialData() {
    const res = await axios.get("/backend/getusers");
    this.setState({ data: res.data });
  }

  async handleClick() {
    await axios.post("/backend/createuser", {
      userForm: {
        name: this.state.username,
      },
    });
  }

  handleInputUsername(event: IEventChange) {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>Hello world xxxxx!</div>
        <input
          style={{ width: "200px" }}
          onChange={this.handleInputUsername.bind(this)}
          placeholder="Input Your Username"
        />
        <button onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default MainPage;
