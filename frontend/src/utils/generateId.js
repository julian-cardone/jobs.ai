module.exports = function generateId() {
  let result = '';
  const characters = "QWERTYUIOPLKJHGFDSAZXCVBNMmnbvcxzqwertyuiopasdfghjkl1234567890";

  while (result.length < 5){
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;

};