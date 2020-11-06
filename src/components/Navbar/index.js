import React, { Fragment } from "react";
// import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { dangXuatAction } from "../../containers/admin/auth/modules/actions";

import swal from "sweetalert";

export default function Navbar(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  let userName = JSON.parse(localStorage.getItem("userName"));

  const dispatch = useDispatch();

  const LogOut = () => {
    dispatch(dangXuatAction());
  };

  const renderMenuControl = () => {
    if (
      JSON.parse(localStorage.getItem("userLogin")).maLoaiNguoiDung ===
      "QuanTri"
    ) {
      return (
        <MenuItem onClick={handleClose}>
          <NavLink
            to="/admin/movie"
            style={{ textDecoration: "none", color: "#333" }}
          >
            <i className="fa fa-user mr-1"></i>
            Admin
          </NavLink>
        </MenuItem>
      );
    } else {
      return null;
    }
  };

  const renderLogin = () => {
    if (userName) {
      return (
        <Fragment>
          <div
            className="login_link"
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{
              cursor: "pointer",
              zIndex: "1000",
              // position: "absolute",
              // top: 0,
              // right: 4,
            }}
          >
            <img
              className="mx-auto"
              src="/img/logo/user.png"
              alt="user"
              style={{ width: 45, height: 45, borderRadius: 50 }}
            />
            <span className="login__text mx-auto">{userName}</span>
          </div>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
            style={{ zIndex: "1000" }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                  zIndex: "1000",
                }}
              >
                <Paper style={{ zIndex: "1000" }}>
                  <ClickAwayListener
                    onClickAway={handleClose}
                    style={{ zIndex: "1000" }}
                  >
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {renderMenuControl()}
                      <MenuItem onClick={handleClose}>
                        <NavLink
                          to="/profile"
                          style={{ textDecoration: "none", color: "#333" }}
                        >
                          <i className="fa fa-user mr-1"></i>
                          Profile
                        </NavLink>
                      </MenuItem>
                      <MenuItem onClick={LogOut}>
                        <i className="fa fa-sign-out-alt mr-1"></i>Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Fragment>
      );
    }
    return (
      <NavLink className="login__link" to="/login">
        <img
          className="mx-auto"
          src="/img/logo/user.png"
          alt="user"
          style={{ width: 45, height: 45, borderRadius: 50 }}
        />
        <span className="login__text">Đăng Nhập</span>
      </NavLink>
    );
  };

  return (
    <div>
      <header id="header">
        <div className="header__navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <div className="col-3 logo wow animate__animated animate__fadeInLeftBig">
              <Link to={"/"}>
                <a>CYBERSOFT CINEMA</a>
              </Link>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="col-xs-12 col-sm-9 collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    LỊCH CHIẾU
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    CỤM RẠP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    TIN TỨC
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#A">
                    VỀ CHÚNG TÔI
                  </a>
                </li>
                <li className="text-decoration-none">
                  <div className="header__login">{renderLogin()}</div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
