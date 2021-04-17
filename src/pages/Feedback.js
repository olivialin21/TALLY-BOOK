import Navbar from "../components/Navbar";
import Header from "../components/Header";
import MessageBoard from "../components/MessageBoard";
import Footer from "../components/Footer";

function Feedback() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Header/>
      <MessageBoard/>
      <Footer/>
    </div>
  );
}

export default Feedback;