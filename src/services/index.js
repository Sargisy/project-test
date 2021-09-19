const getResponse = (url) => {
  return new Promise(function (resolve, reject) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open("GET", url);
    httpRequest.onload = function () {
      if (httpRequest.status === 200) {
        resolve(httpRequest.responseText);
      } else {
        reject(Error(JSON.parse(httpRequest.responseText).message));
      }
    };
    httpRequest.onerror = function () {
      reject(Error("Network Error"));
    };
    httpRequest.send();
  });
}

function failHandler(status) {
  console.log(status)
}

export const getList = async (url) => {
  try {   

    let response = await getResponse(url); 
    return JSON.parse(response);
        

  } catch (status) {
    failHandler(status);
  }
};