import Header from '../../../components/frontend/include/Header';
import Footer from '../../../components/frontend/include/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../../assets/frontend/css/main.css';


const Layout=(props)=>{
  return(
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="landing/assets/images/favicon.svg" type="image/gif" sizes="16x16" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" media />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Lora:400,700,400italic|Oswald:300,400,500,600,700|Quicksand:300,400,500,700" media />
        <title> Parcelmagic - Technology-Driven Parcel Delivery Service in Bangladesh</title>
      </head>
      <body>
        <Header></Header>
          {props.children}
        <Footer></Footer>
      </body>
    </html>
  )
}
export default Layout 