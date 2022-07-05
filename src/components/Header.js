import React from "react";

const Header = () => {
    return (
        <div className="header">
            <h1 className="title-1"> The primary and secondary color game</h1>
             <h2 className="title-2">Click a colored box</h2>
             <h3 className="title-3"> The resulting color is the sum of the other two primary colors</h3>
        </div>
    )
}

export { Header as default };