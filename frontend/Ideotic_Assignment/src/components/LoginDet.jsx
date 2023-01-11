import React from 'react'

export default function LoginDet() {
    const login = (event) => {
        event.preventDefault()
        let e = document.getElementById("email").value
        let p = document.getElementById("pwd").value
        console.log(e, p);
    }

    const reg=(event)=>{
        event.preventDefault()
        let e = document.getElementById("regEmail").value
        let p = document.getElementById("regPwd").value
        let n = document.getElementById("name").value
        console.log(e, p,n);
    }
    return (
        <div>
            <div id="cont">
                <form onSubmit={login}>
                    Email: <input type="email" name="Email" id="email" /><br />
                    Password: <input type="password" name="password" id="pwd" /><br />
                    <input type="submit" value="Login" />
                </form>

                <hr />

                <form onSubmit={reg}>
                    Email: <input type="email" id='regEmail'/><br />
                    Password: <input type="password" name="password" id="regPwd" /><br />
                    Name: <input type="text" id='name'/><br />
                    <input type="submit" value="Register" />
                </form>
            </div>



        </div>
    )
}
