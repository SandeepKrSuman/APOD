const apiCall = async () => {
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
  const apiData = await response.json();

  if(response.status === 200){
    const dt = apiData.date;
    const title = apiData.title;
    const cr = apiData.copyright ? apiData.copyright : "-";
    const expl = apiData.explanation;
    const imgurl = apiData.hdurl;

    document.getElementById("dated").innerHTML = dt;
    document.getElementById("dated").style.border = "1px dotted black;";
    document.getElementById("title").innerHTML = "\""+title+"\"";
    document.getElementById("picod").src = imgurl;
    document.getElementById("copyright").innerHTML = "copyright: "+cr;
    document.getElementById("explaination").innerHTML = expl;
  }
  else{
    document.getElementById("title").innerHTML = ":( Error: " + response.statusText;
    document.getElementById("title").style.color = "red";
  }

}

window.onload = function() {
  apiCall();
};
