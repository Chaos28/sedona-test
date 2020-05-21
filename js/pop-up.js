var send = document.querySelector('.comment-form__button');
    var sendConfirm = document.querySelector('.pop-up-success');
    var sendFail = document.querySelector('.pop-up-failure');
    var close = document.querySelector('.pop-up-success__button-close');
    var closeFail = document.querySelector('.pop-up-failure__button-close');
    var requiredSurname = document.getElementById('user-surname');
    var requiredName = document.getElementById('user-name');
    var requiredMail = document.getElementById('email');

    send.addEventListener('click', function(evt)
    {
      evt.preventDefault();
      if (requiredSurname.value !== '' && requiredName.value !== '' && requiredMail.value !== '') {
      sendConfirm.classList.add('pop-up-show')
    } else { sendFail.classList.add('pop-up-show')}
    });

    close.addEventListener('click', function(evt) {
      evt.preventDefault();
      sendConfirm.classList.remove('pop-up-show');
    });

    closeFail.addEventListener('click', function(evt) {
      evt.preventDefault();
      sendFail.classList.remove('pop-up-show');
    });

    window.addEventListener ('keydown', function(evt) {
      if(evt.keyCode === 27) {
        if(sendConfirm.classList.contains('pop-up-show')) {
        sendConfirm.classList.remove('pop-up-show');
        }
      }
    });

    window.addEventListener ('keydown', function(evt) {
      if(evt.keyCode === 27) {
        if(sendFail.classList.contains('pop-up-show')) {
        sendFail.classList.remove('pop-up-show');
        }
      }
    });
