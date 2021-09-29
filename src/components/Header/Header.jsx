import HeaderStyle from './Header.module.css'
import AuthoriseContainer from "./Authorise/AuthoriseContainer";

function Header() {
    return (
        <div className = {HeaderStyle.header}>
            <img src = "https://e7.pngegg.com/pngimages/197/457/png-clipart-round-multicolored-logo-vanamo-logo-icons-logos-emojis-tech-companies.png" alt="logo"/>
        <AuthoriseContainer/>
        </div>
    );
}

export default Header;