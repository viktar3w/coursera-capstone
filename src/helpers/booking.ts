
export type ContantStateType = {
    availableTimes: string[]
}
export const seededRandom: (seed: number) => () => number = (seed: number) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return () =>  (s = s * a % m) / m;
}
export const fetchAPI = (date: Date): string[] => {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const initialState: ContantStateType = {
    availableTimes:  fetchAPI(new Date())
}
export const submitAPI = (formData: any) => {
    return true;
};
export function updateTimes(state: ContantStateType, date: string) {
    return {availableTimes: fetchAPI(new Date(date))}
}