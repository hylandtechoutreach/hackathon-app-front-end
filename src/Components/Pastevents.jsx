import "../css/Pastevents.css";

function Pastevents() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h5>past events</h5>
    )
}

export default Pastevents;
