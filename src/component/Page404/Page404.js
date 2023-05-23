import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page404 = (props) => {
  const [submit, setSubmit] = useState(false);

  return (
    <div>
      <div className="container divMiddle">
        <div className=" text-center col-sm-8 ml-auto mr-auto">
          <div className="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
            <div className="row">
              <div className="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                <h1 className="m-0">404</h1>
                <h6>Page not found</h6>
                <p>
                  <Link to={"/"}>
                    <button type="button" className="btn btn-success">
                      Go Back
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page404;
