import { Gym } from "../Model/Gym";
import { ConfigParameter } from '../config';


export class GymDao {


    /**
     * 
     * @param callBack 
     */
    public getAllGymIds(callBack: (tmp: Array<Gym>) => void) {
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);
            dbo.collection(ConfigParameter.db_collection_gym).find({}).toArray(function (err, result: Array<Gym>) {
                if (err) throw err;
                console.log("get the number of all gyms " + result.length);
                db.close();
                callBack(result);
            });
        });
    }

    /**
     * 
     * @param newGym 
     * @param callBack 
     */
    public createGym(newGym: Gym, callBack: (flag: boolean) => void) {
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

    /**
     * 
     * @param gymId 
     * @param callBack 
     */
    public findGym(gymId: string, callBack: (inputArray: Array<Gym>) => void) {
        console.log("receive the data for findGym, %s", gymId);
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(ConfigParameter.db_name);
            var query = { gymId: gymId };
            dbo.collection(ConfigParameter.db_collection_gym).find(query).toArray(function (err, result: Array<Gym>) {
                if (err) throw err;
                console.log("get the length of result for  ConfigParameter findGym: " + result.length)
                callBack(result);
                db.close();
            });
        });
    }

    /**
     * 
     * @param newGymInfo 
     * @param callBack 
     */
    public updateGym(newGymInfo: Gym, callBack: (flag: boolean) => void) {
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);
            //console.log("updated Gym ID from newGymInfo: " + newGymInfo.gymId);
            let myquery = { gymId: newGymInfo.gymId };
            let newvalues = {
                $set: {
                    gymId: newGymInfo.gymId,
                    gymName: newGymInfo.gymName,
                    passWord: newGymInfo.passWord,
                    email: newGymInfo.email,
                    phone: newGymInfo.phone,
                    users: newGymInfo.users
                }
            };
            console.log("updated gym is:" + JSON.stringify(newvalues))
            dbo.collection(ConfigParameter.db_collection_gym).updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 Gym is updated of the Gym Id %s, data is %s", newGymInfo.gymId, JSON.stringify(newGymInfo));
                callBack(true);
                db.close();
            });
        });
    }

    /**
     * 
     * @param gymId 
     * @param callBack 
     */
    public deleteGym(gymId: string, callBack: (flag: number) => void) {
        console.log("receive the data for deleteGym, %s", gymId);
        ConfigParameter.MongoClient.connect(ConfigParameter.db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(ConfigParameter.db_name);
            let myquery = { gymId: gymId };
            dbo.collection(ConfigParameter.db_collection_gym).deleteMany(myquery, function (err, obj) {
                if (err) throw err;
                console.log(obj.result.n + " document(s) deleted");
                callBack(obj.result.n);
                db.close();
            });
        });
    }



}
