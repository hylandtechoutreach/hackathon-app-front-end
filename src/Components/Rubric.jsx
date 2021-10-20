import "../css/Rubric.css";

function Rubric() {
    var test = localStorage.getItem("LOGGEDIN");
      
    if(test !== "True"){
      window.location.href = '/Login App';
    }
    return (
        <h2> RUBRIC </h2>
    )
}

export default Rubric;
