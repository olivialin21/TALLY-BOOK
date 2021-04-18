import firebase from 'firebase/app';
import "firebase/firestore";

export default function MessageBoard() {
  const firebaseConfig = {
    apiKey: "AIzaSyCeuaJfsj6jt3J2q9Q64P6On95fLSbgY4Q",
    authDomain: "react-mid-65a1a.firebaseapp.com",
    projectId: "react-mid-65a1a",
    storageBucket: "react-mid-65a1a.appspot.com",
    messagingSenderId: "289033592291",
    appId: "1:289033592291:web:7650c109d31f8c4dd114d6",
    measurementId: "G-9RF0M985H3"
  };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const onClick = (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const message = document.getElementById("message");
    let docRef = firebase.firestore();
    let messagesRef = docRef.collection("messageBoard");

    let email_v = email.value;
    let message_v = message.value;

    if (email_v !== '' && message_v!==''){
      messagesRef.add({
        "email":email_v,
        "message":message_v
      }).then(() => {
        document.getElementById("form").reset();
      });
    } else {
      alert('還有空格');
    }
  };

  return(
    <div className="messageBoard">
      <p>FEEDBACK</p>
      <form id="form" className="messageForm">
        <input id="email" placeholder="e-mail..."/>
        <textarea id="message" placeholder="write something..." />
        <input type="submit" onClick={onClick} value="Submit" className="messageForm-submit"/>
      </form>
    </div>
  );
}