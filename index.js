
let flipdown;
let currentTargetTimestamp;

function initTimer(targetDate) {
  const now = new Date().getTime();
  let target = targetDate.getTime();
  
  if (target <= now) {
    target = now + 3600000;
    targetDate = new Date(target);
  }
  
  currentTargetTimestamp = target;
  
  if (flipdown) {
    flipdown.destroy();
  }
  
  const tsSeconds = Math.floor(target / 1000);
  
  flipdown = new FlipDown(tsSeconds, 'flipdown', {
    headings: ["Days", "Hours", "Minutes", "Seconds"],
    showDays: true
  });
  
  flipdown.start();
  
}

function resetToDefault() {
  const now = new Date();
  const target = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000) + (5 * 60 * 60 * 1000) + (37 * 60 * 1000));
  initTimer(target);
}

function addFiveMinutes() {
  if (currentTargetTimestamp) {
    const newTarget = new Date(currentTargetTimestamp + (5 * 60 * 1000));
    initTimer(newTarget);
  } else {
    resetToDefault();
  }
}
function startTimerFromSequence() {
  const now = new Date();
  const days = 7;
  const hours = 0;
  const minutes = 9;
  const seconds = 3;
  const ms = (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
  const target = new Date(now.getTime() + ms);
  initTimer(target);
}

document.addEventListener('DOMContentLoaded', () => {
  startTimerFromSequence();
});