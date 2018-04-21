import { UserDao, User, Gym, GymDao } from './DAO';
let userDao: UserDao = new UserDao();
let gymDao: GymDao = new GymDao();


// userDao.createUser({
//     userId: "userId1",
//     userName: "userName",
//     passWord: "passWord",
//     email: "email@",
//     gymId: "gymId",
//     phoneNumber: "numPhone"
// }, function (flag) {
//     let fff = flag ? "true" : "false"
//     console.log("execute callback");
//     console.log("From userDao.createUser, receive flag is ")
//     console.log(fff)
// });
// userDao.createUser({
//     userId: "userId2",
//     userName: "userName",
//     passWord: "passWord",
//     email: "email@",
//     gymId: "gymId",
//     phoneNumber: "numPhone"
// }, function (flag) {
//     let fff = flag ? "true" : "false"
//     console.log("execute callback");
//     console.log("From userDao.createUser, receive flag is ")
//     console.log(fff)
// });

// let list = userDao.getAllUserIds();
// console.log(list);


// console.log(userDao.authentificateUser("userId1", "passWord", x => { console.log(x.length != 0) }));
// console.log(userDao.authentificateUser("userId1", "padssWdsfsdfdsfsdord", x => { console.log(x.length != 0) }));

// userDao.updateUser({
//     userId: "userId1",
//     userName: "userNameNew",
//     passWord: "passWordNew",
//     email: "email@New",
//     gymId: "gymINew",
//     phoneNumber: "numPhoneNew",
// }, x => x = true);

