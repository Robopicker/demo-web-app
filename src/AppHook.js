import { useEffect, useState } from "react";

function getSaveValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue
}

export function useStatus(key, intitialValue) {
    const [value, setValue] = useState('')
    return [value, setValue]
}