import './styles.css';
import { ReactComponent as GithubIcon } from './github.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'

function Footer() {
    return(
        <footer className="main-footer">
            App desenvolvido por Leonardo Luiz Alonso
            <div className="footer-icons">
                <a href="https://github.com/Leonardo-wl" target="_new">
                    <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/leonardo-luiz-alonso-0785351a1/" target="_new">
                    <LinkedinIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer; 
