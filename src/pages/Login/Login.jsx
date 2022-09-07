import LoginStyle from "./LoginStyle";
import {Link} from "react-router-dom"


function Login(){
    return(
        <LoginStyle>
            <div className="form-box">
                <h1>Log in</h1>
                <div>
                    <input required placeholder="Email" id="email" type="email" />
                    <input required type="password" placeholder="Password" />
                    <button>Log in</button>
                </div>
                <div className="link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </LoginStyle>
    )
}

export default Login;