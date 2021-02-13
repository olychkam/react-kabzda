import React from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    component: Select
}
export const BaseExampleOne = () => <Select value={'2'} onChange={action('value change')}
                                         items={[{value: '1', title: 'Moscow'},
                                             {value: '2', title: 'Minsk'},
                                             {value: '3', title: 'Ross'},
                                         ]}/>
export const BaseExampleTo = () => <Select onChange={action('value change')}
                                         items={[{value: '1', title: 'Moscow'},
                                             {value: '2', title: 'Minsk'},
                                             {value: '3', title: 'Ross'},
                                         ]}/>