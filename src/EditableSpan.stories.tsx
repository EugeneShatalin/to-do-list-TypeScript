import React from 'react';
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "./EditableSpan";

export default {
    title: 'EditableSpan Stories',
    component: EditableSpan
}

export const EditableSpanBaseExample = (props: any) => {
    return (<EditableSpan
           value={'start value'} onChange ={action('value Change')}
        />
    )
}