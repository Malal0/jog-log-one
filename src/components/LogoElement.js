import LogoImg from '../images/running-man.svg';
import '../SCSS/Logo.scss'

export default function LogoElement() {
    return (
        <div className='logoElement'>
            <div className='logo'></div>
            {/* <img src={LogoImg} alt='Logo' /> */}
            <h1>jog log</h1>
        </div>
    )
}