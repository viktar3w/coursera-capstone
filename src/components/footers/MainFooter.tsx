import logo from "./../../assets/small_logo.png"
const MainFooter = () => {
    return (
        <footer>
            <section>
                <img src={logo} alt="footer logo" width={200} height={300}/>
            </section>
            <section>
                <h3>Document Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>Booking</li>
                </ul>
            </section>
            <section>
                <h3>Contact</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum.</li>
                </ul>
            </section>
            <section>
                <h3>Social Media Links</h3>
                <ul>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, sunt!</li>
                </ul>
            </section>
        </footer>
    )
}
export default MainFooter