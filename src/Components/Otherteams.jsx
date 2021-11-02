import "../css/Otherteams.css";

function Otherteams() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h2> NOT YOUR TEAM</h2>
    )
}

export default Otherteams;
