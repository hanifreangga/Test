import React, { Component } from "react";
import Pagination from "./commons/Pagination";
import { getDatas } from "../services/DataService";

class Datas extends Component {
  state = {
    datas: getDatas(),
    pageSize: 4
  };
  handleDelete = data => {
    const datas = this.state.datas.filter(d => d._id !== data._id);
    this.setState({ datas: datas });
    console.log(data);
  };

  handlePageChange = page => {
    console.log("page", page);
  };

  render() {
    const { length: count } = this.state.datas;
    if (count === 0) return <p>There is no data in the database</p>;
    return (
      <>
        <p>Showing {count} data in the database.</p>
        <button
          
          className="btn"
          >
          Tambah User
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>P/W</th>
              <th>Tanggal Lahir</th>
              <th>Tanggal Input</th>
              <th>Aksi</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.datas.map(data => (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.nama}</td>
                <td>{data.alamat}</td>
                <td>{data.pw}</td>
                <td>{data.lahir}</td>
                <td>{data.input}</td>
                <td>
                  <button
                    //onClick={() => this.handleDelete(data)}
                    className="btn btn-danger btn-sm"
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    //onClick={() => this.handleDelete(data)}
                    className="btn btn-danger btn-sm"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(data)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </>
    );
  }
}

export default Datas;
