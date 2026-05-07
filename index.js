
let flipdown;
let currentTargetTimestamp;
let targetDate = new Date(2026, 4, 17);
function initTimer(targetDate) {
  const now = new Date().getTime();
  let target = targetDate.getTime();  
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
function startTimerFromSequence() {
  const now = new Date();
  const days = targetDate.getDate() - now.getDate();
  const hours = targetDate.getHours() - now.getHours();
  const minutes = targetDate.getMinutes() - now.getMinutes();
  const seconds = targetDate.getSeconds() - now.getSeconds();
  const ms = (days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
  const target = new Date(now.getTime() + ms);
  initTimer(target);
}

document.addEventListener('DOMContentLoaded', () => {
  startTimerFromSequence();
});