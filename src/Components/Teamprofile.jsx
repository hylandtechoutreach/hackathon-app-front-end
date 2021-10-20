import "../css/Teamprofile.css";

function Teamprofile() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h2> This is ur team</h2>
    )
}

export default Teamprofile;
