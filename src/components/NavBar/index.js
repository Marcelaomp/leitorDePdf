import logo from '../../assets/img/icone_pdf.png'
function NavBar() {
    return (
      <>
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <div className="navbar-brand d-flex align-items-center">
                    <img src={logo} width="20" height="20" className="me-2" ></img>
                    <strong>Leitor de Pdf</strong>
                </div>
            </div>
        </div>
      </>
    );
  }

export default NavBar;