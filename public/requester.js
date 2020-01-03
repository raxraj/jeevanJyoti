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
            alert(xhr.response.message)
        }
        else{
            alert(xhr.response.message)
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
            alert('Child Not Found')
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
            alert("Child's Vaccine given Data has been")
            loadChild();
        }
        else{
            alert("Child not Found")
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
            alert("All Messages has been sent")
        }
        else{
            alert(xhr.response.message)
        }
    })
    xhr.send(reqData)
}


