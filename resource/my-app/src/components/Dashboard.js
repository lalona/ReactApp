class Dashboard extends React.Component {
    render() {
        return <div className="s-layout ">
        <div className="s-layout__sidebar">
          <a className="s-sidebar__trigger" href="#0">
            <i className="fa fa-bars"><img src="/local/static/forecast-dashboard/img/icons/menu.png" /></i>
          </a>
          <nav className="s-sidebar__nav">     
            <ul className="links titulos">
              <li>
                <a href="/" className="logo"> 
                  <img src="/local/static/forecast-dashboard/img/brand/jnjlogo.png" className alt="J&J logo" style={{width: '50px'}} />
                </a>
              </li><br /><br />
              <li>
                <a className="s-sidebar__nav-link" href="#0">
                  <i><span className="material-icons texto-azul">
                      grid_view
                    </span></i><p className="texto-azul navtext">Dashboard</p>
                </a>
              </li>
              <li>
                <a className="s-sidebar__nav-link" href="#0">
                  <i><span className="material-icons texto-gris ">
                      person_outline
                    </span></i><p className="texto-gris navtext">Profile</p>
                </a>
              </li>
              <li className="bottom-link">
                <a className="s-sidebar__nav-link" href="#0"> 
                  <i><span className="material-icons texto-gris">
                      logout
                    </span></i><p className="texto-gris navtext">LogOut</p>
                </a>
                <div className="texturacontainer">
                  <img className="texturaitem" src="/local/static/forecast-dashboard/img/texture.png" /> 
                </div>
              </li>
            </ul>
          </nav>
        </div>
        {/* Content */}
        <main className="s-layout__content">
          <div className="main">
            <nav className="navbar navbar-top navbar-expand navbar-dark border-bottom ">
              <div className="navtop">
                <div className="buscador d-flex">
                  {/* Search */}
                  <div className="w-100">
                    {/* Search form */}
                    <div className="w-100">
                      <input className="form-control text text-sm " placeholder="Search" type="text" />
                    </div>
                  </div>
                  {/* Filter */}
                  <div className="dropdown ml-3">
                    <button className="btn fondo-gris dropdown-toggle texto-gris titulos" type="button" data-toggle="dropdown">
                      <img src="/local/static/forecast-dashboard/img/icons/sort.png" style={{height: '20px', opacity: '.5'}} />
                      Filter
                      <span className="caret" /></button>
                    <ul className="dropdown-menu" style={{padding: '20px'}}>
                      <li><a className="titulos-bold text-sm" style={{color: '#9192A9'}}>Business Unit</a></li>
                      <li><a className="titulos text-dark text-sm" href="#">Endoscopy</a></li>
                      <li><a className="titulos text-dark text-sm" href="#">Energy</a></li>
                      <li><a className="titulos text-dark text-sm" href="#">Packaging</a></li>
                      <li><a className="titulos-bold text-sm" style={{color: '#9192A9'}}>Sort By</a></li>
                      <li><a className="titulos text-dark text-sm" href="#">Over de goal </a> <a className=" titulos-bold"> ↑</a></li>
                      <li><a className="titulos text-dark text-sm" href="#">Under de goal </a><a className=" titulos-bold"> ↓</a></li>
                    </ul>
                  </div>
                </div>
                {/* Picture*/}
                <div className="imagen">
                  <ul className="navbar-nav align-items-right  ml-auto ml-md-0">
                    <li className="nav-item d-sm-none w-100">
                      <a className="nav-link" href="#" data-action="search-show" data-target="#navbar-search-main">
                        <i className="ni ni-zoom-split-in" />
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="media align-items-right text-right">
                          <div className="media-body  ml-2  d-none d-lg-block">
                            <span className="mb-0 text-sm  titulos-bold text-dark pr-3 pb-0  ">
                              Ericka
                            </span><br />
                            <span className="mt-0 text-sm  font-weight-bold text-dark pr-3 titulos">
                              UX UI
                            </span>
                          </div>
                          <span className="avatar avatar-sm rounded-circle">
                            <img alt="Image placeholder" src="/local/static/forecast-dashboard/img/theme/team-4.jpg" />
                          </span>
                        </div>
                      </a>
                      <div className="dropdown-menu  dropdown-menu-right ">
                        <a href="/profile.html" className="dropdown-item">
                          <i className="ni ni-single-02" />
                          <span>My profile</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="{% url 'logout' %}" className="dropdown-item">
                          <i className="ni ni-user-run texto-gris" />
                          <span>Logout</span>
                        </a>
                      </div>
                    </li>
                  </ul> 
                </div>
              </div>
            </nav>
            {/* Header */}
            <div className="header bg-white p-0">
              <div className="container-fluid">
                <div className="header-body">
                  <div className="row align-items-center py-0">
                    <div className="col-lg-6 col-7">
                      {/*<h6 class="h2 text-white d-inline-block mb-0">Default</h6>*/}
                      <nav aria-label="breadcrumb" className=" d-none d-md-inline-block">
                        <ol className="breadcrumb breadcrumb-links bg-white  m-0 p-0 pb-3">
                          <li className="mr-3 texto-gris titulos ml-0 pl-0 text-med" aria-current="page">Endoscopy</li>
                          {/*<li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>*/}
                          <li className="mr-3 "><a href="#" className="texto-azul titulos">Energy</a></li>
                          <li className="mr-3 "><a href="#" className="texto-azul titulos">Packaging</a></li>
                        </ol>
                      </nav><br />
                      <div className="d-block d-sm-none dropdown dropdown-menu-right">
                        <button className="btn bg-white dropdown-toggle texto-azul titulos-bold" type="button" data-toggle="dropdown">Endoscopy
                          <span className="caret" /></button>
                        <ul className="dropdown-menu">
                          <li><a className="p-3 text-sm text titulos-bold texto-gris" href="#">HTML</a></li>
                          <li><a className="p-3 text-sm text titulos-bold texto-gris" href="#">CSS</a></li>
                          <li><a className="p-3 text-sm text titulos-bold texto-gris" href="#">JavaScript</a></li>
                        </ul>
                      </div>
                      <div className="dropdown dropdown-menu-right">
                        <button className="btn fondo-gris dropdown-toggle texto-gris titulos" type="button" data-toggle="dropdown">
                          <img src="/local/static/forecast-dashboard/img/icons/sort.png" style={{height: '20px', opacity: '.5'}} />
                          None
                          <span className="caret" /></button>
                        <div className="dropdown-menu filters">
                          <p className="titulos-bold texto-gris text-sm">Families</p>
                          <label className="container titulos text-sm">All
                            <input type="checkbox" defaultChecked="checked" />
                            <span className="checkmark" />
                          </label>
                          <label className="container titulos text-sm">ACCESS
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <label className="container titulos text-sm">DEXTRUS
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <label className="container titulos text-sm">ENDOPOUCH
                            <input type="checkbox" />
                            <span className="checkmark" />
                          </label>
                          <button className=" btn-gray titulos-bold text-sm botones">Cancel</button>
                          <button className=" btn-blue titulos-bold text-sm botones">Ok</button>
                        </div>
                      </div>
                      <i className="text-sm texto-gris">Showing 0 lines</i>
                    </div>
                    <div className="col-lg-6 col-5 text-right">
                      <button className="btn fondo-gris titulos-bold texto-gris" onclick="swapStyleSheet('css/grid-card.css');"> 
                        <img src="/local/static/forecast-dashboard/img/icons/grid.png" style={{height: '20px', opacity: '.5'}} />
                      </button>
                      <button className="btn fondo-gris titulos-bold texto-gris" onclick="swapStyleSheet('css/linear-card.css');">  
                        <img src="/local/static/forecast-dashboard/img/icons/linear.png" style={{height: '20px', opacity: '.5'}} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="root" className="cuerpo">
            </div>
          </div>
        </main>
      </div>
      {/* Specific JS goes HERE */};
    }
}