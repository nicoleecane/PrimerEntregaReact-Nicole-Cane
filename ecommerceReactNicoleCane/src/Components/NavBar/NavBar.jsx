import { CartWidget } from "../CartWidget/CartWidget"


export const NavBar = () => {
  return (
 <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <a className="navbar-brand" href="#">
      <img className="logoato" src="https://freepngimg.com/thumb/anime/117226-on-attack-titan-logo-download-hd.png" alt=""  width="50" height="50" class="d-inline-block align-text  "/>
      Attack On Titan
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Shop Manga</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Watch Season 4</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">All Seasons</a>
        </li>
      </ul>
      
    </div>
  </div>
  <div className="cart-widget" style={{color:"violet"}}>
        <CartWidget />
      </div>
</nav>

  </>   
  )
}

