export default (socket) => (type, payLoad) => {
  return socket.send(JSON.stringify({ type, payLoad }));
}
