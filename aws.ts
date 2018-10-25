const Consumer = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-east-1.amazonaws.com/183523990685/q1',
  handleMessage: (message, done) => {
    console.log(message.Body)
    done();
  }
});

app.on('error', (err) => {
  console.log(err.message);
});

app.start();