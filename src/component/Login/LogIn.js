import React, { Fragment, useState } from "react";
import "./LogIn.css"
import Frame from "../../assets/frame_login_ilustrasi.png"
import { KODE_SLUG, BASE_API_URL } from "../../utils/api";
import { STRINGS } from "../../config/strings";
import useAuth from "../../context/Auth/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import showPwdImg from "../../assets/show-password.svg"
import hidePwdImg from "../../assets/hide-password.svg"


const LogIn = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
  const [isLoading, setLoading] = useState("");
  const [isRevealPwd, setIsRevealPwd] = useState(false);

  useEffect(() => {
    if (auth.isLogged) {
      navigate("/")
    }

    const desaEmas = `${STRINGS[KODE_SLUG].logo_second_size}`;
    if (desaEmas === "enrekang") {
      document.getElementById("logo-dss").classList = "logo_";
    }

    const logoFirst = `${STRINGS[KODE_SLUG].logo_first}`;
    if (logoFirst === "gap") {
      document.getElementById("logo-first").classList = "logo_ me-3";
    }

    const logoSecond = `${STRINGS[KODE_SLUG].logo_hide}`;
    if (logoSecond === "hide") {
      document.getElementById("logo-dss").style.display = "none";
    }

    document.getElementById("hr_").style.borderLeft = `4px solid ${STRINGS[KODE_SLUG].font_color_jumbotron}`;

    document.title = `Login | ${STRINGS[KODE_SLUG].title}`;

    const button = document.getElementById("button")
    button.style.backgroundColor = `${STRINGS[KODE_SLUG].background_color}`;
    button.style.color = `${STRINGS[KODE_SLUG].font_color}`;

    const jumbotron = document.getElementById("content_jumbotron")
    jumbotron.style.backgroundColor = `${STRINGS[KODE_SLUG].bg_color_jumbotron}`;
    jumbotron.style.color = `${STRINGS[KODE_SLUG].font_color_jumbotron}`;

  }, [auth])

  const loginHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    let form = new FormData()
    form.append("username", username)
    form.append("password", password)

    await fetch(BASE_API_URL + 'auth/login-post', {
      method: "POST",
      body: form
    }).then(res => res.json()).then(res => {
      if (res.success) {
        auth.handleLogin(res.data.token)
      } else {
        setError(res.message)
      }
    }).catch((err) => {
      console.log(err, "error")
    })

    setLoading(false)
  }

  return (
    <Fragment>
      <div className="row">

        <div className="col-lg-5 col-sm col-md">

          <div className="login-content">

            <div className="text-center">

              <img alt="Logo" src="https://digitaldesa.id/templates/homepage/media/misc/favicon/digides.png" className="w-25" />

            </div>

            <p className="title_logo text-center">{STRINGS[KODE_SLUG].desc}</p>

            <div className="login-form">
              <form onSubmit={loginHandler}>
                <input type="hidden" name="" value="" />
                <h1>Masuk Akun</h1>
                {
                  error &&
                  <div className="alert alert-danger">
                    {error}
                  </div>
                }
                <div className="form-group">
                  <label className="text-dark">Username</label>
                  <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" type="text" name="username" placeholder="Masukkan Username" autoComplete="off" />
                  <i className="far fa-user icons-custom"></i>
                </div>
                <div className="form-group pwd-container">
                  <div>
                    <label className="text-dark pt-2">Password</label>
                  </div>
                  <input value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="password" type={isRevealPwd ? "text" : "password"} name="password" autoComplete="off"
                    placeholder="Masukkan Password" />
                  <img
                    title={isRevealPwd ? "Hide password" : "Show password"}
                    src={isRevealPwd ? hidePwdImg : showPwdImg}
                    onClick={() => setIsRevealPwd(prevState => !prevState)}
                  />
                </div>
                <div className="pb-lg-0 pb-5">
                  <button disabled={isLoading} type="submit" className="btn btn-general btn-block font-size-h6 px-8 py-3 my-3 mr-3" id="button">
                    {
                      isLoading ?
                        <div className="spinner-border text-primary" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                        :
                        "Masuk Akun"
                    }
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className="col" id="content_jumbotron">
          <div className="jumbotron_">

            <div className="header_jumbotron">
              <img id="logo-first" src={STRINGS[KODE_SLUG].logo_kab_url} className="logo_" alt="" />
              <img id="logo-dss" src={STRINGS[KODE_SLUG].logo_dss_url} className="logo_dss" alt="" />
              <hr id="hr_" className="hr_line" />
              <h4>{STRINGS[KODE_SLUG].title}<br />{STRINGS[KODE_SLUG].kabkota}</h4>
            </div>


            <div className="content_jumbotron_">
              <h1 className="text-center mb-3">Selamat datang, {STRINGS[KODE_SLUG].nama}</h1>
              <div className="d-flex justify-content-center">
                <div id="slide-login">
                  <img src={STRINGS[KODE_SLUG].bg_jumbotron} alt="" />
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <div className="bugisse_text">
                  {STRINGS[KODE_SLUG].slogan}
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
