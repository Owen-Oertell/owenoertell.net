var currentStage = 0;
var moving=false;
var stages = ["intro", "about", "whatamIupto", "tech", "checkout", "footer"];

// Functions to minimize the hassle for reordering pages
// I know if would be easier to use a loop, but this is in order to minimze time.
function getIntroStage() {
    return 0;
}
function getAboutStage() {
    return 1;
}
function getUpToStage() {
    return 2;
}
function getTechStage() {
    return 3;
} 
function getCheckoutStage() {
    return 4;
}
function getFooterStage() {
    return 5;
}

// End of hassle fixer

function changeStage(to) {
    moving=true;
    if(to>(stages.length-1))to=(stages.length-1);
    else if (to<=0) to=0;
    currentStage = to;
    if(currentStage == 0) {
        window.scrollTo(0,0);
    } else if(currentStage==(stages.length-1)) {
        window.scrollTo(0,document.body.scrollHeight);
    }
    else {
        let el = document.getElementById(stages[to]);
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
    }
    moving=false;
}

function changeStageNS(to) {
    if(moving==false) {
    currentStage=to;
    }
}

function getStage() {
    return currentStage;
}

function getListSize() {
    return stages.length;
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 100 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight)+100 &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

export { changeStage, changeStageNS, getStage, getListSize, isInViewport, getIntroStage, getAboutStage, getUpToStage, getTechStage, getCheckoutStage, getFooterStage }