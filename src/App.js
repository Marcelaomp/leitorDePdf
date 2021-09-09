import NavBar from "./components/NavBar";
import GlobalContext from "./context/index";
import Dropzone from "./components/Dropzone/index";
import Readzone from "./components/Readzone";

function App() {
  return (
    <>
      <NavBar/>
      <div className="container px-4 py-5 my-2">
        <div className="row">
          <GlobalContext>
            <div className="col">
              <Dropzone/>
            </div>
            <div className="col">
              <Readzone/>
            </div>        
          </GlobalContext>
        </div>
      </div>
    </>
  );
}

export default App;
