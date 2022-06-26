    // html document variable for highscore page
    var highScoreDisplay = document.getElementById("score-page")

    // load scores to the page
    var getStorage = JSON.parse(localStorage.getItem("scores"))
    getStorage.sort(function(a, b) {
    return b.score - a.score ;
    });
    for (let i = 0; i < getStorage.length; i++) {
    var highScoreLi = document.createElement("li")
    highScoreDisplay.append(highScoreLi); 
    highScoreLi.textContent = getStorage[i].initials + " " + getStorage[i].score
    highScoreLi.className = "highscore-li-style"
  }

  // return quiz button will display the start quiz page
document.getElementById("refresh-btn").onclick = function () {
  location.href = "https://github.com/EvanClevenger/Code-Quiz-Challenge-4";
};

  // clear-scores quiz button will delete highscores from localStorage
  document.getElementById("clear-scores-btn").onclick = function () {
    localStorage.clear()
    highScoreDisplay.remove(highScoreLi)
  };
  //test
  