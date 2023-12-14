import React,{createElement} from "react";

const column = ({ children }) => {
    return <div className="col-lg col-md col">{children}</div>;
};

export default column;
