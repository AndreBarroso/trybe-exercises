function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  //function createDiaCalendario ()

  let listaDias = document.querySelector('#days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  
  for( index = 0; index < dezDaysList.length; index +=1 ) {
    let addDay = document.createElement('li');
    addDay.innerText = dezDaysList[index];
    if(addDay.innerText === '24' || addDay.innerText === '25' || addDay.innerText === '31' ) {
        addDay.className = 'holiday';
    }
    listaDias.appendChild(addDay);
}


function addBotHoliday (Feriados) {
    let btnsContainer = document.querySelector('.buttons-container');
    let buttonHoliday = document.createElement('button');
    buttonHoliday.innerText = Feriados;
    buttonHoliday.id = 'btn-holiday';
    btnsContainer.appendChild(buttonHoliday);
}

function changeColorHolidaysDays(){ 
    let btnsContainer = document.querySelector('.buttons-container');
    let daysHoliday = document.querySelectorAll('.holiday');
    btnsContainer.addEventListener('click', function(){
        for(let i = 0; i < daysHoliday.length; i += 1){
            if(daysHoliday[i].style.backgroundColor !== 'white') {
                daysHoliday[i].style.backgroundColor = 'white';
            } else if (daysHoliday[i].style.backgroundColor === 'white') {
                daysHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    });
        
}

addBotHoliday('Feriados');
changeColorHolidaysDays();