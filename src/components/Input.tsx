import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import Button from "@mui/material/Button";

type InputPropsType = {
    callback: (title: string) => void
}


export const Input = (props: InputPropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === "Enter") {
            addTask();
        }
    }

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.callback(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }


    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <Button  variant="contained" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
                     onClick={addTask}>+</Button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};