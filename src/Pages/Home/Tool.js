import React, { useEffect, useState } from "react";
import Tools from "./Tools";
import "./Tool.css";

const Tool = () => {
  const [tool, setTools] = useState([]);
  const [products, setProducts] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="tool-title">
      <h2 className="m-5 text-3xl text-secondary">Our Tools</h2>
      <div className="tool-container">
        {tool.map((tools) => (
          <Tools key={tools._id} tools={tools}
          setProducts={setProducts}
          ></Tools>
        ))}
      </div>
    </div>
  );
};

export default Tool;
