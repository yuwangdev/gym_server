// import http = require('http');

// http.createServer((request, response) => {
//     response.write('Hello from Node.js!');
//     response.end();
// }).listen(3000);


//var express = require('express');
//var app = express();

import express = require('express');
import fs = require('fs');
import url = require('url');
import bodyParser = require('body-parser');

import { UserDao } from './DAO/UserDao';
import { GymDao } from './DAO/GymDao';
import { Gym } from "./Model/Gym";
import { User } from "./Model/User";
import { ItemList } from './Service/ItemListService';
import { Item } from './Model/Item';
import { Category } from './Model/Category';
import { RecordDao } from './DAO/RecordDao';
import { RecordService } from './Service/RecordService';
import { StepRecordSaveDao } from './DAO/StepSaveDao';

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
let app = express();
app.use(bodyParser.json());

// This responds with "Hello World" on the homepage
app.get('/echo', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})



/**
 * USER related endpoints
 */
// This responds with user login 
app.post('/user/createUser', function (req, res) {
    let userRequest: string = JSON.stringify(req.body);
    console.log("POST on /createUser, data is %s", userRequest);
    let userDao = new UserDao();
    let requestUser: User =
        {
            userId: req.body.userId,
            userName: req.body.userName,
            passWord: req.body.passWord,
            email: req.body.email,
            gymId: req.body.gymId,
            phoneNumber: req.body.phoneNumber
        };

    userDao.createUser(requestUser, function (flag) {
        let fff = flag ? "true" : "false"
        console.log("From userDao.createUser, receive flag is " + fff)
        res.end(fff);
    })

});


// This responds with user login 
app.post('/user/checkUser', function (req, res) {
    let userRequest: string = JSON.stringify(req.body);
    console.log("POST on /checkUse, data is %s", userRequest);
    let userDao = new UserDao();
    let userId: string = req.body.userId;
    let passWord: string = req.body.passWord;
    userDao.authentificateUser(userId, passWord, x => {
        console.log("send the result in /checkUse: " + x.length);
        res.end(x.length != 0 ? "true" : "false");
        console.log("send the result is done ");
    });
})

// This responds with finding the user 
app.post('/user/findUser', function (req, res) {
    let userRequest: string = JSON.stringify(req.body);
    console.log("POST on /findUser, data is %s", userRequest);
    let userDao = new UserDao();
    let userId: string = req.body.userId;
    console.log("userId is %s", userId);
    userDao.findUser(userId, x => {
        console.log("send the result in /findUser: " + x.length);
        if (x.length == 0) {
            console.log("cannot find this user of the user id %s", userId);
            res.end("false");
        } else {
            res.end(JSON.stringify(x[0]));
        }
    });
})


// This responds with user update 
app.post('/user/updateUser', function (req, res) {
    let userRequest: string = JSON.stringify(req.body);
    console.log("POST on /updateUser, data is %s", userRequest);
    let userDao = new UserDao();
    let userId: string = req.body.userId;
    let requestUser: User =
        {
            userId: req.body.userId,
            userName: req.body.userName,
            passWord: req.body.passWord,
            email: req.body.email,
            gymId: req.body.gymId,
            phoneNumber: req.body.phoneNumber
        };
    userDao.updateUser(requestUser, x => {
        res.end("true");
    });
})


// This responds with user update 
app.post('/user/deleteUser', function (req, res) {
    let userRequest: string = JSON.stringify(req.body);
    console.log("POST on /deleteUser, data is %s", userRequest);
    let userDao = new UserDao();
    let userId: string = req.body.userId;
    userDao.deleteUser(userId, x => {
        if (x == 0) {
            res.end("cannot find this user");
        } else {
            res.end("true");
        }

    });
})

// This responds with user update 
app.get('/user/findAllUserIds', function (req, res) {
    let userDao = new UserDao();
    userDao.getAllUserIds(x => {
        let result: Array<string> = new Array();
        for (let it of x) {
            result.push(it.userId);
        }
        res.end(JSON.stringify(result));
    });
})

// This responds with user update 
app.post('/user/findAllUserIdsByGymId', function (req, res) {
    let userRequest: string = JSON.stringify(req.body);
    console.log("POST on /findAllUserIdsByGymId, data is %s", userRequest);
    let userDao = new UserDao();
    let gymId: string = req.body.gymId;
    userDao.getAllUserIdsByGymId(gymId, x => {
        let result: Array<string> = new Array();
        for (let it of x) {
            result.push(it.userId);
        }
        res.end(JSON.stringify(result));
    });
})


/**
 * GYM related endpoints
 */


app.post('/gym/createGym', function (req, res) {
    let gymRequest: string = JSON.stringify(req.body);
    console.log("POST on /createGym, data is %s", gymRequest);
    let gymDao = new GymDao();
    let requestGym: Gym =
        {
            gymId: req.body.gymId,
            gymName: req.body.gymName,
            passWord: req.body.passWord,
            email: req.body.email,
            phone: req.body.phone,
            users: req.body.users
        };

    gymDao.createGym(requestGym, function (flag) {
        let fff = flag ? "true" : "false"
        console.log("From gymDao.createGym, receive flag is " + fff)
        res.end(fff);
    })

});


app.post('/gym/findGym', function (req, res) {
    let gymRequest: string = JSON.stringify(req.body);
    console.log("POST on /findGym, data is %s", gymRequest);
    let gymDao = new GymDao();
    let gymId: string = req.body.gymId;
    console.log("gymId is %s", gymId);
    gymDao.findGym(gymId, x => {
        console.log("send the result in /findGym: " + x.length);
        if (x.length == 0) {
            console.log("cannot find this gym of the gym Id %s", gymId);
            res.end("false");
        } else {
            res.end(JSON.stringify(x[0]));
        }
    });
})


app.post('/gym/updateGym', function (req, res) {
    let gymRequest: string = JSON.stringify(req.body);
    console.log("POST on /updateGym, data is %s", gymRequest);
    let gymDao = new GymDao();
    let gymId: string = req.body.gymId;
    let requestGym: Gym =
        {
            gymId: req.body.gymId,
            gymName: req.body.gymName,
            passWord: req.body.passWord,
            email: req.body.email,
            phone: req.body.phone,
            users: req.body.users
        };
    gymDao.updateGym(requestGym, x => {
        res.end("true");
    });
})


app.post('/gym/deleteGym', function (req, res) {
    let gymRequest: string = JSON.stringify(req.body);
    console.log("POST on /deleteGym, data is %s", gymRequest);
    let gymDao = new GymDao();
    let gymId: string = req.body.gymId;
    gymDao.deleteGym(gymId, x => {
        if (x == 0) {
            res.end("cannot find this gym");
        } else {
            res.end("true");
        }

    });
})


app.get('/gym/findAllGymIds', function (req, res) {
    let gymDao = new GymDao();
    gymDao.getAllGymIds(x => {
        let result: Array<string> = new Array();
        for (let it of x) {
            result.push(it.gymId);
        }
        res.end(JSON.stringify(result));
    });
})


app.get('/item/getLevelOneCategory', function (req, res) {
    console.log("get the /getLevelOneCategory");
    let result: Array<Category> = ItemList.LevelOneCategories;
    res.end(JSON.stringify(result));
})

app.post('/item/getWorkoutItemsPerCategory', function (req, res) {
    let categoryRequest: string = JSON.stringify(req.body);
    console.log("POST on /getWorkoutItemsPerCategory, categorys is %s", categoryRequest);
    let result: Array<Item> = ItemList.getWorkoutItemsPerCategory(req.body.categoryId);
    res.end(JSON.stringify(result));
})

app.get('/item/getAllCategorizedItems', function (req, res) {
    console.log("get the /getAllCategorizedItems");
    let result = ItemList.getAllCombimedItemsData();;
    res.end(JSON.stringify(result));
})

app.get('/item/getAllIndexedItemsList', function (req, res) {
    console.log("get the /getAllIndexedItemsList");
    let result = ItemList.getAllIndexedItemsList();;
    res.end(JSON.stringify(result));
})

app.post('/item/getItemPerId', function (req, res) {
    let categoryRequest: string = JSON.stringify(req.body);
    console.log("POST on /getItemPerId, item id is %s", categoryRequest);
    res.end(ItemList.getItemPerId(req.body.itemId));
})


app.post('/record/findAllRecordByGymId', function (req, res) {
    let recordRequest: string = JSON.stringify(req.body);
    console.log("POST on /findAllRecordByGymId, data is %s", recordRequest);
    let recordDao = new RecordDao();
    let gymId: string = req.body.gymId;
    console.log("gymId is %s", gymId);
    recordDao.findAllRecordByGymId(gymId, x => {
        console.log("send the result in /findAllRecordByGymId: " + x.length);
        if (x.length == 0) {
            console.log("cannot find this gym of the gym Id %s", gymId);
            res.end("false");
        } else {
            res.end(JSON.stringify(x));
        }
    });
})


app.post('/record/findAllRecordByUserId', function (req, res) {
    let recordRequest: string = JSON.stringify(req.body);
    console.log("POST on /findAllRecordByUserId, data is %s", recordRequest);
    let recordDao = new RecordDao();
    let userId: string = req.body.userId;
    console.log("userId is %s", userId);
    recordDao.findAllRecordByUserId(userId, x => {
        console.log("send the result in /findAllRecordByUserId: " + x.length);
        if (x.length == 0) {
            console.log("cannot find this user of the user Id %s", userId);
            res.end("false");
        } else {
            res.end(JSON.stringify(x));
        }
    });
})

app.post('/record/insertRecord', function (req, res) {
    let recordRequest: string = JSON.stringify(req.body);
    console.log("POST on /record/insertRecord, data is %s", recordRequest);
    let recordDao = new RecordDao();
    let recordService = new RecordService();

    recordDao.insertRecord(recordService.generateOneRecordForInsert(
        req.body.userId,
        req.body.gymId,
        req.body.recordItems
    ), x => {
        let fff = x ? "true" : "false"
        console.log("From recordDao.insertRecord(, receive flag is " + fff)
        res.end(fff);
    });
})


app.post('/stepSaveRecord/deletePerStepSaveRecordId', function (req, res) {
    let recordRequest: string = JSON.stringify(req.body);
    console.log("POST on /stepSaveRecord/deletePerStepSaveRecordId, data is %s", recordRequest);
    let stepRecordSaveDao = new StepRecordSaveDao();

    stepRecordSaveDao.deleteTransitionalRecordByTransitionalRecordId(
        req.body.transitionalRecordId,
        req.body.userId,
        req.body.gymId
    );
    res.end("true");
})



let server = app.listen(3000, function () {
    let host: string = server.address().address
    let port: number = server.address().port
    console.log("start my Gym App Backend POC");
    console.log("Example app listening at http://%s:%s", host, port);
})
