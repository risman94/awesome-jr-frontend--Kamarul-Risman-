import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserRepos } from "../actions/userAction";

class Repo extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <div>Pinned repositories </div>
        <div className="row justify-content-between">
          {this.props.repos.map((node, index) => (
            <div key={index} className="col-md-6">
              <div
                className="card"
                style={{ padding: "10px", margin: "5px", height: "150px" }}
              >
                <div className="card-title">
                  <a href="#" style={{ fontWeight: "bold" }}>
                    {node.name}
                  </a>
                </div>
                <div
                  className="card-body"
                  style={{ fontSize: "13px", padding: "0px" }}
                >
                  {node.description}
                </div>
                <div className="card-text" style={{ fontSize: "14px" }}>
                  <ul style={{ paddingLeft: "0px" }}>
                    <li
                      style={{
                        float: "left",
                        display: "block",
                        paddingRight: "10px"
                      }}
                    >
                      {node.language}
                    </li>
                    <li
                      style={{
                        float: "left",
                        display: "block",
                        paddingRight: "10px"
                      }}
                    >
                      <i className="fa fa-star" aria-hidden="true" />
                      {node.stargazers_count}
                    </li>
                    <li
                      style={{
                        float: "left",
                        display: "block",
                        paddingRight: "10px"
                      }}
                    >
                      <i className="fa fa-code-fork" aria-hidden="true" />
                      {node.forks_count}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    repos: state.userDetails.repos
  };
}

export default connect(mapStateToProps, { fetchUserRepos })(Repo);
