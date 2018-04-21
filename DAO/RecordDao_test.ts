import { RecordDao } from './RecordDao';

let mockRecord = function () {

    let displayDate = new Date().toLocaleDateString();
    let displayTime = new Date().toLocaleTimeString();
    let timeStamp = displayDate + "#####" + displayTime;

    let recordItem1 = {
        recordItemId: "anaerobic.leg.Leg1",
        work: [
            {
                workload: 1212,
                times: 222,
                durationInSec: 121231
            },
            {
                workload: 12,
                times: 22,
                durationInSec: 131
            },
            {
                workload: 12,
                times: 212,
                durationInSec: 12
            },
        ]
    };


    let recordItem2 = {
        recordItemId: "aerobic.stairs.Stairs3",
        work: [
            {
                workload: 1414,
                times: 444,
                durationInSec: 141431
            },
            {
                workload: 14,
                times: 44,
                durationInSec: 131
            },
            {
                workload: 14,
                times: 414,
                durationInSec: 14
            },
        ]
    };





    return {
        recordId: "recordId123452" + timeStamp,
        userId: "u1",
        gymId: "g12",
        timeStamp: timeStamp,
        recordItems: [recordItem1, recordItem2]

    };






}



let recordDao = new RecordDao();

recordDao.insertRecord(mockRecord(), x => console.log(x));


recordDao.findAllRecordByUserId("u1", x => {



});


recordDao.findAllRecordByGymId("g123", x => {



});
