import * as Collections from 'typescript-collections';
import { User } from "../Model/User";
import { GymDao } from './GymDao';
import { ConfigParameter } from '../config';


export class RecordDao {


    constructor() {
        console.log("checking the existence of Record collection");
    }


    public insertRecord(newGym: Gym, callBack: (flag: boolean) => void) {
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);
            dbo.collection(ConfigParameter.db_collection_gym).find({ gymId: newGym.gymId }).toArray(function (err, result: Array<Gym>) {
                if (err) throw err;
                if (result.length != 0) {
                    console.log("%s is existed! Create such gym fails.", newGym.gymId);
                    callBack(false);
                    db.close();
                } else {
                    dbo.collection(ConfigParameter.db_collection_gym).insertOne(newGym, function (err, res) {
                        if (err) throw err;
                        console.log("1 new Gym is created of the gym Id %s", newGym.gymId);
                        callBack(true);
                        db.close();
                    });
                }
            });
        });
    }
}