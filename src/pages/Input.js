import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Class from "../components/Class";
import Date from "../components/Date";
import Record from "../components/Record";
import Remind from "../components/Remind";
import InputForm from "../components/InputForm";

function Input() {
  return (
    <div className="container-fluid">
      <Header/>
      <Navbar/>
      <div className="container input-section">
        <Date/>
        <Class/>
        <div className="row mt-4">
          <Record/>
          <InputForm/>
          <Remind/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Input;