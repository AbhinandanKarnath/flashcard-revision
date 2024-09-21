import './styles/Login.css'

function Login()
{
    return (
        <div className="comic-login-card">
            <div className="card-header">
                <h2>Login</h2>
            </div>
            <form className="card-body">
                <input type="text" placeholder="Username" required></input>
                <input type="password" placeholder="Password" required></input>
                <button type="submit" class="login-btn">Login</button>
            </form>
            <div className="card-footer">
                <p>Don't have an account ? <a href="#">Sign-up</a></p>
            </div>
        </div>
    );
}

export default Login;