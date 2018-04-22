import * as Collections from 'typescript-collections';
import { Record, RecordItem, Group } from '../Model/Record'
import { ConfigParameter } from '../config';
import { ItemList } from '../Service/ItemListService';


export class StepRecordSaveDao {



    constructor() {
        console.log("checking the existence of StepRecordSave collection");
    }


    public deleteTransitionalRecordByTransitionalRecordId(
        transitionalRecordId: string,
        userId: string,
        gymId: string) {

        console.log("receive the data for deleteTransitionalRecordByTransitionalRecordId, %s", transitionalRecordId);
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);

            dbo.collection(ConfigParameter.db_collection_transitional_save_record).deleteMany({
                userId: userId,
                gymId: gymId,
                transitionalRecordId: transitionalRecordId
            }, function (err, obj) {
                if (err) throw err;
                console.log(obj.result.n + " document(s) deleted");
                db.close();
            });
        });
    }

    public findTransitionalRecordByTransitionalRecordId(
        transitionalRecordId: string,
        userId: string,
        gymId: string,
        callBack: (inputArray: Array<Record>) => void) {

        console.log("receive the data for findTransitionalRecordByTransitionalRecordId, %s", transitionalRecordId);
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);
            let query = {
                userId: userId,
                gymId: gymId,
                transitionalRecordId: transitionalRecordId
            };
            dbo.collection(ConfigParameter.db_collection_transitional_save_record).find(query).toArray(function (err, existedRecordList: Array<Record>) {
                if (err) throw err;
                console.log("get the length of result for  finding in db_collection_transitional_save_record: " + existedRecordList.length)

                callBack(existedRecordList);
                db.close();
            });
        });
    }



    /**
     * 
     * @param transitionalRecordId 
     * @param userId 
     * @param gymId 
     * @param timeStamp 
     * @param newRecordItems 
     * @param callBack 
     */
    public saveTransitionalRecord(
        transitionalRecordId: string,
        userId: string,
        gymId: string,
        timeStamp: string,
        newRecordItems: Array<RecordItem>,
        callBack: (x: boolean) => void): void {

        console.log("receive the transitionalRecordId for saveTransitionalRecord, %s", transitionalRecordId);
        console.log("receive the newRecordItems for saveTransitionalRecord, %s", JSON.stringify(newRecordItems));

        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);

            let query = {
                userId: userId,
                gymId: gymId,
                transitionalRecordId: transitionalRecordId
            };

            dbo.collection(ConfigParameter.db_collection_transitional_save_record).find(query).toArray(function (err, existedRecordList: Array<Record>) {
                if (err) throw err;
                console.log("get the length of result for  finding in db_collection_transitional_save_record: " + existedRecordList.length)

                if (existedRecordList.length == 0) {
                    console.log("there is currently no record of $s", transitionalRecordId);

                    ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
                        if (err) throw err;
                        let dbo = db.db(ConfigParameter.db_name);
                        dbo.collection(ConfigParameter.db_collection_transitional_save_record).insertOne({
                            recordId: transitionalRecordId,
                            userId: userId,
                            gymId: gymId,
                            timeStamp: timeStamp,
                            recordItems: newRecordItems
                        }, function (err, res) {
                            if (err) throw err;
                            console.log("1 new transitionalRecord is created of the transitionalRecordId %s", transitionalRecordId);
                            callBack(true);
                            db.close();
                        });
                    });

                } else {
                    console.log("there should be only one record of $s", transitionalRecordId);
                    let existedRecord: Record = existedRecordList[0];
                    let existedRecordItemsList: Array<RecordItem> = existedRecord.recordItems;
                    let existedRecordItemsMap = new Collections.Dictionary<string, Array<Group>>();

                    // convert existed list to map, with the key of item id 
                    for (let tempRecordItem of existedRecordItemsList) {
                        if (!existedRecordItemsMap.containsKey(tempRecordItem.recordItemId)) {
                            existedRecordItemsMap.setValue(tempRecordItem.recordItemId, tempRecordItem.work);
                        } else {
                            let tmpWorks: Array<Group> = existedRecordItemsMap.getValue(tempRecordItem.recordItemId);
                            for (let tempWork of tempRecordItem.work) {
                                tmpWorks.push(tempWork);
                            }
                            existedRecordItemsMap.setValue(tempRecordItem.recordItemId, tmpWorks);
                        }
                    }

                    // add newRecordItems: Array<RecordItem> to the map 
                    for (let tempRecordItem of newRecordItems) {

                        if (!existedRecordItemsMap.containsKey(tempRecordItem.recordItemId)) {
                            existedRecordItemsMap.setValue(tempRecordItem.recordItemId, tempRecordItem.work);
                        } else {
                            let tmpWorks: Array<Group> = existedRecordItemsMap.getValue(tempRecordItem.recordItemId);
                            for (let tempWork of tempRecordItem.work) {
                                tmpWorks.push(tempWork);
                            }
                            existedRecordItemsMap.setValue(tempRecordItem.recordItemId, tmpWorks);
                        }
                    }


                    // convert the map back to the list 

                    let updatedRecordItemsList: Array<RecordItem> = new Array();
                    for (let key of existedRecordItemsMap.keys()) {
                        updatedRecordItemsList.push(
                            {
                                recordItemId: key,
                                work: existedRecordItemsMap.getValue(key)
                            }
                        );
                    }

                    // store 
                    ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
                        if (err) throw err;
                        let dbo = db.db(ConfigParameter.db_name);
                        dbo.collection(ConfigParameter.db_collection_transitional_save_record).insertOne({
                            recordId: transitionalRecordId,
                            userId: userId,
                            gymId: gymId,
                            timeStamp: timeStamp,
                            recordItems: updatedRecordItemsList
                        }, function (err, res) {
                            if (err) throw err;
                            console.log("1 new transitionalRecord is created of the transitionalRecordId %s", transitionalRecordId);
                            callBack(true);
                            db.close();
                        });
                    });

                }


                db.close();
            });
        });






    }











}