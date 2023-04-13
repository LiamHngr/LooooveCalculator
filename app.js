/*=============================
    Made With ♥ By Al Nahian
  ============================*/
// Start Code
// 05 Sep July 2020
// hello this is liam 
// Al Nahian | https://alnahian2003.github.io

// global variables
var yourName = document.getElementById("yourname"),
  theirName = document.getElementById("theirname"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;

//capitalize input values
function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function ASCIISuma(array) {
  let suma = 0;
  for(let i = 0; i < array.length; i++) {
      for ( let j=0; j < array[i].length; j++ ) {
          let char_code = array[i].charCodeAt(j);
          suma += char_code;
       }
    }
  return suma;
} 

// Love Score Counter
function love() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}

// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
  //loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
  loveSeed = ASCIISuma(yourName) + ASCIISuma(theirName)
  loveScore = loveSeed/(Math.pow*(10,loveSeed.ToString().Length))*100
  if ((yourName.toLowerCase().includes("echo") & theirName.toLowerCase().includes("liam") ) || (yourName.toLowerCase().includes("liam") & theirName.toLowerCase().includes("echo") )  ){
    loveScore = 101
  }
  
  e.preventDefault();
  if (yourName.value == "" && theirName.value == "") {
    alert("You can't leave fields empty");
  }
  if (yourName.value == "") {
    alert("Please Enter Your Name");
  }
  if (theirName.value == "") {
    alert("Please Enter His/Her Name");
  }

  //lovescore conditions
  else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Oil & Water. I'm sorry, but this is not enough for a perfect relationship.";
  } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Bird & Sky. But need to put a little concentration on your love.";
  } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Soil & Seed. You should take care of your love more! ";
  } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Romeo & Juliet. There is no fake things in your love. Go Ahead!";
  } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Marie & Pierre Curie. That's a good combination. You are a good example of true love.";
  } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like The Earth & The Moon. You cannot live without each other.";
  } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like River & Sea. Spread Love, not Hate.";
  } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like glue. Nothing can seperate you from each other. Love is Forever.";
  } else if (loveScore <= 90) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other more than anything in the world! You are the best example of true love.";
  } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like Ertuğrul Gazi & Halime Sultan. You should get married with " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " very soon. Best of Luck!";
  } else if (loveScore <= 105) {
    loveScore = 100
    yourlovescoreis.innerHTML = "Your Love Score is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " love each other like 🐷 ❤️ 🐍 and 🐍  ❤️ 🐷.  " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " very soon. Best of Luck!";
  }
});
