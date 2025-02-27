import { useCallback, useState } from "react";

function useCount(count: number) {
    const [curCount, setCount] = useState(count);

    const increment = useCallback(() => {
        setCount((prevValue) => prevValue + 1)
    }, []);

    const decrement = useCallback(() => {
        setCount((prevValue) => prevValue - 1)
    }, []);

    return {curCount, increment, decrement};
}

export default useCount;