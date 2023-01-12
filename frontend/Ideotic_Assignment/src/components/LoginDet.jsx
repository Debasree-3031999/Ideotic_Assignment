import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom';
import LoginCSS from './Login.module.css'

export default function LoginDet() {
    let ifLogged = JSON.parse(localStorage.getItem("ifLogged")) || false;
    let loggedIn = JSON.parse(localStorage.getItem("loggedIn"))
    console.log(loggedIn, ifLogged);
    const login = async (event) => {
        event.preventDefault()
        let e = document.getElementById("email").value
        let p = document.getElementById("pwd").value
        let users = await axios.get("https://user-details-list.onrender.com/users").then((res) => {
            // console.log(res.data);
            for (let x of res.data) {
                // console.log("x",x);
                if (x.email === e && x.password === p) {
                    alert("Login Successful")
                    localStorage.setItem("loggedIn", JSON.stringify(x))
                    localStorage.setItem("ifLogged", true)
                    window.location = "/list"
                }
            }
        })
        console.log(e, p);

    }

    const reg = async (event) => {
        event.preventDefault()
        let e = document.getElementById("regEmail").value
        let p = document.getElementById("regPwd").value
        let n = document.getElementById("name").value
        console.log(e, p, n);

        let data = {
            email: e,
            password: p,
            name: n
        }
        axios.post('https://user-details-list.onrender.com/users', data).then(resp => {
            console.log(resp.data);
            alert(`Welcome ${n}! you're registered!`);
            localStorage.setItem("loggedIn", JSON.stringify(data))
            localStorage.setItem("ifLogged", true)
            window.location = "/"
        }).catch(error => {
            console.log(error);
        });
    }

    const logout = () => {
        alert(`${loggedIn.name} logging you out!`)
        localStorage.setItem("ifLogged", false)
        window.location = "/"
    }
    return (
        <div>
            <div className={LoginCSS.cont} id="cont">{
                !ifLogged ? <div className={LoginCSS.formDiv}><form onSubmit={login}>
                    Email: <input type="email" name="Email" id="email" /><br />
                    Password: <input type="password" name="password" id="pwd" /><br />
                    <input type="submit" value="Login" />
                </form>

                    <hr style={{ width: "1px", height: "100px" }} />

                    <form onSubmit={reg}>
                        Email: <input type="email" id='regEmail' /><br />
                        Password: <input type="password" name="password" id="regPwd" /><br />
                        Name: <input type="text" id='name' /><br />
                        <input type="submit" value="Register" />
                    </form>
                </div> : <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div id="left">
                        Welcome {loggedIn.name}<br />
                        <Link to={"/list"}>Click here </Link>to view the Dog List Page.
                    </div>
                    <div id="right">
                        <button onClick={logout}>Log-Out!</button>
                    </div>
                </div>
            }

            </div>
        </div>
    )
}
