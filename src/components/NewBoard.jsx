import { useContext, useState } from "react";
import { TaskContext } from "../contexts/TaskContext";

export function NewBoard () {
    const { createNewBoard } = useContext(TaskContext);
    const [newBoardTrigger, setNewBoardTrigger] = useState(false);
    const [newBoardName, setNewBoardName] = useState('');

    const newBoardHandler = () => {
        createNewBoard(newBoardName);
        setNewBoardTrigger(false);
    }

    return (
        <div>
            {!newBoardTrigger && (
                <button type='button' onClick={() => setNewBoardTrigger(true)}>New Board</button>
            )}
            {newBoardTrigger && (
                <form onSubmit={newBoardHandler}>
                    <input
                    type="text"
                    required
                    placeholder='Board name'
                    onChange={e => setNewBoardName(e.target.value)}
                    />
                    <button type="submit">Create new board</button>
                </form>
            )}
        </div>
    );
}