import React, {ChangeEvent, useState} from "react";
import { TextField } from "@material-ui/core";

type PropsTypeEditableSpan = {
    value: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: PropsTypeEditableSpan) {
    let [editMode, seteditMode] = useState(false);
    let [title, setTitle] = useState(props.value)

    const activateEditMode = () => {
        seteditMode(!editMode);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <TextField
            value={title}
            autoFocus
            onBlur={activateEditMode}
            onChange={changeTitle}
            variant="outlined"
        />
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
}
