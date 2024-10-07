import React from "react";
import TopMenu from "./TopMenu";

function TaskList(props) {
    return (
      <ul>
        <ul>{props.siteName}</ul>
        {/*<ul>{props.appVersion}</ul>*/}
        <ul>Task3</ul>


          <TopMenu version={props.appVersion} />
          {/*<MainMenu courses={props.courses}/>*/}
      </ul>
    )
}

export default TaskList;
