export enum Status {
    todo = "TODO",
    inProgress = "INPROGRESS",
    done = "DONE"

} 

export type Task = {
    taskId : string,
    title : string,
    status : Status,
    description : string,
    createdOn : Date,
    completedOn? : Date
}