export type Record = {
    recordId: string
    userId: string,
    gymId: string,
    timeStamp: string,
    recordItems: Array<RecordItem>
}

export type RecordItem = {
    recordItemId: string,
    work: Array<Group>
}


export type Group = {
    workload: number,
    times: number,
    durationInSec: number
}











