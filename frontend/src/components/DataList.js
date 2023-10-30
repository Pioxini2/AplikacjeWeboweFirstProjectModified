import React, { Component } from "react";
import { Table } from "reactstrap";
import NewDataModal from "./NewDataModal";
import ConfirmRemovalModal from "./ConfirmRemovalModal";

class DataList extends Component {
  render() {
    const data = this.props.data;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!data || data.length <= 0 ? (
            <tr>
              <td colSpan="3" align="center">
                <b>Ops, no one here yet. Maybe it's a good opportunity to add something?</b>
              </td>
            </tr>
          ) : (
            data.map(d => (
              <tr key={d.pk}>
                <td>{d.data}</td>
                <td>{d.amount}</td>
                <td align="center">
                  <NewDataModal
                    create={false}
                    data={{ pk: d.pk, data: d.data, amount: d.amount }}
                    resetState={this.props.resetState}
                  />

                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={d.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default DataList;
