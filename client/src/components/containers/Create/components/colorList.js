import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const GreyRadio = withStyles({
    root: {
        color: '#807c7c',
        '&$checked': {
            color: '#807c7c',
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const BlueRadio = withStyles({
    root: {
        color: '#2196f3',
        '&$checked': {
            color: '#2196f3',
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const RedRadio = withStyles({
    root: {
        color: '#f50057',
        '&$checked': {
            color: '#f50057',
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const BlackRadio = withStyles({
    root: {
        color: '#000',
        '&$checked': {
            color: '#000',
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

const ColorList = () => {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <div>
            <GreyRadio
                checked={selectedValue === 'a'}
                onChange={handleChange}
                value="a"
                name="color"
                aria-label="A"
            />
            <BlueRadio
                checked={selectedValue === 'b'}
                onChange={handleChange}
                value="b"
                name="color"
                aria-label="B"
            />
            <RedRadio
                checked={selectedValue === 'c'}
                onChange={handleChange}
                value="c"
                name="color"
                aria-label="C"
            />
            <BlackRadio
                checked={selectedValue === 'd'}
                onChange={handleChange}
                value="d"
                color="default"
                name="color"
                aria-label="D"
            />
        </div>
    );
}

export default ColorList;
