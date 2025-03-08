import { useState } from 'react';

function Todo() {
    const [ipVal, setIpvalue] = useState([]);
    const [task, setTask] = useState("");

    const hsubmit = (e) => {
        e.preventDefault();
        console.log(task);
        setIpvalue([
          ...ipVal,
          {
            value: task,
            checked: false,
          },
        ]);
        console.log(ipVal);
        setTask("");
      };

    return (
        <>
            <form className='myForm' onSubmit={hsubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <section>
                <ul>
                    {ipVal.map((todo, ind) => (
                        <li key={ind}>
                            <input
                                type="checkbox"
                                checked={todo.checked}
                                onChange={(e) => {
                                    console.log(e.target.checked, ind);
                                    ipVal[ind] = {
                                      value: ipVal[ind].value,
                                      checked: e.target.checked,
                                    };
                  
                                    setIpvalue([...ipVal]);
                                  }}
                            />
                            <span className={todo.checked ? "checked" : ""}>
                                {todo.value}
                            </span>
                            <button
                onClick={() => {
                  ipVal.splice(ind, 1);
                  setIpvalue([...ipVal]);;
                }}
              >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Todo;
