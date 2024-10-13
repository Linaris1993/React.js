import './App.css';
import Header from "./Header";
import React, {useState} from "react";
import TaskList from "./TaskList";
import TopMenu from "./TopMenu";
import MainMenu from "./MainMenu";
import Logo from "./Logo";
import Contact from "./Contact";


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
    const initialCounters = [
        {
            id: 123,
            value: 10
        },
        {
            id: 456,
            value: 200
        },
        {
            id: 'sdfg',
            value: -300
        }
    ]

    const [counts, setCounts] = useState(initialCounters);

    const minus = (id) => {
        const updatedCounts = counts.map(el => el.id === id ? {...el, value: el.value - 1} : el)
        setCounts(updatedCounts)
    };

    const plus = (id) => {
        const updatedCounts = counts.map(el => el.id === id ? {...el, value: el.value + 1} : el)
        setCounts(updatedCounts)
    };

    const addCounter = () => {
        const newCount = {
            id: Math.random(),
            value: 0
        };

        setCounts([...counts, newCount])
    };

    const [count, setCount] = useState(5);

    const plusBtn = () => {
        setCount(count + 1)
    };
    const minusBtn = () => {
        setCount(count - 1)
    };

    const [nameInput, setName] = useState('react lesson');
    const changeName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    };

    const [num1, setNumber1] = useState(0);
    const [num2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);
    const [operand, setOperand] = useState('+');

    const changeNum1 = (e) => {
        setNumber1(+e.target.value)
        changeNumberOrOperand(+e.target.value, num2, operand)
    };

    const changeNum2 = (e) => {
        setNumber2(+e.target.value)
        changeNumberOrOperand(num1, +e.target.value, operand)
    };

    const changeOperand = (e) => {
        const operand = e.target.value;
        changeNumberOrOperand(num1, num2, operand)
        setOperand(operand)
    };

    const changeNumberOrOperand = (n1, n2, opnd) => {
        if(opnd === '+') setResult(n1 + n2)
        if(opnd === '-') setResult(n1 - n2)
        if(opnd === '*') setResult(n1 * n2)
        if(opnd === '/') setResult(n1 / n2)
    };

    return (
        <div className="App">
            <button onClick={minusBtn}>Minus</button>
            {count}
            <button onClick={plusBtn}>Plus</button>

            <hr/>
            <button>Add counter</button>

            <Header/>
            {hello(name)}

            <ul>
                {names.map(el => <li key={el.id}>{el.title} {el.phone}</li>)}
            </ul>

            <button onClick={helloClick}>Hello again</button>
            <button onClick={() => console.log('Plus')}>Plus</button>
            <button onClick={() => plusNumber(123)}>Plus Number</button>

            <hr/>

            <input onChange={onChangeName}/>

            <Logo
                siteName={siteName}
            />

            <TaskList
                siteName={appName}
                appVersion={version}
            />

            <TopMenu
                appVersion={version}
            />

            <MainMenu
                siteName={siteName}
                isPublic={isPublic}
                owner={owner}
                courses={courses}
            />

            <Contact name='some name'>
                <h4>Hello</h4>
                <div>Description</div>
            </Contact>

            <ul>
                {counts.map(el => (
                    <li key={el.id}>
                        <button onClick={() => minus(el.id)}>Minus</button>
                        {el.value}
                        <button onClick={() => plus(el.id)}>Plus</button>
                    </li>
                ))}
            </ul>
            <button onClick={addCounter}>Add counter</button>

            <h3>{nameInput}</h3>
            <input value={nameInput} onChange={changeName}/>

            <input value={num1} onChange={changeNum1}/>
            <select value={operand} onChange={changeOperand}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input value={num2} onChange={changeNum2}/>
            <h4>{num1} {operand} {num2} = {result}</h4>
        </div>
    );
}

export default App;
