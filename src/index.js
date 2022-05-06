import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Corpo from "./CorpoComponents/Corpo";
function App() {
    return (
        <div>
            <Navbar />
            <Corpo />
        </div>
    );
}
ReactDOM.render(<App />, document.querySelector(".root"));