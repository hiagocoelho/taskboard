import { useContext, useState } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/TaskContext';

const NewTaskDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0;

    form {
        display: flex;
        flex-direction: column;
    }
`

export function NewTask ({ boardStat, fromBoard }) {
    const { appendTaskList } = useContext(TaskContext);

    const [newTaskTrigger, setNewTaskTrigger] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [tags, setTags] = useState('');

    const newTaskHandler = () => {
        if (tags === "") {
            appendTaskList({
                fromBoard: fromBoard,
                currentStat: boardStat,
                title,
                desc,
            })
            setNewTaskTrigger(false);
        } else {
            appendTaskList({
                fromBoard: fromBoard,
                currentStat: boardStat,
                title,
                desc,
                tags: tags.split(" "),
            })
            setNewTaskTrigger(false);
        }
    }

    return (
        <NewTaskDiv>
            {!newTaskTrigger && (<button type='button' onClick={() => setNewTaskTrigger(true)}>+</button>)}

            {newTaskTrigger && (
                <form onSubmit={newTaskHandler}>
                    <input
                        type="text"
                        id='title'
                        placeholder='Insert a title here:'
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id='desc'
                        placeholder='Insert a description here:'
                        onChange={e => setDesc(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id='tags'
                        placeholder='Optional tags e.g: urgent revisioning undesigned'
                        onChange={e => setTags(e.target.value)}
                        />
                    <button type="submit">Create new task</button>
                </form>
            )}
        </NewTaskDiv>
    );
}