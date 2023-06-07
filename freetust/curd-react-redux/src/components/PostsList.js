import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddPost from '../components/AddPost'

const PostsList = () => {

  const [showAddPost, setShowAddPost] = useState(false);

  const handleCloseAddPost = () => setShowAddPost(false);
  const handleShowAddPost = () => setShowAddPost(true);

  return (
    <div className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-2 text-gray-800">MANAGER POSTS</h1>
        <button onClick={handleShowAddPost}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-plus fa-sm text-white-50"></i> Add New Post
        </button>
      </div>

      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="dataTable_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="dataTables_length" id="dataTable_length">
                    <label>
                      Show{" "}
                      <select
                        name="dataTable_length"
                        aria-controls="dataTable"
                        className="custom-select custom-select-sm form-control form-control-sm"
                      >
                        <option value={10}>10</option>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                      </select>{" "}
                      entries
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div id="dataTable_filter" className="dataTables_filter">
                    <label>
                      Filter by:
                      <select defaultValue={'All'}
                        name="dataTable_filter"
                        style={{
                          background: "none",
                          borderRadius: "4px",
                          width: "170px",
                          marginLeft: "14px",
                        }}
                      >
                        <option value="All">All</option>
                        <option value="name">Name</option>
                        <option value="position">Position</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table
                    className="table table-bordered dataTable"
                    id="dataTable"
                    role="grid"
                    style={{ width: "100%" }}
                    width="100%"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting sorting_asc"
                          tabIndex={0}
                          aria-controls="dataTable"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: 175 }}
                          aria-sort="ascending"
                          aria-label="Name: activate to sort column descending"
                        >
                          Name
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="dataTable"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: 268 }}
                          aria-label="Position: activate to sort column ascending"
                        >
                          Position
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="dataTable"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: 126 }}
                          aria-label="Office: activate to sort column ascending"
                        >
                          Office
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="dataTable"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: 57 }}
                          aria-label="Age: activate to sort column ascending"
                        >
                          Age
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="dataTable"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: 119 }}
                          aria-label="Start date: activate to sort column ascending"
                        >
                          Start date
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="dataTable"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: 106 }}
                          aria-label="Salary: activate to sort column ascending"
                        >
                          Salary
                        </th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th rowSpan={1} colSpan={1}>
                          Name
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Position
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Office
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Age
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Start date
                        </th>
                        <th rowSpan={1} colSpan={1}>
                          Salary
                        </th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr className="odd">
                        <td className="sorting_1">User 01</td>
                        <td>Accountant</td>
                        <td>Tokyo</td>
                        <td>33</td>
                        <td>2008/11/28</td>
                        <td>$162,700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <div
                    className="dataTables_info"
                    id="dataTable_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 57 entries
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="dataTable_paginate"
                  >
                    <ul className="pagination">
                      <li
                        className="paginate_button page-item previous disabled"
                        id="dataTable_previous"
                      >
                        <Link
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx={0}
                          tabIndex={0}
                          className="page-link"
                        >
                          Previous
                        </Link>
                      </li>
                      <li className="paginate_button page-item active">
                        <Link
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx={1}
                          tabIndex={0}
                          className="page-link"
                        >
                          1
                        </Link>
                      </li>

                      <li
                        className="paginate_button page-item next"
                        id="dataTable_next"
                      >
                        <Link
                          href="#"
                          aria-controls="dataTable"
                          data-dt-idx={7}
                          tabIndex={0}
                          className="page-link"
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        <Modal dialogClassName="my-modal"  show={showAddPost} onHide={handleCloseAddPost}>
          <Modal.Header closeButton >
            <Modal.Title >ADD NEW POST</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <AddPost/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseAddPost}>Close</Button>
          </Modal.Footer>
        </Modal>
      
    </div>
  );
};

export default PostsList;
