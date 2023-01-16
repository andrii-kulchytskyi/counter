import React, {useEffect, useState} from 'react';

export const Counter = () => {

    const [value, setValue] = useState<number>(0)
    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(value))
    }, [value])

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if (valueAsString !== null) {
            let numValue = JSON.parse(valueAsString)
            setValue(numValue)
        }
    }, [])

    const onClickHandler = () => {
        setValue(value + 1)
    }
    return (
        <div>
            <div>{value}</div>
            <button onClick={onClickHandler}>Insert</button>
        </div>
    );
};
