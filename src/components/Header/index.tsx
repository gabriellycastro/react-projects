import Link from './Links';

function Header() {
    return (
        <header>
            <Link text="Configurations" redirect="/" icon="⚙️"/>
            <Link text="Task Manager" redirect="/task-manager" icon="📝"/>
            <Link text="👍🏼Like 👎🏼Dislike" redirect="/like-dislike" icon=""/>
        </header>
    )
}

export default Header;