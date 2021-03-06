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
function createDays(){
    let listaDias = document.querySelector('#days');
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    
    for( index = 0; index < dezDaysList.length; index +=1 ) {
        let diasMes = document.createElement('li');
        diasMes.innerText = dezDaysList[index];
        diasMes.className = 'diaMes';
        if(diasMes.innerText === '24' || diasMes.innerText === '25' || diasMes.innerText === '31' ) {
            diasMes.className = diasMes.className + ' holiday';
        }
        listaDias.appendChild(diasMes);
    }
    let diaDoMes = document.querySelectorAll('.diaMes');
    for (let i = 0; i < diaDoMes.length; i += 1) {
        if (diaDoMes[i].innerText === '4' || diaDoMes[i].innerText === '11' || diaDoMes[i].innerText === '18' || diaDoMes[i].innerText === '25' ) {
            diaDoMes[i].id = 'sextaDia-' + diaDoMes[i].innerText;
            diaDoMes[i].className = diaDoMes[i].className+ ' sextou';
        }
    }
    
}

function addBotHoliday (Feriados) {
    let btnsContainer = document.querySelector('.buttons-container');
    let buttonHoliday = document.createElement('button');
    buttonHoliday.innerText = Feriados;
    buttonHoliday.id = 'btn-holiday';
    btnsContainer.appendChild(buttonHoliday);
}

function changeColorHolidaysDays(){ 
    let buttonHoliday = document.querySelector('#btn-holiday');
    let daysHoliday = document.querySelectorAll('.holiday');
    buttonHoliday.addEventListener('click', function(){
        for(let i = 0; i < daysHoliday.length; i += 1){
            if(daysHoliday[i].style.backgroundColor !== 'white') {
                daysHoliday[i].style.backgroundColor = 'white';
            } else if (daysHoliday[i].style.backgroundColor === 'white') {
                daysHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    });
        
}

function createButtonFriday (dia) {
    let botFriday = document.createElement ('button');
    botFriday.innerText = dia;
    botFriday.id = 'botSexta';
    return document.querySelector('.buttons-container').appendChild(botFriday);
}

function modificaSextas () {
   let botSexta = document.querySelector ('#botSexta');
   let testa = 0;
   botSexta.addEventListener('click', eventBotSexta);
   let diasSexta = document.querySelectorAll('.sextou');
   function eventBotSexta(){
        for (let i = 0; i < diasSexta.length; i += 1){
            if (diasSexta[i].innerText !== 'sextooou!!!' ){
                diasSexta[i].innerText = 'sextooou!!!'
            }
            else if (diasSexta[i].innerText == 'sextooou!!!' ){
                if (diasSexta[i].id === 'sextaDia-4'){
                    diasSexta[i].innerText = '4';
                }
                else if (diasSexta[i].id === 'sextaDia-11'){
                    diasSexta[i].innerText = '11';
                }
                else if (diasSexta[i].id === 'sextaDia-18'){
                    diasSexta[i].innerText = '18';
                }
                else if (diasSexta[i].id === 'sextaDia-25'){
                    diasSexta[i].innerText = '25';
                }
            }
        }
   }
}

function mouseOver () {
    let diaDoMes = document.querySelector('#days');
    
    diaDoMes.addEventListener('mouseover', testando);
    function testando (event){
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
        event.target.style.color = 'bluu';
    }
}

function mouseOut() {
    let days = document.querySelector('#days');
  
    days.addEventListener('mouseout', function(event) {
      event.target.style.fontWeight = '200';
      event.target.style.fontSize = '20px';
    })
  };

  function criaTarefa (task) {
      let tarefas = document.querySelector('.my-tasks');
      let tarefa = document.createElement('span');
      tarefa.innerText = task;

      tarefas.appendChild(tarefa);
  }

  function adcionaLegenda (cor) {
      let tarefas = document.querySelector('.my-tasks');
      let task = document.createElement('div');
      task.className = 'task';
      task.style.backgroundColor = cor;
      console.log(task);
      tarefas.appendChild(task);
  }

  function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.keyCode === 13 && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
createDays();
addBotHoliday('Feriados');
changeColorHolidaysDays();
createButtonFriday ('Sexta-Feira');
modificaSextas ();
mouseOver ();
mouseOut();
criaTarefa ('estudarrr muito');
adcionaLegenda ('red')
setTaskClass();
setDayColor();
addNewTask();

