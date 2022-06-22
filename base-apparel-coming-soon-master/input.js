function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);

    if(val === "" || !validMail(val))
    {
        element = document.querySelector('#error-symbol');
        element.style.visibility = 'visible';

        element2 = document.querySelector('p2');
        element2.style.visibility = 'visible';
    }
    else {
        element = document.querySelector('#error-symbol');
        element.style.visibility = 'hidden';

        element2 = document.querySelector('p2');
        element2.style.visibility = 'hidden';
    }
  }

function validMail(mail)
{
    return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
}