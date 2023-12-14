import React from "react";

const useGetComponentPropertyTypes = props => {
    //icon component
    const { icon } = props;
    //get class name
    let iconClass = "";

    if(icon.status==="available"){
        const {
            value:{iconClass:className} 
        }=icon;
        iconClass =className;
    }
    // image component
    const {productImage} = props;
    let imageURL = "";
    if(productImage.status==="available"){
        imageURL =productImage.value.uri;
    }
    return { iconClass,imageURL };
};

export default useGetComponentPropertyTypes;
