import '../SCSS/Login.scss'
import facebookLogo from '../images/facebook.svg'
import twitterLogo from '../images/twitter.svg'
import googleLogo from '../images/google.svg'

export default function Login({ form, logInTab, signUpTab, continueNextPage, handleChangeTab }) {

    const loginForm = (<>
        <form>
            <label for='emailOrUsername'>email <span className='subtext'>or</span> username</label>
            <div className='input-container'>
                <input id='emailOrUsername' type='text'></input>
            </div>
            <label for='password'>password</label>
            <div className='password-grid'>
                <input id='password' type='text'></input>
                <button className='eye'></button>
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
            <div className='input-container'>
                <input id='username' type='text'></input>
            </div>
            <label for='firstname'>first name <span className='subtext'>(optional)</span></label>
            <div className='input-container'>
                <input id='firstname' type='text'></input>
            </div>
            <label for='lastname'>last name <span className='subtext'>(optional)</span></label>
            <div className='input-container'>
                <input id='lastname' type='text'></input>
            </div>
            <label for='email'>email</label>
            <div className='input-container'>
                <input id='email' type='text'></input>
            </div>
            <label for='password'>password</label>
            <div className='password-grid'>
                <input id='password' type='text'></input>
                <button className='eye'></button>
            </div>
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
                    <li><button><img src={facebookLogo} alt='facebook login' /></button></li>
                    <li><button><img src={twitterLogo} alt='twitter login' /></button></li>
                    <li><button><img src={googleLogo} alt='google login' /></button></li>
                </ul>
            </div>
            <div className='login-tab-container'>
                <button className={handleChangeTab ? 'active' : ''} onClick={logInTab}>login</button>
                <button className={handleChangeTab ? '' : 'active'} onClick={signUpTab}>sign up</button>
            </div>
            <button className='centered-btn' onClick={continueNextPage}>continue as a guest</button>
        </div>
    )

}