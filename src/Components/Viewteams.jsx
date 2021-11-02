import "../css/Viewteams.css";

function Viewteams() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h2> What are the teams working on? </h2>
    )
}

export default Viewteams;
