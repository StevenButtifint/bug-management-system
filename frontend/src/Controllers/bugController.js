import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    let sorted = data.sort((a, b)=>{return a.priority - b.priority})
    return sorted;
}