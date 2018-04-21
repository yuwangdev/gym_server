import * as Collections from 'typescript-collections';
import { User } from "../Model/User";
import { GymDao } from './GymDao';

let MongoClient = require('mongodb').MongoClient;
const db_url = "mongodb://localhost:27017/";
const db_name = "gym";
const db_collection_user = "user";
const db_collection_gym = "gym";


export class UserDao {

    constructor() {
        console.log("checking the existence of User collection");
    }

    /**
     * Okay for use correctly 
     * @param callBack 
     */
    public getAllUserIds(callBack: (tmp: Array<User>) => void) {
        MongoClient.connect(db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(db_name);
            dbo.collection(db_collection_user).find({}).toArray(function (err, result: Array<User>) {
                if (err) throw err;
                console.log("get the number of all users " + result.length);
                db.close();
                callBack(result);
            });
        });
    }


    /**
     * Okay for use correctly 
     * @param gymId 
     * @param callBack 
     */
    public getAllUserIdsByGymId(gymId: string, callBack: (tmp: Array<User>) => void) {
        MongoClient.connect(db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(db_name);
            var query = { gymId: gymId };
            dbo.collection(db_collection_user).find(query).toArray(function (err, result: Array<User>) {
                if (err) throw err;
                console.log("get the number of all users by the gymId  " + gymId + + " result.length");
                db.close();
                callBack(result);
            });
        });
    }

    /**
     * Okay for use correctly 
     * @param newUser 
     * @param callBack 
     */
    public createUser(newUser: User, callBack: (flag: boolean) => void) {
        MongoClient.connect(db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(db_name);
            dbo.collection(db_collection_user).find({ userId: newUser.userId }).toArray(function (err, result: Array<User>) {
                if (err) throw err;
                if (result.length != 0) {
                    console.log("%s is existed! Create such user fails.", newUser.userId);
                    callBack(false);
                    db.close();
                } else {
                    dbo.collection(db_collection_user).insertOne(newUser, function (err, res) {
                        if (err) throw err;
                        console.log("1 new User is created of the user Id %s", newUser.userId);

                        let gymDao = new GymDao();

                        gymDao.findGym(newUser.gymId, x => {

                            if (x.length != 1) {
                                console.log("cannot find this gym of the gym Id %s", newUser.gymId);
                                throw new Error("cannot find this gym of the gym Id " + newUser.gymId);
                            } else {
                                let tmpU: Array<string> = x[0].users;
                                tmpU.push(newUser.userId);
                                gymDao.updateGym({
                                    gymId: x[0].gymId,
                                    gymName: x[0].gymName,
                                    passWord: x[0].passWord,
                                    email: x[0].email,
                                    phone: x[0].phone,
                                    users: tmpU
                                }, x => console.log("insert the user %s to the gym %s", newUser.userId, newUser.gymId));

                            }

                        })









                        callBack(true);
                        db.close();
                    });
                }
            });
        });
    }



    /**
     * Okay for use correctly 
     * @param userId 
     * @param passWord 
     * @param callBack 
     */
    public authentificateUser(userId: string, passWord: string, callBack: (inputArray: Array<User>) => void) {
        console.log("receive the data for authentificateUser, %s %s", userId, passWord);
        MongoClient.connect(db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(db_name);
            let query = { userId: userId, passWord: passWord };
            dbo.collection(db_collection_user).find(query).toArray(function (err, result: Array<User>) {
                if (err) throw err;
                console.log("get the length of result for  this user login: " + result.length)
                callBack(result);
                db.close();
            });
        });
    }


    /**
     * Okay for use correctly 
     * @param userId 
     * @param callBack 
     */
    public findUser(userId: string, callBack: (inputArray: Array<User>) => void) {
        console.log("receive the data for findUser, %s", userId);
        MongoClient.connect(db_url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(db_name);
            var query = { userId: userId };
            dbo.collection(db_collection_user).find(query).toArray(function (err, result: Array<User>) {
                if (err) throw err;
                console.log("get the length of result for  this findUser: " + result.length)
                callBack(result);
                db.close();
            });
        });
    }


    /**
     * Okay for use correctly 
     * @param newUserInfo 
     * @param callBack 
     */
    public updateUser(newUserInfo: User, callBack: (flag: boolean) => void) {
        MongoClient.connect(db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(db_name);
            let myquery = { userId: newUserInfo.userId };
            let newvalues = {
                $set: {
                    userId: newUserInfo.userId,
                    userName: newUserInfo.userName,
                    passWord: newUserInfo.passWord,
                    email: newUserInfo.email,
                    gymId: newUserInfo.gymId,
                    phoneNumber: newUserInfo.phoneNumber
                }
            };
            dbo.collection(db_collection_user).updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 User is updated of the user Id %s, data is %s", newUserInfo.userId, JSON.stringify(newUserInfo));
                callBack(true);
                db.close();
            });
        });
    }

    /**
     * Okay for use correctly 
     * @param userId 
     * @param callBack 
     */
    public deleteUser(userId: string, callBack: (flag: number) => void) {
        console.log("receive the data for deleteUser, %s", userId);
        MongoClient.connect(db_url, function (err, db) {
            if (err) throw err;
            let dbo = db.db(db_name);
            let myquery = { userId: userId };
            dbo.collection(db_collection_user).deleteMany(myquery, function (err, obj) {
                if (err) throw err;
                console.log(obj.result.n + " document(s) deleted");
                callBack(obj.result.n);
                db.close();
            });
        });
    }


}
