import "./events.css";
import NavBar from "./components/navbar";
import Main from "./events-components/main";
//import PhotoDisplay from "./components/PhotoDisplay";

export default function Events() {
    return (
        <div className="App">
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap');
            </style>
            <Navbar />
            <Header />
            <Main />
        </div>
    )
}