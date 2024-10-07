import React from "react";
import Logo from "./Logo";


function MainMenu(props) {
    console.log(props)

   const buyCourse = (id) => {
        console.log('buyCourse btn', id)

    }
    return (
        <>
            <Logo siteName={props.siteName} />
            <div>Visibility: {props.isPublic ? 'Public' : 'Private'}</div>
            <div>Owner: {props.owner.zip}</div>
            <div>Courses: </div>

            <ul>
                {props.courses.map(el => (
                  <li key={el.id}>
                    <strong>{el.title}</strong>, {el.price}
                   <button onClick={() => buyCourse(el.id)}>Buy</button>
                  </li>
                ))}
            </ul>
        </>
    )
}

export default MainMenu;