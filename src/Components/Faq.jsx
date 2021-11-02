import "../css/Faq.css";

function Faq() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h2> FAQ</h2>
    )
}

export default Faq;
