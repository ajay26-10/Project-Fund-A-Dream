// import React from 'react'
// import { useEffect, useState } from 'react'
// import ProjectCard from '../components/ProjectCard'
// import UserNav from '../components/UserNav';

// const AllProjects = () => {

//     const [project, setProject] = useState([]);
//     const [projects, setProjects] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');

//     useEffect(() => {
//         const fetchProjects = async () => {
//             try{
//                 const res = await fetch('api/projects')
//                 const data = await res.json()
//                 setProject(data)
//             }catch(error){
//                 console.log('error', error)
//             }
//         };
//         fetchProjects();
//     },[])

//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     const filteredProjects = projects.filter(project =>
//         project.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );


//   return (
//     <>
//             <UserNav/>
//             <div className='text-3xl text-center mt-2 font-black'>ALL PROJECTS</div>
//             <input
//                 type="text"
//                 placeholder="Search projects"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className="mt-4 p-2 border border-gray-300 rounded"
//             />
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
//                 {filteredProjects.map((project) => (
//                     <ProjectCard key={project._id} project={project} />
//                 ))}
//             </div>

//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
//                     {project.map((project) => (
//                         <ProjectCard key={project._id} project={project} />
                        
//                     ))
                    
//                     }
                    
//                 </div>
//     </>
//   )
// }

// export default AllProjects

import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import UserNav from '../components/UserNav';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch('api/projects');
                const data = await res.json();
                setProjects(data);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchProjects();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <UserNav />
            <div className='text-3xl text-center mt-6 font-black'>ALL PROJECTS</div>
            <input
                type="text"
                placeholder="Search Projects"
                value={searchTerm}
                onChange={handleSearchChange}
                className="mt-4 p-2 ml-[76rem] border border-gray-300 rounded"
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
                {filteredProjects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </>
    );
};

export default AllProjects;
