

function SignOut() {
    localStorage.removeItem("LOGGEDIN");
    return (
        <meta http-equiv="refresh" content="0;URL='/Login App'" />    
    )
}

export default SignOut;
