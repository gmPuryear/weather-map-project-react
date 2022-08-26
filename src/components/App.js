import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css';
import NavBar from "./NavBar";
import MapBox from './MapBox';


// COMPONENTS
// - Navbar
// - Mapbox
// - Weather card


const mapBox = process.env.REACT_APP_MAPBOX_KEY;


function App() {
    

    return (
        <div>
            <NavBar />
            <div>
                <MapBox />
            </div>
        </div>
    );
}

export default App;
