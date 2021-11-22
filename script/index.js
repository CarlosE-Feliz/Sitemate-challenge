function reusable (){
    var parentDiv = document.getElementById('main');
    var clickMe = document.getElementById('clickMeBtn');

    var btnYes = document.createElement('button');
    btnYes.id = 'btnYes';
    btnYes.className = 'btnYes';
    btnYes.innerHTML = 'Yes'
    
    var btnCancel = document.createElement('button');
    btnCancel.id = 'btnCancel';
    btnCancel.className = 'btnCancel';
    btnCancel.innerHTML = 'Cancel';

    var modalContainer = document.createElement('div');
    modalContainer.id = 'modal_container';
    modalContainer.className = 'modal-container'
    var modal = document.createElement('div');
    modal.className = 'modal';

    var text = document.createElement('h4');
    text.id = "successMsg"
    text.innerHTML = 'Are you sure you want to continue?'

    var message = document.createElement('p');
    

    btnYes.addEventListener('click', () => {
        message.innerHTML = 'You just clicked "Yes"';
        document.getElementById('buttonContainer').appendChild(message);
        modalContainer.style.display = 'none';
        
    })
    btnCancel.addEventListener('click', () => {
        message.innerHTML = 'You just clicked "Cancel"';
        document.getElementById('buttonContainer').appendChild(message);
        modalContainer.style.display = 'none';
    })

    clickMe.addEventListener('click', () =>{
        parentDiv.appendChild(modalContainer);
        modalContainer.appendChild(modal);
        modal.appendChild(text);
        modal.appendChild(btnYes);
        modal.appendChild(btnCancel);
        modalContainer.style.display = 'flex';
        document.getElementById('buttonContainer').removeChild(message);
    })
}

reusable()