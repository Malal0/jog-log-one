import '../SCSS/Login.scss'
import eye from '../images/eye.svg'

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
                <img src={eye} alt='Eye' />
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
                <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fpng-file-name-real-eye-1000.png&f=1&nofb=1&ipt=ad2ca21c03cc890b8e7a49b6a4ac1e91818faf1b7dc0aa4a8caf3522fb243dd7&ipo=images' alt='Eye' />
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
                    <li><a href='https://www.facebook.com/' target='_blank' rel="noreferrer">f</a></li>
                    <li><a href='https://twitter.com/' target='_blank' rel="noreferrer">t</a></li>
                    <li><a href='https://www.google.com/' target='_blank' rel="noreferrer">g</a></li>
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