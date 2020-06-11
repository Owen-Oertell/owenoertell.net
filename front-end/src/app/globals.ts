var currentStage = 0;
var stages = ["intro", "whoami", "whatamIupto", "tech", "checkout"];
function changeStage(to) {
    currentStage=to;
}
function getStage() {
    return currentStage;
}
export {changeStage, getStage}