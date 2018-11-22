const oof= document.querySelector('#butt')
oof.addEventListener("click", event =>{
axios
  .get('https://dq0ae9tuv4.execute-api.us-west-2.amazonaws.com/dev/skipper')
  .then(response => {
    htmlTemplateBuilder(response);
    console.log(response)
  })
  .catch(error => {
    console.log('error', error);
  });
});
//const result = document.querySelector('#result');


const htmlTemplateBuilder = response => {
    console.log('response', response);
  result.innerHTML = response.data.message.Contents
    .map(pic => {
      return `
      <img src="https://s3-us-west-2.amazonaws.com/treasure-chest-capstone/${pic.Key}">
      `;
    })
    .join('');
};