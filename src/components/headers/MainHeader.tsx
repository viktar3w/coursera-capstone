import { Link } from "react-router-dom";
import food1 from "./../../assets/food1.avif"

const MainHeader = () => {
    return (
        <header>
            <section id="right-header">
                <h2>Little Lemon</h2>
                <h3>Kraków</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae distinctio labore vel praesentium dolorum quasi iusto dolorem consequuntur numquam laborum?</p>
                <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
            </section>
            <section id="left-header">
                <img src={food1} alt="header food" width={260} height={400}/>
            </section>
        </header>
    )
}

export default MainHeader