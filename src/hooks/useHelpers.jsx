const useHelpers = () => {
    const capitalizeFirstLetter = (string) => {
        if (!string) return
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return {
        capitalizeFirstLetter,
    }
}

export default useHelpers