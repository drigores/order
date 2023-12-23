const amqp = require('amqplib');

const queue = "TestQueue";
const text = {
  item_id: "macbook",
  text: "This is a sample message to send receiver to check the ordered Item Availablility",
};

module.exports = async ()=>{
  let connection;
  try {
    connection = await amqp.connect("amqp://guest:guest@localhost:5672/");
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(text)));
    console.log(" [x] Sent '%s'", text);
    await channel.close();
  } catch (err) {
    console.warn(err);
  };
  return connection;
}