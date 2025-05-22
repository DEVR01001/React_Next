import Link from "next/link";

export function Header(){

    return(

        <header>
        <nav className="nav-bar">
          <ul>
            <Link className="item" href='/'>Home</Link>
            <Link className="item" href='/register'>Register</Link>
            <Link className="item" href='/login'>Login</Link>
          </ul>
        </nav>
      </header>

    )
}