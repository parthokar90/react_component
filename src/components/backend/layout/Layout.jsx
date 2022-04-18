import Header from '../../../components/frontend/include/Header';
import Footer from '../../../components/frontend/include/Footer';
const Layout=(props)=>{
  return(
      <div>
        <Header></Header>
          {props.children}
        <Footer></Footer>
      </div>
  )
}

export default Layout 