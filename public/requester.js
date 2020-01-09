$('#modal-notification').modal({ show: false})



function addChild() { // ALLFIELDS'
    var fatherName = document.getElementById('fatherName').value;
    var motherName = document.getElementById('motherName').value;
    var parentContact = document.getElementById('parentContact').value;
    var dob = document.getElementById('dob').value;
    var doctor_id = document.getElementById('doctor_id').value;


    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/user/addChild', true);
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.responseType = 'json'

    var reqData = JSON.stringify({fatherName: fatherName, motherName: motherName, parentContact: parentContact, dob: dob, doctor_id: doctor_id , firstDosage : true})
    xhr.addEventListener('load' ,()=>{
        if(xhr.response.done){
            
            $('#modal-notification').modal({show:true})
            document.getElementById('modal-content').classList.remove('bg-gradient-danger');
            document.getElementById('modal-content').classList.add('bg-gradient-success');
            document.getElementById('modal-title').innerHTML = 'Success'
            document.getElementById('modal-text').innerHTML = 'The Child has been successfully registered. Child ID is '+xhr.response.child_id;
        }
        else{
            $('#modal-notification').modal({show:true})
            document.getElementById('modal-title').innerHTML = 'Failure'
            document.getElementById('modal-text').innerHTML = xhr.response.message;
            document.getElementById('modal-content').classList.add('bg-gradient-danger');
            document.getElementById('modal-content').classList.remove('bg-gradient-success');

        }
    })
    xhr.send(reqData)
}

function loadChild(){
    var child_id = document.getElementById('child_id').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/function/loadChild')
    xhr.setRequestHeader('Content-type' , 'application/json')
    xhr.responseType = 'json'

    var reqData = JSON.stringify({child_id : child_id})
    xhr.addEventListener('load', ()=>{
        if(xhr.response){
            document.getElementById('fatherName').innerHTML = xhr.response.fatherName;
            document.getElementById('motherName').innerHTML = xhr.response.motherName;
            document.getElementById('vaccine').innerHTML = xhr.response.nextVaccine.name;
            var nextDate = new Date(xhr.response.nextVaccine.date)  
            document.getElementById('dateOfVaccine').innerHTML = nextDate.getDate()+'/'+(nextDate.getMonth()+1)+'/'+nextDate.getFullYear();
        }
        else{
            $('#modal-notification').modal({show:true})
            document.getElementById('modal-title').innerHTML = 'Failure'
            document.getElementById('modal-text').innerHTML = 'Child with the given ID not found';
            document.getElementById('modal-content').classList.add('bg-gradient-danger');
            document.getElementById('modal-content').classList.remove('bg-gradient-success');
        }
    })
    xhr.send(reqData)
}

function markVaccineGiven(){
    var child_id = document.getElementById('child_id').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/function/markVaccineGiven')
    xhr.setRequestHeader('Content-type' , 'application/json')
    xhr.responseType = 'json'

    var reqData = JSON.stringify({child_id : child_id})
    xhr.addEventListener('load', ()=>{
        if(xhr.response.done){
            $('#modal-notification').modal({show:true})
            document.getElementById('modal-content').classList.remove('bg-gradient-danger');
            document.getElementById('modal-content').classList.add('bg-gradient-success');
            document.getElementById('modal-title').innerHTML = 'Success'
            document.getElementById('modal-text').innerHTML = 'Vaccine data for the Child has been updated';
            loadChild();
        }
        else{
            $('#modal-notification').modal({show:true})
            document.getElementById('modal-title').innerHTML = 'Failure'
            document.getElementById('modal-text').innerHTML = 'Child with the provided ID not Found';
            document.getElementById('modal-content').classList.add('bg-gradient-danger');
            document.getElementById('modal-content').classList.remove('bg-gradient-success');
        }
    })
    xhr.send(reqData)
}


function sendMessages(){
    var doctor_id = document.getElementById('doctor_id').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/function/sendMessages')
    xhr.setRequestHeader('Content-type' , 'application/json')
    xhr.responseType = 'json'

    var reqData = JSON.stringify({doctor_id : doctor_id})
    xhr.addEventListener('load', ()=>{
        if(xhr.response.done){
            $('#modal-notification').modal({show:true})
            document.getElementById('modal-content').classList.remove('bg-gradient-danger');
            document.getElementById('modal-content').classList.add('bg-gradient-success');
            document.getElementById('modal-title').innerHTML = 'Success'
            document.getElementById('modal-text').innerHTML = 'All messages has been sent';
        }
        else{
            $('#modal-notification').modal({show:true})
            document.getElementById('modal-title').innerHTML = 'Failure'
            document.getElementById('modal-text').innerHTML = xhr.response.message;
            document.getElementById('modal-content').classList.add('bg-gradient-danger');
            document.getElementById('modal-content').classList.remove('bg-gradient-success');
        }
    })
    xhr.send(reqData)
}


