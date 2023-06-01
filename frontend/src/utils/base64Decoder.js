module.exports = class InputData {
  // constructor(data){
  //   this.data = data;
  // }

  static map = { A: "000000" };

  decodeBase64(data) {
    let length = data.length / 3;

    // for (let i = 0; i <= length; i = i+3){
    //   console.log(atob(data.slice(i, i + 3)))
    // }

    // console.log(data);
    // console.log(btoa("To the MTA Hiring Team"));
    // console.log(atob("JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PC9UaXRsZSAoQ2FyZG9uZSBDb3ZlciBMZXR0ZXIgLSBNVEEpCi9Qcm9kdWNlciAoU2tpYS9QREYgbTExNCBHb29nbGUgRG9jcyBSZW5kZXJlcik+PgplbmRvYmoKMyAwIG9iago8PC9jYSAxCi9CTSAvTm9ybWFsPj4KZW5kb2JqCjYgMCBvYmoKPDwvQ0EgMQovY2EgMQovTEMgMAovTEogMAovTFcgMS4zMzMzMzMzNwovTUwgMTAKL1NBIHRydWUKL0JNIC9Ob3JtYWw+PgplbmRvYmoKNyAwIG9iago8PC9UeXBlIC9Bbm5vdAovU3VidHlwZSAvTGluawovRiA0Ci9Cb3JkZXIgWzAgMCAwXQovUmVjdCBbMjIxLjkwODk3IDcwNi4xNzQzMiAyNjIuNjg0MzYgNzIwLjU3NDM0XQovQSA8PC9UeXBlIC9BY3Rpb24KL1MgL1VSSQovVVJJIChodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vanVsaWFuY2FyZG9uZS8pPj4+PgplbmRvYmoKOCAwIG9iago8PC9UeXBlIC9Bbm5vdAovU3VidHlwZSAvTGluawovRiA0Ci9Cb3JkZXIgWzAgMCAwXQovUmVjdCBbMjczLjYzNTUzIDcwNi4xNzQzMiAzMDguMDY1MjIgNzIwLjU3NDM0XQovQSA8PC9UeXBlIC9BY3Rpb24KL1MgL1VSSQovVVJJIChodHRwczovL2dpdGh1Yi5jb20vanVsaWFuLWNhcmRvbmUpPj4+PgplbmRvYmoKOSAwIG9iago8PC9UeXBlIC9Bbm5vdAovU3VidHlwZSAvTGluawovRiA0Ci9Cb3JkZXIgWzAgMCAwXQovUmVjdCBbMzE5LjAxNjM5IDcwNi4xNzQzMiAzOTAuNDk0OTMgNzIwLjU3NDM0XQovQSA8PC9UeXBlIC9BY3Rpb24KL1MgL1VSSQovVVJJIChodHRwczovL2p1bGlhbi1jYXJkb25lLm9ucmVuZGVyLmNvbS8pPj4+PgplbmRvYmoKMTAgMCBvYmoKPDwvRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDQy"));

    // for (let i = 0; i < length; i++) {
    //   console.log((data[i]));
    // }

    // console.log(data.slice(28));
  }
};