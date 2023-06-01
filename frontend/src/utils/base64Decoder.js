module.exports = class InputData {
  // constructor(data){
  //   this.data = data;
  // }

  static map = { A: "000000" };

  decodeBase64(data) {
    let length = data.length / 6;

    // for (let i = 0; i <= length; i = i+6){
    //   console.log(data.slice(i, i + 6))
    // }

    for (let i = 0; i < data.length; i++) {}

    // console.log(data.slice(28));
  }
};
