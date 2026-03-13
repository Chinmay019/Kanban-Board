enum Status {
    todo,
    inProgress,
    done

} 

export type task = {
    taskId : string,
    title : string,
    status : Status,
    description : string,
    createdOn : Date,
    completedOn? : Date
}