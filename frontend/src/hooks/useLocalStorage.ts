import {useState} from "react";

type ReturnType<T> = [value: T, (newValue: T) => void]

export default function useLocalStorage<T>(key: string, defaultValue: T): ReturnType<T> {
    const storedValue = localStorage.getItem(key);
    const parsedValue = storedValue ? JSON.parse(storedValue) : defaultValue;

    const [value, setValue] = useState<T>(parsedValue);

    function setNewValue(newValue: T) {
        setValue(newValue)
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value, setNewValue]
}
