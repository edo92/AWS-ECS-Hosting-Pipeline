import React, { Component } from "react";
import { connect } from "react-redux";

// Redux Actions
import { getUsers, createUser } from "../../Store/actions/getname";

// Ifaces & Types
import {
  IProps,
  IState,
  EventChangeType,
  IReduxDispatch,
  IDispatchProps,
  IStateProps,
  IReduxState,
  IUserObj,
} from "./types";

class MainPage extends Component<IProps, IState> {
  componentDidMount() {
    this.props.getUsers();
  }

  handleClick(): void {
    if (this.state.name?.trim().length) {
      this.props.createUser(this.state.name);
    }
  }

  handleInputUsername(event: EventChangeType): void {
    this.setState({
      name: event.target.value,
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
        <button id="mybutton" onClick={this.handleClick.bind(this)}>
          Submit
        </button>
        <div>
          {this.props.users.map((user: IUserObj, i: number) => {
            return <div key={i}>{user.name}</div>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxState): IStateProps => {
  return {
    name: state.app.name,
    users: state.app.users,
  };
};

const mapDispatchToProsp = (dispatch: IReduxDispatch): IDispatchProps => {
  return {
    getUsers: () => dispatch(getUsers()),
    createUser: (name: string) => dispatch(createUser(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProsp)(MainPage);
