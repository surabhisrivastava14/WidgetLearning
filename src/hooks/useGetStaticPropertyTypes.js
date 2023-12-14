import React from "react";

const useGetStaticPropertyTypes = props => {
    const { staticStr, staticMultiLineStr, staticBool, staticInt, staticDecimal:stdDecimal, staticEnum } = props;

    return { staticStr, staticMultiLineStr, staticBool, staticInt, staticDecimal:parseFloat(stdDecimal), staticEnum };
};

export default useGetStaticPropertyTypes;
