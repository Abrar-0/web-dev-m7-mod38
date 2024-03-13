// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

//way 2
// export default function Todo({task, isDone}){
//     return <li>{isDone ? 'Finished' : 'Work On'}: {task}</li>
// }

//way 3
// export default function Todo({task, isDone}){
//     return <li>{task} {isDone && ':Done' }</li>
// }

//way4
export default function Todo({task, isDone}){
    return <li>{task} {isDone || ':Do it' }</li>
}


