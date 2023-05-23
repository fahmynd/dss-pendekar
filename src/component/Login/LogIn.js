import React, { Fragment } from "react";
import "./LogIn.css"
import Frame from "../../assets/frame_login_ilustrasi.png"
import Back from "../../assets/back.svg"
import { Navigate, Link } from "react-router-dom";

const LogIn = () => {

  return (
    <Fragment>
      <div className="row">

        <div className="col-lg-5 col-sm col-md-4">

          <div className="login-content">

            <p className="title_logo text-center">Pemantauan Desa dan Kelurahan Terintegrasi</p>

            <div className="login-form">
              <form action="login" method="post">
                <input type="hidden" name="" value="" />
                <h1>Masuk Akun</h1>
                <div className="form-group">
                  <label className="text-dark">Username</label>
                  <input className="form-control" type="text" name="username" placeholder="Masukkan Username" autoComplete="off" />
                  <i className="far fa-user icons-custom"></i>
                </div>
                <div className="form-group">
                  <div>
                    <label className="text-dark pt-2">Password</label>
                  </div>
                  <input className="form-control" id="password" type="password" name="password" autoComplete="off"
                    placeholder="Masukkan Password" />
                  <i id="eye" className="far fa-eye icons-custom"></i>
                </div>
                <div className="pb-lg-0 pb-5">
                  <button type="submit" className="btn btn-general btn-block font-size-h6 px-8 py-4 my-3 mr-3">Masuk Akun
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className="col" id="content_jumbotron">
          <div className="jumbotron_">

            <div className="header_jumbotron">
              <img src={Back} className="logo_" alt="" />
              <hr className="hr_line" />
              <h4>Desa Emas <br /> Kabupaten Enrekang</h4>
            </div>


            <div className="content_jumbotron_">
              <h1 className="text-center">Selamat datang, Desa Emas</h1>
              <div className="d-flex justify-content-center">
                <div id="slide-login">
                  <img src={Frame} alt="" />
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className="bugisse_text">
                  Tana Rigalla' Tana Riabussungi
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

    </Fragment>
  );
}

export default LogIn;
