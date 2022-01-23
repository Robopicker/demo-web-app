let testingRef = null
export const setTestingRef = (ref) => {
    console.log("please set ref", ref)
    if (ref) testingRef = ref
}

export const getTestingRef = () => testingRef