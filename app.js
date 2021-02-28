var inputText = document.querySelector("#inputText");
var outputText = document.querySelector("#outputText");
var btn = document.querySelector("#translate");

function translation() {
  var input = inputText.value;
  fetch("https://api.funtranslations.com/translate/valyrian.json?text=" + input)
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputText.innerText = translatedText;
    })
    .catch((error) => alert("Something is wrong! please try again later."));
}

btn.addEventListener("click", translation);
