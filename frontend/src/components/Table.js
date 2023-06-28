import React from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";
import axios from "axios";

const bootstrap =
  "https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg";
const angular =
"https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg";
const sketch =
"https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg";
const react =
"https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg";
const vue =
"https://raw.githack.com/creativetimofficial/argon-dashboard/master/assets/img/theme/bootstrap.jpg";

const Table = () => {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      // const { data } = await axios.get("/api/v1/logout");
      localStorage.removeItem("User");
      alert("Logged Out succesful");
      navigate("/");
    } catch (error) {
      if (error.response) alert(error.response.data.error);
    }
  };

  return (
    <>
      <button className="logout-btn bg-danger" onClick={logoutHandler}>
        Logout
      </button>
      <div className="main-content">
        <div className="container mt-4">
          <div className="row mt-5">
            <div className="col">
              <div className="card bg-default ">
                <div className="card-header bg-transparent border-0">
                  <h3 className="text-white mb-0">Card tables</h3>
                </div>
                <div className="table-responsive">
                  <table className="table align-items-center table table-flush">
                    <thead className="thead">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date Created</th>
                        <th scope="col">Role</th>
                        <th scope="col">Status</th>
                        <th scope="col">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img src={bootstrap} alt="img1" />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Michael Holz
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>04/10/2013</td>
                        
                        <td>
                          <div className="avatar-group">
                            Admin
                          </div>
                        </td>
                        <td>
                          <span className="badge text-dark badge-dot mr-4">
                            <i className="bg-success"></i> Active
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">60%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "60%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                       <td>2</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img6" src={angular} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Paula Wilson
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>05/08/2014</td>
                        
                        <td>
                          <div className="avatar-group">
                            Admin
                          </div>
                        </td>

                        <td>
                          <span className="badge text-dark badge-dot">
                            <i className="bg-success"></i> Active
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                       <td>3</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img8" src={sketch} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Antonio Moreno
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>11/05/2015</td>
                        
                        <td>
                          <div className="avatar-group">
                            user
                          </div>
                        </td>

                        <td>
                          <span className="badge text-dark badge-dot mr-4">
                            <i className="bg-danger"></i> Suspended
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">72%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  aria-valuenow="72"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "72%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                       <td>4</td>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img alt="img9" src={react} />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Mary Saveley
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>06/09/2016</td>
                        
                        <td>
                          <div className="avatar-group">
                            publisher
                          </div>
                        </td>
                        <td>
                          <span className="badge text-dark badge-dot text-dark">
                            <i className="bg-success"></i> Active
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">90%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  aria-valuenow="90"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "90%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td> 
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="/" className="avatar rounded-circle mr-3">
                              <img src={vue} alt="img9" />
                            </a>
                            <div className="media-body">
                              <span className="mb-0 text-sm">
                                Martin Sommer
                              </span>
                            </div>
                          </div>
                        </th>
                        <td>12/08/2017</td>
                        
                        <td>
                          <div className="avatar-group">
                            Admin
                          </div>
                        </td>
                        <td>
                          <span className="badge text-dark badge-dot mr-4">
                            <i className="bg-warning"></i> Inactive
                          </span>
                        </td>

                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">100%</span>
                            <div>
                              <div className="progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
