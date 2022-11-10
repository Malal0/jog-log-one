import '../SCSS/Login.scss'

export default function Login({ form, logInTab, signUpTab, continueNextPage }) {

    const loginForm = (<>
        <form>
            <div>
                <label for='emailOrUsername'>email or username</label>
                <input id='emailOrUsername' type='text'></input>
            </div>
            <div>
                <label for='password'>password</label>
                <input id='password' type='text'></input>
            </div>
            <div>
                <input id='loggedInCheckbox' type='checkbox'></input>
                <label for='loggedInCheckbox'>stay logged in</label>
            </div>
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
        <div className='login'>
            <div className="form-container">
                {form ?
                    <>{loginForm}</> : <>{signUpForm}</>
                }
                <div className='or-container'>
                    <hr />
                    <p>or</p>
                    <hr />
                </div>
                <ul>
                    <li><a href='https://www.facebook.com/' target='_blank' rel="noreferrer">f</a></li>
                    <li><a href='https://twitter.com/' target='_blank' rel="noreferrer">t</a></li>
                    <li><a href='https://www.google.com/' target='_blank' rel="noreferrer">g</a></li>
                </ul>
            </div>
            <div className='login-tab-container'>
                <button onClick={logInTab}>login</button>
                <button onClick={signUpTab}>sign up</button>
            </div>
            <button className='centered-btn' onClick={continueNextPage}>continue as a guest</button>
        </div>
    )

}