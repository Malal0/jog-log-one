export default function Login({ form, logInTab, signUpTab, continueNextPage }) {

    const loginForm = (<>
        <form>
            <label for='emailOrUsername'>email or username</label>
            <input id='emailOrUsername' type='text'></input>
            <label for='password'>password</label>
            <input id='password' type='text'></input>
            <input id='loggedInCheckbox' type='checkbox'></input>
            <label for='loggedInCheckbox'>stay logged in</label>
        </form>
    </>);

    const signUpForm = (<>
        <form>
            <label for='username'>username</label>
            <input id='username' type='text'></input>
            <label for='firstname'>first name</label>
            <input id='firstname' type='text'></input>
            <label for='lastname'>last name</label>
            <input id='lastname' type='text'></input>
            <label for='email'>email</label>
            <input id='email' type='text'></input>
            <label for='password'>password</label>
            <input id='password' type='text'></input>
        </form>
    </>);

    return (
        <>
            <div>
                {form ?
                    <>{loginForm}</> : <>{signUpForm}</>
                }
                <div>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <ul>
                    <li><a href='#' target='_blank'>f</a></li>
                    <li><a href='#' target='_blank'>t</a></li>
                    <li><a href='#' target='_blank'>g</a></li>
                </ul>
            </div>
            <div>
                <button onClick={logInTab}>login</button>
                <button onClick={signUpTab}>sign up</button>
            </div>
            <button onClick={continueNextPage}>continue as a guest</button>
        </>
    )

}