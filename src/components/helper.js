var calculate = require("khoroo");

export async function geoLoc(lat, lng) {
  let promise = new Promise((resolve, reject) => {
    calculate(lat, lng).then(data => {
      resolve(data);
    });
  });
  let result = await promise;
  return result;
}
