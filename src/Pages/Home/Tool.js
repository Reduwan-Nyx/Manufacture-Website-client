import React, { useEffect, useState } from 'react';
import Tools from './Tools';
import './Tool.css'

const Tool = () => {
    const [tool, setTools] = useState([])

    useEffect( ()=>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='tool-title'>
            <h2 className="m-5 text-3xl text-secondary">Our Tools</h2>
            <div className="tool-container">
                {
                    tool.map(tools => <Tools
                    key={tools.id}
                    tools={tools}
                    ></Tools>)
                }
            </div>
            
        </div>
    );
};

export default Tool;