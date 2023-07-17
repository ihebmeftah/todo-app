export default function TodoApp(){
    return (
        <div className="TodoApp">
            Todo managment application
            <LoginComponent />
        </div>
    ); 
}

function LoginComponent(){
    return (
        <div className="LoginComponent">
  <div class="login-form">
        <h2>Login</h2>
        <form>
            <div>
            <label for="username">Username : </label>
            <input type="text" id="username" name="username" required/>
            </div>
        
            <div>
            <label for="password">Password : </label>
            <input type="password" id="password" name="password" required/>
            </div>

            <button type="submit">Login</button>
        </form>
    </div>
        </div>
    );
}