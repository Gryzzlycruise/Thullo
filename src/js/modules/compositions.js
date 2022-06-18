//-------------------------------------------------Compositions---------------------------------------------------------
function buildDate (){
  const h2DayElement = document.querySelector('.date__day');
  const h2HoursElement = document.querySelector('.date__hours');
  const h2DividerElement = document.querySelector('.date__divider');
  const h2MinutesElement = document.querySelector('.date__minutes');
  setInterval(() => {
    let date = new Date();
    h2DayElement.innerHTML = `${new Date().toDateString()}`;
    h2HoursElement.innerHTML = `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}`;
    h2DividerElement.classList.toggle('hide');
    h2MinutesElement.innerHTML = `${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;
  }, 1000)
}
//-------------------------------------------------Export---------------------------------------------------------------
export {
  buildDate
}