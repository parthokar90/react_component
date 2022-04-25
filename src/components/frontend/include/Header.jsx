import { Link } from "react-router-dom";
import logo from '../../../assets/frontend/images/Logo.svg';
import globe from '../../../assets/frontend/images/globe_icon.png';
import vector from '../../../assets/frontend/images/Vector.png';

const Header=()=>{
    return(
      <div className="container-fluid p-0 m-0 fixed-top nav_container">
          <nav className="navbar px-auto navbar-expand-lg navbar-light">
             <div className="container">
              <div className="row">
                  <div className="col-md-3 me-5">
                      <a className="navbar-brand" href="index.html">
                        <img src={logo} alt="" />
                      </a>
                  </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="col-md-6 collapse navbar-collapse d-md-flex justify-content-between" id="navbarSupportedContent">
                  <div className="d-md-flex justify-content-between">
                      <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item m-1">
                          <a className="nav-link  active_menu " aria-current="page" href="index.html">Home</a>
                        </li>
                        <li className="nav-item m-1">
                          <a target="_blank" className="nav-link " aria-current="page" href="https://tracking.parcelmagic.com/">Track Order</a>
                        </li>
                        <li className="nav-item m-1">
                          <a className="nav-link " href="about-us.html">About Us</a>
                        </li>
                        <li className="nav-item m-1">
                          <a className="nav-link  " href="contact-us.html">Contact</a>
                        </li>
                      </ul>
                  </div>

                  <div className="list d-md-flex flex-row justify-content-center align-items-center">
                    <ul className="navbar-nav  my-lg-0">
                      <li className="nav-item dropdown lan_li">
                        <a className="nav-link dropdown-toggle lan_dropdown" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          <img className="menu_item_icon" src={globe} alt="" />&nbsp;EN <img className="menu_down_arrow" src={vector} />
                        </a>
                        <ul className="dropdown-menu" style={{top:'38px',minWidth:'5rem'}} aria-labelledby="navbarDropdown">
                          <li>
                            <a className="text-center dropdown-item" href="#">EN</a>
                          </li>
                        </ul> &nbsp;&nbsp;&nbsp;
                      </li>
                      <li className="nav-item dropdown mar_mb_0">
                        <ul className="btn_ul" aria-labelledby="navbarDropdown">
                          <li className="login_btn">
                            <a className="login_btn_link" href="login.html">
                              <b> LOGIN </b>
                            </a>
                          </li>
                          <li className="signup_btn">
                            <a className="signup_btn_link" href="login.html"> SIGN &nbsp;UP </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                 </div>
                </div>
             </div>
          </nav>
      </div>
    )
}
export default Header  