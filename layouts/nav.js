import Link from "next/link";

export default function Nav({ fixed }) {

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white-500 mb-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

          <Link href="/">
            <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-black"
              >
                Segmed
              </a>
          </Link>  
            
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="font-bold">...</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <Link href="/about">
                <a
                  className="px-3 py-2 flex items-center text-xs leading-snug text-black hover:text-primary-dark no-underline"
                
                >
                  <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">About</span>
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/login">
                  <a
                    className="px-3 py-2 flex items-center text-xs leading-snug text-black hover:text-primary-dark no-underline"
                  >
                    <i className="text-lg leading-lg text-black opacity-75"></i><span className="ml-2">Login</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/register">

              <button className="ml-4 px-3 bg-primary hover:bg-primary-dark text-white text-xs py-2 rounded-full">
                  Get Started
                </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}