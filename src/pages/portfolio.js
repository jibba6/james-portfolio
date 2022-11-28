import CardContainer from "../components/card"

function Portfolio () {
   const data = [
    {
        title:"Thats My Jam",
        github:"https://github.com/jibba6/Thats-My-Jam",
        live:"https://jibba6.github.io/Thats-My-Jam/",
        img:"#",
    },
    {
        title:"workout",
        github:"https://github.com",
        live:"https://github.com",
        img:"#",
    },
    {
        title:"coding quiz",
        github:"https://github.com/jibba6/Homework-4",
        live:"https://jibba6.github.io/Homework-4/",
        img:"#"
    },
    {
        title:"E-Commerce-Back-End",
        github:"https://github.com/jibba6/E-commerce-Back-End",
        img:"#",
    },
    {
        title:"Social-Network-Api",
        github:"https://github.com/jibba6/Social-Network-Api",
        img:"#",
    },
    {
        title:"Employee Tracker",
        github:"https://github.com/jibba6/Employee-Tracker",
        live:"https://jibba6.github.io/Employee-Tracker/",
        img:"#"

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