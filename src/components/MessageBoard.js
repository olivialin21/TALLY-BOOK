export default function MessageBoard() {
  return(
    <div className="messageBoard">
      <p>FEEDBACK</p>
      <form id="form" className="messageForm">
        <input placeholder="e-mail..."/>
        <textarea placeholder="write something..." />
        <input type="submit" value="Submit" className="messageForm-submit"/>
      </form>
    </div>
  );
}