import CardContainer from "../components/card"
import thatsmyjam from "../assets/thatsmyjam.jpeg"
import workout from "../assets/workout.jpeg"
import coding from "../assets/codingquiz.jpeg"
import Ecommerce from "../assets/Ecommerce.jpeg"
import Social from "../assets/Social.jpeg"
import Tracker from "../assets/Employee-Tracker.jpeg"
import erics from "../assets/ericsemporium.jpeg"
function Portfolio () {
   const data = [
    {
        title:"Thats My Jam",
        github:"https://github.com/jibba6/Thats-My-Jam",
        live:"https://jibba6.github.io/Thats-My-Jam/",
        img:{thatsmyjam},
    },
    {
        title:"workout",
        github:"https://github.com",
        live:"https://github.com",
        img:{workout},
    },
    {
        title:"coding quiz",
        github:"https://github.com/jibba6/Homework-4",
        live:"https://jibba6.github.io/Homework-4/",
        img:{coding},
    },
    {
        title:"E-Commerce-Back-End",
        github:"https://github.com/jibba6/E-commerce-Back-End",
        img:{Ecommerce},
    },
    {
        title:"Social-Network-Api",
        github:"https://github.com/jibba6/Social-Network-Api",
        img:{Social},
    },
    {
        title:"Erics-Emporium",
        github:"https://github.com/ccottrell52/E-commerce-Project3",
        live:"https://erics-emporium.herokuapp.com/"
        img:{erics}
    }
    
   ]
    return (
        <div className="row">
            {data.map(project => (
                <CardContainer title= {project.title} github = {project.github} live = {project.live} img = {project.img} />
            ))}
            
        </div>
    )
};
export default Portfolio