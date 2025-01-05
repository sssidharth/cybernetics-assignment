import { useState, useEffect } from 'react';

const useDebounceHook = ( value, time ) => {
    const [val, setVal] = useState(value);

    useEffect(() => {
        const delay = setTimeout(() => {
            setVal(value);
        }, time)

        return () => {clearTimeout(delay)};
    }, [time, value])

    return val;
}

export default useDebounceHook;