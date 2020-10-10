import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../actions/user.actions";
import Paper from "@material-ui/core/Paper";
import Drawer from "@material-ui/core/Drawer";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import "./UserListing.css";
import Header from "../Header/Header";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";

class UserListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedValue: {},
      currentPage: 1,
      totalPages: 2,
    };
  }
  componentWillMount() {
    this.props.getUserData(this.state.currentPage);
  }

  handlePopUpClose = () => {
    this.setState({
      open: false,
    });
  };

  handleNext = () => {
    if (this.state.currentPage < this.state.totalPages)
      this.setState(
        {
          currentPage: this.state.currentPage + 1,
        },
        () => {
          this.props.getUserData(this.state.currentPage);
        }
      );
  };

  handlePrev = () => {
    if (this.state.currentPage > 1)
      this.setState(
        {
          currentPage: this.state.currentPage - 1,
        },
        () => {
          this.props.getUserData(this.state.currentPage);
        }
      );
  };
  handleModal = (item) => {
    this.setState({
      selectedValue: item,
      open: true,
    });
  };
  render() {
    const { selectedValue } = this.state;
    let user = this.props.userDetails;
    return (
      <div>
        <Header />
        <div className="d-wrap c-n">
          <div className="user-mment">
            <div className="user-listing">
              <div className="card-wrap">
                {user &&
                  user.data &&
                  user.data.data.map((item, index) => (
                    <Paper>
                      <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
                          <div className="c-box">
                            <Paper className="card">
                              <Avatar className="c-blue" src={item.avatar}>
                                Avatar
                              </Avatar>
                              <div className="u-name">
                                {item.first_name} {item.last_name}
                              </div>
                              <div className="u-name">{item.email}</div>
                              <Button
                                onClick={() => this.handleModal(item)}
                                variant="contained"
                                color="primary"
                              >
                                Wanna see my details! Click Here !
                              </Button>
                            </Paper>
                          </div>
                        </div>
                      </div>
                    </Paper>
                  ))}
                <Modal
                  className="photo-popup"
                  open={this.state.open}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  <div className="photo-box">
                    <div className="head">
                      View Details
                      <span
                        className="close-btn"
                        onClick={this.handlePopUpClose}
                      >
                        <CloseIcon />
                      </span>
                    </div>
                    <div className="photo-content">
                      <div className="row">
                        <div className="col-img col-sm-5 col-md-5">
                          <img
                            src={selectedValue && selectedValue.avatar}
                            alt="avatar"
                          />
                        </div>
                        <div className="col-text col-sm-7 col-md-7">
                          <h4>NAME : 
                            {selectedValue && selectedValue.first_name}{" "}
                            {selectedValue && selectedValue.last_name}
                          </h4>
                          <div className="tag-list flex align-items-center">
                          <p>ID : {selectedValue && selectedValue.id}</p>
                          </div>
                          <div className="tag-list flex align-items-center">
                          <p>EMAIL : {selectedValue && selectedValue.email}</p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
                <Button
                  onClick={this.handlePrev}
                  variant="contained"
                  color="primary"
                >
                  1
                </Button>

                <Button
                  onClick={this.handleNext}
                  variant="contained"
                  color="primary"
                >
                 2
                </Button>
              </div>
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps, actionCreators)(UserListing);
