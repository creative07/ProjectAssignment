import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../actions/user.actions";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.getUserData(1);
  }

  render() {
    let user = this.props.userDetails;
    console.log("selected", user);
    return (
      <div className="h-wrap c-n">
        <AppBar position="static">
          <ToolBar>
            <div className="full">
              <div className="flex justify-content-between">
                <div className="col-r flex align-items-center">
                  <span className="text">
                    <span className="u-name">
                      <h1>{user && user.data && user.data.ad.company}</h1>
                      <p>{user && user.data && user.data.ad.text}</p>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userDetails: state.user_reducer.userdetails,
  };
};

const actionCreators = {
  getUserData: userActions.user_action,
};
export default connect(mapStateToProps, actionCreators)(Header);
