import Link from './Links';

function Header() {
    return (
        <header>
            <Link text="Configurations" redirect="/" icon="⚙️"/>
            <Link text="Task Manager" redirect="/task-manager" icon="📝"/>
        </header>
    )
}

export default Header;