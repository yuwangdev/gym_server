import { RecordDao } from '../DAO/RecordDao';
import { ItemList } from './ItemListService';
import { Record, Group, RecordItem } from '../Model/Record';

export class RecordService {

    /**
     * insertRecord
     */
    public generateOneRecordForInsert(
        userId: string,
        gymId: string,
        recordItems: Array<RecordItem>
    ): Record {

        let timeStamp = new Date().toLocaleDateString() + "#####" + new Date().toLocaleTimeString();
        let res: Record =
            {
                recordId: "record" + timeStamp,
                userId: userId,
                gymId: gymId,
                timeStamp: timeStamp,
                recordItems: recordItems

            };
        return res;



        // "recordId":"recordId1234524/21/2018#####8:24:19 PM",
        // "userId":"u1",
        // "gymId":"g12",
        // "timeStamp":"4/21/2018#####8:24:19 PM",

        // "recordItems":[
        //     {
        //        "recordItemId":"anaerobic.leg.Leg1",
        //        "work":[
        //           {
        //              "workload":1212,
        //              "times":222,
        //              "durationInSec":121231
        //           },
        //           {
        //              "workload":12,
        //              "times":22,
        //              "durationInSec":131
        //           },
        //           {
        //              "workload":12,
        //              "times":212,
        //              "durationInSec":12
        //           }
        //        ]
        //     },



    }


    












}
