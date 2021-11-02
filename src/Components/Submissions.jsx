import "../css/Submissions.css";

function Submissions() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h2> Submissions from students </h2>
    )
}

export default Submissions;
