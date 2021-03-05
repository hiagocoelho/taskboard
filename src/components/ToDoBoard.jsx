import { useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/TaskContext';
import { NewTask } from './NewTask';

const Div = styled.div`
    margin: 0 3rem;
    width: 20rem;
    background-color: #ececec;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 3px 5px;
    height: max-content;

    @media(max-width: 800px) {
        width: 10rem;
    }

    span {
        text-align: center;
    }

    div {
        width: 100%;
        margin: 3px 0;
        background-color: white;
    }

    div > span {
        margin: 0 3px;
        color: #110000;
        background-color: #8bca8b;
    }

    section {
        margin-top: .5rem;
    }
`

export function ToDoBoard ({ fromBoard }) {
    const { tasks, deleteTask, updateCurrentStat } = useContext(TaskContext);

    return (
        <Div>
                <span>To do</span>
                {tasks.map((task, id) => {
                    if (task.currentStat === 'to-do' && task.fromBoard === fromBoard) {
                        return (
                            <div key={id}>
                                <strong>{task.title}</strong>
                                <p>{task.desc}</p>
                                { task.tags && (
                                    task.tags.map((tag, id) => {
                                        return <span key={id}>{tag}</span>
                                    })
                                )}
                                <section>
                                <select
                                onChange={e => updateCurrentStat(id, e.target.value)}
                                >
                                    <option value={task.currentStat}>To do</option>
                                    <option value="doing">Doing</option>
                                    <option value="done">Done</option>
                                </select>
                                <button type='button' onClick={() => deleteTask(task)}>Remove</button>
                                </section>
                            </div>
                        )
                    }
                })}
                <NewTask boardStat='to-do' fromBoard={fromBoard}/>
        </Div>
    );
}