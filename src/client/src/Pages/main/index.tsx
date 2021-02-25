import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

// Redux Actions
import { setname } from "../../Store/actions/getname";

// Ifaces & Types
import {
  IProps,
  IState,
  EventChangeType,
  IReduxDispatch,
  IDispatchProps,
  IStateProps,
  IReduxState,
} from "./types";

class MainPage extends Component<IProps, IState> {
  async componentDidMount() {
    await this.getInitialData();
  }

  async getInitialData() {
    const res = await axios.get("/backend/getusers");
    this.setState({ data: res.data });
  }

  async handleClick() {
    if (this.state.username?.trim().length) {
      this.props.setName(this.state.username);
      await axios.post("/backend/createuser", {
        userForm: {
          name: this.state.username,
        },
      });
    }
  }

  handleInputUsername(event: EventChangeType) {
    this.setState({
      username: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
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

const mapStateToProps = (state: IReduxState): IStateProps => {
  return {
    name: state.app.name,
  };
};

const mapDispatchToProsp = (dispatch: IReduxDispatch): IDispatchProps => {
  return {
    setName: (name: string) => dispatch(setname(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProsp)(MainPage);
