var Consumer = require('sqs-consumer');
var app = Consumer.create({
    queueUrl: 'https://sqs.us-east-1.amazonaws.com/183523990685/from3TTTOOOto3',
    handleMessage: function (message, done) {
        console.log(message);
        done();
    }
});
app.on('error', function (err) {
    console.log(err.message);
});
app.start();
