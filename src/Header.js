import './styles/Header.css';

export default function Header() {
    return (
        <>
            <nav className="Header-nav">
                <button
                    className={'Header-btn'}
                    href="#">Фильмы</button>
                <button
                    className={'Header-btn'}
                    href="#">Выйти</button>
            </nav>
        </>
    )
}