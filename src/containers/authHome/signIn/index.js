import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import Loading from "../../../components/Loading";
import { userLogin, token } from "../../../services/config/setting";
import { qlyNguoiDung } from "../../../services/QuanLyNguoiDungServices";
import { actFetchLogin } from "../../admin/auth/modules/actions";
import swal from "sweetalert";

const Login = () => {
  return (
    <section className="backgroundBodyUser">
      <div className="container-fluid">
        <div className="loginForm">
          <NavLink className="img__link" to="/">
            <div className="img__logo">
              <img
                src="https://i0.wp.com/thegamehaus.com/wp-content/uploads/2020/05/Volibear_Emote.png?resize=256%2C256&ssl=1"
                alt="logo"
              />
              <span className="text-logo">Cyber Phim</span>
            </div>
          </NavLink>
          <div>
            Đăng Nhập để được nhiều ưu đãi, mua vé <br /> và bảo mật thông tin!
          </div>
          <div className="formSocial">
            <form className="formLogin">
              <div className="form-group">
                <input
                  type="text"
                  className="input"
                  name="taiKhoan"
                  placeholder="Tài Khoản"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="input"
                  name="matKhau"
                  placeholder="Mật Khẩu"
                />
              </div>
              <div className="form-group">
                <button className="btnLogin" type="submit">
                  Đăng Nhập
                </button>
              </div>
              <div className="form-group">
                <NavLink className="text-light" to="/register">
                  Bạn chưa có tài khoản?
                </NavLink>
              </div>
            </form>
            <NavLink className="close-btn" to="/"></NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
