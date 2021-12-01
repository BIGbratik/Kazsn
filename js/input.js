var Key='admin';

function accessCtrl()
{
    if (document.getElementById("Key").value==Key)
    {
        document.getElementById('functional-container').style.display='block';
        document.getElementById('input-container').style.display='none';
    }
    else
    {
        alert('Вы ввели неверный ключ доступа!!!');
    }
}
