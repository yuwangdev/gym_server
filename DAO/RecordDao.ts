import * as Collections from 'typescript-collections';
import { Record } from '../Model/Record'
import { ConfigParameter } from '../config';
import { ItemList } from '../Service/ItemListService';
import { StepRecordSaveDao } from './StepSaveDao';


export class RecordDao {

    private allIndexedItemMap: Collections.Dictionary<string, object>;
    private stepRecordSaveDao: StepRecordSaveDao;

    constructor() {
        console.log("checking the existence of Record collection");
        this.allIndexedItemMap = ItemList.getAllIndexedItemsMap();
        this.stepRecordSaveDao = new StepRecordSaveDao();
    }


    public insertRecord(newRecord: Record, callBack: (flag: boolean) => void) {

        // remove the records in step save record table 
        this.stepRecordSaveDao.deleteTransitionalRecordByTransitionalRecordId(newRecord.recordId, newRecord.userId, newRecord.gymId);

        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);
            dbo.collection(ConfigParameter.db_collection_record).insertOne(newRecord, function (err, res) {
                if (err) throw err;
                console.log("1 new Gym is created of the gym Id %s", newRecord.recordId);
                callBack(true);
                db.close();
            });
        });
    }

    public findAllRecordByUserId(userId: string, callBack: (inputArray: Array<Record>) => void) {
        console.log("receive the data for findRecordByUserId, %s", userId);
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(ConfigParameter.db_name);
            var query = { userId: userId };
            dbo.collection(ConfigParameter.db_collection_record).find(query).toArray(function (err, result: Array<Record>) {
                if (err) throw err;
                console.log("get the length of result for  ConfigParameter findAllRecordByUserId: " + result.length)
                callBack(result);
                db.close();
            });
        });
    }

    public findAllRecordByGymId(gymId: string, callBack: (inputArray: Array<Record>) => void) {
        console.log("receive the data for findAllRecordByGymId, %s", gymId);
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(ConfigParameter.db_name);
            var query = { gymId: gymId };
            dbo.collection(ConfigParameter.db_collection_record).find(query).toArray(function (err, result: Array<Record>) {
                if (err) throw err;
                console.log("get the length of result for  ConfigParameter findAllRecordByGymId: " + result.length)
                callBack(result);
                db.close();
            });
        });
    }







}