import React from "react";

function Logo({ siteName }) {
    //destructuring assignment
    // const sampleObject = {
    //     name: "John",
    //     age: 25
    // }
    // const name = sampleObject.name
    // const { name, age } = sampleObject

    //same as Logo function
    //function Logo(props) {
    // const { siteName } = props;
    return (
        <div>{siteName}</div>
    )
}
export default Logo;