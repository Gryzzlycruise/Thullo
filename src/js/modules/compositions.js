//-------------------------------------------------Compositions---------------------------------------------------------
function buildDate (){
  const h2DayElement = document.querySelector('.date__day');
  const h2HoursElement = document.querySelector('.date__hours');
  const h2DividerElement = document.querySelector('.date__divider');
  const h2MinutesElement = document.querySelector('.date__minutes');
  setInterval(() => {
    let date = new Date();
    let width = window.innerWidth;
    if (width < 650) {
      h2DayElement.innerHTML = '';
    } else if (width < 860) {
        h2DayElement.innerHTML = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}.${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()}.${date.getFullYear()}`;
    } else {
      h2DayElement.innerHTML = `${date.toDateString()}`;
    }
    h2HoursElement.innerHTML = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}`;
    h2DividerElement.classList.toggle('transparent');
    h2MinutesElement.innerHTML = `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  }, 1000)
}
//-------------------------------------------------Export---------------------------------------------------------------
export {
  buildDate
}
