import React, { createElement, useState } from "react";
import Big from "big.js";
import "./ui/Widgetlearningmendix.css";
import useGetStaticPropertyTypes from "./hooks/useGetStaticPropertyTypes";
import useGetComponentPropertyTypes from "./hooks/useGetComponentPropertyTypes";
import useGetDynamicPropertyType from "./hooks/useGetDynamicPropertyType";
import column from "./components/column";

export function Widgetlearningmendix(props) {
    const staticWidgetTypes = useGetStaticPropertyTypes(props);
    const { iconClass, imageURL } = useGetComponentPropertyTypes(props);
    const { priceColor, textTemp, widgetContent, onChangePrice, productPrice, setPriceValue, objectType } =
        useGetDynamicPropertyType(props);

    console.warn("props", props);

    return (
        <>
            <div className="mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid">
                <div className="row">
                    <column>
                        <h3> Static Widget Types</h3>
                        {Object.keys(staticWidgetTypes).map(key => {
                            return (
                                <div>
                                    <strong>{key}</strong>
                                    {":" + staticWidgetTypes[key]}
                                </div>
                            );
                        })}
                    </column>
                    <column>
                        <h3> Component Widget Types</h3>
                        <h6>Icon</h6>
                        <span className={"glyphicon " + iconClass}></span>
                        <h6>Image</h6>
                        <img src={imageURL} width={100} height={100}></img>
                    </column>
                    <column>
                        <h3> Dynamic Widget Types</h3>
                        <h6>Expression Type</h6>
                        <div
                            style={{
                                backgroundColor: priceColor
                            }}
                        >
                            Price Color
                        </div>
                        <h6>Text Template Type</h6>
                        <div>{textTemp}</div>
                        <h6>Widget Type</h6>
                        <div>{widgetContent}</div>
                        <h6>Action Widget Type</h6>
                        <div>
                            <button className={"btn btn-primary"} onClick={onChangePrice}>
                                change Price
                            </button>
                        </div>
                        <h6>Attribute Widget Type</h6>
                        <div>Product Price = {productPrice}</div>
                        <div>
                            <button
                                className={"btn btn-primary"}
                                onClick={() => setPriceValue(new Big(Math.random() * 100))}
                            >
                                change Price from Widget
                            </button>
                        </div>
                        <h6>Object Widget Type</h6>
                        {objectType.map(object => {
                            const { objectBool, objectString, objectAction } = object;
                            return (
                                <div>
                                    <p>objectBool : {objectBool.toString()}</p>
                                    <p>objectString : {objectString}</p>
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => {
                                            if (objectAction && objectAction.canExecute) {
                                                objectAction.execute();
                                            }
                                        }}
                                    >
                                        {objectString}
                                    </button>
                                </div>
                            );
                        })}
                    </column>
                </div>
            </div>
        </>
    );
}
