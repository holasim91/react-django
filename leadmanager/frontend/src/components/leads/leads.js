import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads, deleteLeads } from "../../actions/leads";

export class leads extends Component {
  static PropTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLeads: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h2>Leads Table</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>MESSAGE</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteLeads.bind(this, lead.id)}
                    className="btn btn-danger btn-sm"
                  >
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLeads }
)(leads);
