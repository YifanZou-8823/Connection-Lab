window.addEventListener('load',() => {
    document.getElementById('button-mood').addEventListener('click', () => {
        let mood = document.getElementById('mood-type').value;
        console.log(mood);

        //creating the object
        let obj = {"mood":mood};
        
        //stringify the object
        let jsondata = JSON.stringify(obj);

        //fetch to route moodTypes
        fetch('/moodTypes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsondata
        })
        .then(response => response.json())
        .then(data => {console.log(data)})

        //1. make a fetch request of type post to the server
    })

    document.getElementById('get-tracker').addEventListener('click', () => {
        //get info on ALL the coffee we've had so far
        fetch('/getMood')
        .then(response => response.json())
        .then(data =>{
            document.getElementById('mood-info').innerHTML = "";
            console.log(data.data);
            for(let i=0; i<data.data.length; i++){
                let string = data.data[i].date + ":" + data.data[i].mood;
                let elt = document.createElement('p');
                elt.innerHTML = string;
                document.getElementById('mood-info').appendChild(elt);
            }
        })

});
})