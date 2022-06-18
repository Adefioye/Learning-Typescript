export const stringToDate = (dateString: string): Date => {
    const numberArray = dateString.split("/").map((item: string): number => {
        return parseInt(item)
    })

    return new Date(numberArray[2], numberArray[1] - 1, numberArray[0])
}