import CardContainer from "../components/card"

function Portfolio () {
   const data = [
    {
        title:"Thats My Jam",
        github:"https://github.com",
        live:"https://github.com",
        img:"#",
    },
    {
        title:"workout",
        github:"https://github.com",
        live:"https://github.com",
        img:"#",
    },
    
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