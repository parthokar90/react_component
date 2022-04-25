import google from '../../../assets/frontend/images/Google Play Badge.svg';
import apple from '../../../assets/frontend/images/App Store Badge.svg';
import footerButton from '../../../assets/frontend/images/footer_Button.svg';
import footerLogo from '../../../assets/frontend/images/footer_logo.svg';
import footerLogoIcon from '../../../assets/frontend/images/footer_logo_icon.svg';
import fb from '../../../assets/frontend/images/fb_Icon.svg';
import ig from '../../../assets/frontend/images/ig_icon.svg';
import linkedin from '../../../assets/frontend/images/linkedin_Icon.svg';
import location from '../../../assets/frontend/images/location.svg';
import email from '../../../assets/frontend/images/Email.svg';

const Footer=()=>{
    return(
        <section className="footer">
              <div className="container">
                <div className="row col-md-11 col-12 mx-auto d-flex flex-column footer_heading">
                        <div className="col-md-12 col-12 d-flex justify-content-center align-items-center my-2">
                            <img src={footerLogoIcon} alt="" srcset="" />
                        </div>
                        <div className="col-md-12 col-12 d-flex justify-content-center align-items-center my-2">
                            <h3 className="connecting_heading"> Connecting <br /> Happiness </h3>
                        </div>
                        <div className="col-md-12 col-12 d-flex justify-content-center align-items-center my-2">
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bohonbangla.parcelmagic_driver">
                            <img src={footerButton} alt="" srcset="" />
                            </a>
                        </div>
                    </div>
                    <div className="row py-5 mb_padding_10">
                    <div className="col-md-4 col-8 my-2">
                        <div className="col-12 my-3">
                        <img src={footerLogo} alt="" srcset="" />
                        </div>
                        <div className="col-md-10 col-12 my-4">
                        <span className="text-light footer-content"> Seamless Parcel Delivery Solution for Corporate & SMEs, Online Merchants and Individuals </span>
                        </div>
                        <div className="col-6 my-3 d-flex flex-row icon_gap align-items-end">
                        <a target="_blank" href="https://www.facebook.com/parcelmagicbd">
                            <img src={fb} alt="" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/parcelmagic/">
                            <img src={ig} alt="" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/company/parcelmagicbd/">
                            <img src={linkedin} alt="" />
                        </a>
                        </div>
                    </div>
                <div className="col-md-2 col-4 d-flex flex-column links-container my-3">
                    <h5 className="links-header">Links</h5>
                    <br/>
                    <a href="faq">FAQ</a>
                    <a href="privacy">Privacy Policy</a>
                    <a href="return">Return & Refund</a>
                    <a href="terms">Terms & Condition</a>
                </div>
                <div className="col-md-3 col-12 d-flex flex-column links-container my-3">
                    <h5 className="links-header mx-4">Office</h5>
                    <br/>
                    <div className="col-12 my-1 d-flex flex-row">
                    <img src={location} className="mx-2 footer-address-icon" alt="" />
                    <span className="text-light footer-address"> Branch Office: Unit 3B (3rd Floor), House 85, Road 03, Block F, Banani, Dhaka 1213 <br/>
                    </span>
                    </div>
                    <div className="col-12 my-3 d-flex flex-row">
                    <img src={location} className="mx-2 footer-address-icon" alt="" />
                    <span className="text-light footer-address"> Head Office: GA/64, Configure Bepari Tower, Middle Badda, Progati Sarani Dhaka-1212, Bangladesh </span>
                    </div>
                    <div className="col-12 d-flex flex-row ">
                    <img src={email} className="mx-2 footer-address-icon" alt="" />
                    <span className="text-light footer-address"> Email: support@parcelmagic.com </span>
                    </div>
                </div>
                <div className="col-md-2 col-12 my-3 offset-md-1">
                    <h5 className="links-header text-center mx-2 get_app_title">App Download</h5>
                    <br/>
                    <div className="col-12 my-2 d-flex flex-row app_dwonload_img">
                    <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bohonbangla.parcelmagic_user">
                        <img src={google} className="footer-address-icon" alt="" />
                    </a>
                    </div>
                    <div className="col-12 my-3 d-flex flex-row app_dwonload_img">
                    <a target="_blank" href="https://www.apple.com/store">
                        <img src={apple} className="footer-address-icon" alt="" />
                    </a>
                    </div>
                  </div>
                </div>
              </div>
        </section>
    )
}
export default Footer  