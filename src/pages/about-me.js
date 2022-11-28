import redsox from "../assets/redsox.jpeg"
function AboutMe () {
    return (
        <div>
            <p>My Name is James Jabar. I'm 29 years old and just finished a coding bootcamp through the university of Utah. This portfolio displays some of my work throughout my class.</p>
            <img className="portfolio-image" src={redsox}/>
        </div>

    )
};
export default AboutMe