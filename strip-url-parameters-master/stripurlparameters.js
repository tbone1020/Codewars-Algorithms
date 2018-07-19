/* 
  A function that takes in 2 parameters, the URL and the query parameter to remove.
*/

const stripUrlParams = (url, paramsToStrip) => {
  // return URL if no parameters exist
  if(url.indexOf("?") == -1) return url; 
  
  let splitURL = url.split('?');
  
  // Remove the parameter that was passed into paramsToStrip
  let finalParam = splitURL[1].split('&').filter(parameter => parameter.indexOf(paramsToStrip));
  
  // Add the first parameter from the finalParam array to the end of the finalURL.
  // This is to prevent removing extra '&' when the final url is built.
  let finalURL = splitURL[0] + "?" + finalParam[0];
  
  for(let i = 1;i < finalParam.length;i++) {
    // Check if finalURL already contains the parameter
    if(finalURL.indexOf(finalParam[i].split('=')[0]) == -1){
      // Append the parameter to finalURL
      finalURL = finalURL + "&" + finalParam[i];
    }
  }
  return finalURL;  
}

console.log(stripUrlParams('www.tteebken.com?fname=Trent&mname=Michael&lname=Teebken&fname=Steve','mname'));