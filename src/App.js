import './App.css';
import Header from "./Header";
import React from "react";
import TaskList from "./TaskList";
import TopMenu from "./TopMenu";
import MainMenu from "./MainMenu";
import Logo from "./Logo";
import Contact from "./Contact";
import { useState } from 'react';

//JSX
function App() {

    const name = 'Alice';
    const hello = name => `Hello ${name}`;
    const names = [
        {
            id: '54321',
            title: 'Bob',
            phone: '789-234-11-23'
        },
        {
            id: 'sdfrtgy',
            title: 'Jim',
            phone: '234-114-45-90'
        },
        {
            id: 'vbnmn123',
            title: 'Victor',
            phone: '123-432-99-00'
        },
    ];
    const helloClick = () => {
        console.log('HELLLO')
    };

    const plusNumber = (n) => {
        console.log('Number ', n)
    };

    const onChangeName = (event) => {
        console.log(event.target.value)
    };

    const siteName = 'Local Coding';
    const appName = 'Counter Application';
    const version = 'v0.2.5';
    const isPublic = true;
    const owner = {
        name: 'PASV',
        zip: '98007',
        phone: '987-765-3399'
    }
    const courses = [
        {
            id: 'ghjkegf',
            title: 'JS',
            price: 1234
        },
        {
            id: 'ulalaa',
            title: 'React',
            price: 7654
        },
        {
            id: 'uhuuuu',
            title: 'QA',
            price: 2134
        }
    ]

    const [count, setCount] = useState(5);
    const plusBtn = () => {
        setCount(count + 1)
    };
    const minusBtn = () => {
        setCount(count -1)
    };

      return (
          <div className="App">
              <button onClick={minusBtn}>Minus</button>
              {count}
              <button onClick={plusBtn}>Plus</button>

              {/*  <Header />*/}
        {/*    {hello(name)}*/}
        {/*    <ul>*/}
        {/*    {names.map(el => <li key={el.id}>{el.title} {el.phone}</li>)}*/}
        {/*    </ul>*/}

        {/*    <button onClick={helloClick}>Hello again</button>*/}
        {/*    <button onClick={() => console.log('Plus')}>Plus</button>*/}
        {/*    <button onClick={() => plusNumber(123)}>Plus Number</button>*/}

        {/*    <hr />*/}

        {/*    <input onChange={onChangeName}/>*/}

        {/*    <Logo*/}
        {/*        siteName={siteName}*/}
        {/*    />*/}

        {/*    <TaskList*/}
        {/*        siteName={appName}*/}
        {/*        appVersion={version}*/}
        {/*    />*/}

        {/*    <TopMenu*/}
        {/*        appVersion={version}*/}
        {/*    />*/}

        {/*     <MainMenu*/}
        {/*        siteName={siteName}*/}
        {/*        isPublic={isPublic}*/}
        {/*        owner={owner}*/}
        {/*        courses={courses}*/}
        {/*     />*/}

        {/*     <Contact name='some name'>*/}
        {/*         <h4>Hello</h4>*/}
        {/*         <div>Description</div>*/}
        {/*     </Contact>*/}

        </div>
  );
}

export default App;
