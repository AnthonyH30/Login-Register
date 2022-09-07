import RegisterStyle from "./RegisterStyle";
import { Link } from "react-router-dom";


export default function Register(){
    return(
        <RegisterStyle>
            <div className="form-box">
                <h1>Register</h1>
                <div>
                    <input required type="text" name="name" id="name" placeholder="Full Name" />
                    <input required placeholder="Email" id="email" type="email" />
                    <input required type="password" placeholder="Password" />
                    <input required type="password" placeholder="Confirm password" />
                    <button>Register</button>
                </div>
                <div className="link">
                    <p>Already have an account? <Link to="/">Log in</Link></p>
                </div>
            </div>
        </RegisterStyle>
    )
}