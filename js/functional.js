
function exitFromAdd()
{
    document.getElementById('functional-container').style.display='none';
    document.getElementById('input-container').style.display='block';
    document.getElementById('post').style.display='none';
    document.getElementById("Key").value='';
    document.getElementById("Coordinate1").value='';
    document.getElementById("Coordinate2").value='';
    document.getElementById("Extra").value='';
    document.getElementById("Name").value='';
}

function addObject()
{
    document.getElementById('post').style.display='block';
}

async function postServer()
{
    if ((document.getElementById('objectSelect').value=='poo')&&(document.getElementById('Extra').value==''))
    {
        alert('Для создание объекта"ПОО" необходимо указать в дополнительной информации класс опасности');
    }
    else
    {
        let message=
        {
            File: document.getElementById('objectSelect').value,
            Coordinates: [document.getElementById('Coordinate1').value, document.getElementById('Coordinate2').value],
            Name: document.getElementById('Name').value,
            Extra: document.getElementById('Extra').value
        };

        console.log(message);

        let response = await fetch(`http://192.168.43.86:8080/`,
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(message)
        });
        console.log(response);
    }
}