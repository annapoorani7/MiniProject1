import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBar.css";
import dashboardIcon from "../images/dashboard.png";
import arrowDown from "../images/arrow-down.png";
import teacher from "../images/teachers-icon.png";
import { Container, Row, Col, Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function StaffDashboard() {
  const [date, setDate] = useState(new Date());
  const location = useLocation();

  // Check if we are at the base dashboard path (no child route)
  const isDashboardHome = location.pathname === "/staff-dashboard";

  return (
    <div className="d-flex min-vh-100">
      {/* Sidebar */}
      <div className="sidebar bg-light border-end p-4">
        <NavLink
          className="navbar-brand fw-bold fs-4 d-block mb-5 text-center"
          to="/"
        >
          LOGO
        </NavLink>

        {/* Dashboard */}
        <div className="mb-4">
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `d-flex align-items-center text-decoration-none fw-semibold sidebar-link small-text ${
                isActive ? "active-link" : "text-dark"
              }`
            }
          >
            <img
              src={dashboardIcon}
              alt="Dashboard"
              width="36"
              height="36"
              className="me-2"
            />
            Dashboard
          </NavLink>
        </div>

        {/* Assign Homework */}
        <div className="mb-4">
          <NavLink
            to="homework"
            className={({ isActive }) =>
              `d-flex align-items-center text-decoration-none fw-semibold sidebar-link small-text ${
                isActive ? "active-link" : "text-dark"
              }`
            }
          >
            Assign Homework
          </NavLink>
        </div>

        {/* Attendance */}
        <div className="mb-4">
          <NavLink
            to="attendance"
            className={({ isActive }) =>
              `d-flex align-items-center text-decoration-none fw-semibold sidebar-link small-text ${
                isActive ? "active-link" : "text-dark"
              }`
            }
          >
            Attendance
          </NavLink>
        </div>

        {/* Enter Marks */}
        <div className="mb-4">
          <NavLink
            to="marks"
            className={({ isActive }) =>
              `d-flex align-items-center text-decoration-none fw-semibold sidebar-link small-text ${
                isActive ? "active-link" : "text-dark"
              }`
            }
          >
            Enter Marks
          </NavLink>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 d-flex flex-column">
        {/* Header */}
        <div className="d-flex justify-content-end align-items-center mb-4">
          <div className="dropdown">
            <button
              className="d-flex align-items-center p-0 bg-transparent border-0"
              type="button"
              id="profileMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="fw-bold fs-5 me-2">Profile</span>
              <img src={arrowDown} alt="Dropdown Arrow" width="18" height="18" />
            </button>
            <ul
              className="dropdown-menu dropdown-menu-end text-center"
              aria-labelledby="profileMenu"
            >
              <li>
                <NavLink className="dropdown-item small-text" to="/profile">
                  View Profile
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item small-text" to="/logout">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Default Dashboard Content - show only on /staff-dashboard */}
        {isDashboardHome ? (
          <Container fluid className="p-0 flex-grow-1 d-flex flex-column">
            <Row className="g-4 mb-4">
              <Col md={12}>
                <Card className="shadow-sm border rounded p-3">
                  <Row className="align-items-center">
                    <Col xs={12} sm={2} className="text-center mb-3 mb-sm-0">
                      <img
                        src={teacher}
                        alt="teacher"
                        className="mx-auto"
                        style={{ width: "80px", height: "80px" }}
                      />
                    </Col>
                    <Col xs={12} sm={10} className="text-center text-sm-start">
                      <h5 className="fw-bold mb-1">Teacher Name</h5>
                      <p className="text-muted mb-0">Job role</p>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>

            {/* Stats + Note + Calendar */}
            <Row className="flex-grow-1 g-4">
              {/* Left Column (Stats + Note) */}
              <Col md={6} className="d-flex flex-column">
                <Row className="g-4">
                  <Col sm={6}>
                    <Card className="shadow-sm border rounded p-3 text-center h-100">
                      <h6 className="text-muted">Total Days</h6>
                      <h5 className="fw-bold">90</h5>
                    </Card>
                  </Col>
                  <Col sm={6}>
                    <Card className="shadow-sm border rounded p-3 text-center h-100">
                      <h6 className="text-muted">Present Days</h6>
                      <h5 className="fw-bold">81</h5>
                    </Card>
                  </Col>
                </Row>

                <Card className="shadow-sm border rounded p-3 flex-grow-1 mt-4">
                  <h6 className="text-muted mb-2">Note</h6>
                  <div className="h-100">-</div>
                </Card>
              </Col>

              {/* Right Column (Calendar) */}
              <Col md={6} className="d-flex flex-column">
                <Card className="shadow-sm border rounded p-3 flex-grow-1 d-flex flex-column">
                  <h6 className="fw-bold mb-3 text-center">
                    {date.toLocaleString("default", { month: "long" })}{" "}
                    {date.getFullYear()}
                  </h6>
                  <div className="d-flex justify-content-center flex-grow-1 align-items-center">
                    <Calendar onChange={setDate} value={date} />
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        ) : (
          // Child routes render here
          <div className="flex-grow-1">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default StaffDashboard;
