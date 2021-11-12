import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id: 123456788,
        name: "create page scale error",
        details:"text can scale out of frame",
        steps: "open application and view bugs",
        version: "v1.0",
        assigned: "Staff Member 1",
        creator: "Admin 1",
        priority: 1,
        time: "13:37",
    }))

    data.push(new bugModel({
        _id: 123456789,
        name: "bug deadline not showing",
        details:"no deadline for bugs",
        steps: "view bug details page",
        version: "v1.0",
        assigned: "Staff Member 1",
        creator: "Admin 1",
        priority: 2,
        time: "13:37",
    }))

    data.push(new bugModel({
        _id: 123456790,
        name: "bug detail doesnt show priority tag",
        details:"crashes after 3 seconds",
        steps: "open application and it will crash",
        version: "v1.0",
        assigned: "Staff Member 2",
        creator: "Admin 1",
        priority: 3,
        time: "23:38",
    }))

    data.push(new bugModel({
        _id: 123456791,
        name: "app version dropdown",
        details:"app version takes any input",
        steps: "to go create bug page",
        version: "v1.0",
        assigned: "Staff Member 3",
        creator: "Admin 1",
        priority: 3,
        time: "11:22",
    }))

    data.push(new bugModel({
        _id: 123456792,
        name: "bug filtering not showing",
        details:"no filter button on view mode",
        steps: "go to view bugs",
        version: "v1.0",
        assigned: "Staff Member 2",
        creator: "Admin 1",
        priority: 3,
        time: "9:45",
    }))

    let sorted = data.sort((a, b)=>{return a.priority - b.priority})
    return sorted;
}