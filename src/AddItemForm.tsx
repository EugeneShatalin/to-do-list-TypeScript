import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemFromPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFromPropsType) {
    let [title, setTitle] = useState("");
    let [error, setError] = useState<string | null>(null);

    //Processing the input value in the "input"
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    //
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    const addItem = () => {
        if (title.trim() != "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    return (
        <div>
            <TextField
                variant="outlined"
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
                error={!!error}
                label="Title"
                helperText={error}
            />
            <IconButton color="primary" onClick={addItem}>
                <AddBox/>
            </IconButton>
        </div>
    )
}