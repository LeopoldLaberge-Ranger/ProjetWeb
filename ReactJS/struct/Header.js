
function Header() {
    return (
        <header className="blog-header py-3">
            <nav className="navbar navbar-expand-lg fixed-top navbar-scroll bg-dark navbar-dark border-bottom border-5 border-info shadow-lg">
            <div className="container">
                <img src="https://i.pinimg.com/originals/bf/12/5e/bf125e4589e4c6a8d2febafc94e7a1d0.png" height="70" alt="" loading="lazy" />
                <h1 style={{ color: 'white' }}>Front-end</h1>
                <button className="navbar-toggler" 
                type="button" data-bs-toggle="collapse" 
                data-bs-target="#navbarToggler"> 
                <span className="navbar-toggler-icon"></span> 
                </button> 
                <div className="collapse navbar-collapse" id="navbarToggler"> 
                    <div className="dropdown d-md-none"> 
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row justify-content-between">
                        <li className="nav-item active">
                        <a className="nav-link" aria-current="page" href="blog.html">DS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#pets">Algorithms</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#adoptions">C++</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#foundation">C#</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#help">BootStrap</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#education">HTML</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#about">CSS</a>
                        </li>
                        <li className="nav-item">
                        <img className="nav-link" aria-current="page" href=""/>About Us
                        </li>
                    </ul>
                    </div> 
                </div> 
                <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                    <a className="nav-link" aria-current="page" href="#news">DS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#pets">Algorithms</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#adoptions">C++</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#foundation">C#</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#help">BootStrap</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#education">HTML</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#about">CSS</a>
                    </li>
                    <li className="nav-item">
                    <img className="nav-link" aria-current="page"/>About Us
                    </li>
                </ul>
                <ul className="navbar-nav flex-row">
                    <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"  width="40" height="40"/>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <div class="container">
            <header class="blog-header py-3">
                <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-5">
                </div>
                </div>
            </header>
            </div>
        </header>  
    );
}

