;(function ($) {
    class Login {

        constructor(){
            this._form = document.forms['loginForm'];
            this._allInputReq = document.querySelectorAll('.required');
            this._inputSavePass = this._form.elements['save-passw'];
            this._sendFormBtn = this._form.elements['sendForm'];
            this._canSend = true;
            this._formData = {};
            this.regExp = {
                login:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                password:/\S+/,
            }
        }

        init(){
            var self = this;

            this.checkTocken();

            if(this._form == undefined || this._allInputReq == undefined || this._inputSavePass  == undefined){
                console.error('Form elements undefined');
            } else {
                this.formEvents(self);
            }

        }

        checkTocken(){
            localStorage.getItem('taskToken') || sessionStorage.getItem('taskToken') ?
                window.location = '/task' : false;
        }

        formEvents(self){
            this._form.addEventListener('submit', function (e) {
                e.preventDefault();
                self._canSend = true;
                self._formData = {};
                self._allInputReq.forEach(input => {
                    if(!self.regExp[input.name].test(input.value)){
                        input.classList.add('error');
                        self._canSend = false;
                    } else {
                        input.classList.remove('error');
                        self._formData[input.name] = input.value;
                    }
                });

                console.log(self._formData, self._canSend );
                self._canSend ? self.sendFormAjax(self._formData, self) : console.error('input regexp test error');
            })
        }

        sendFormAjax(data, self){
            console.log(data);
            $.ajax({
                method:'POST',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (res) {
                    console.log(res);

                    self._inputSavePass.checked ?
                        localStorage.setItem('taskToken', res._id) :
                        sessionStorage.setItem('taskToken', res._id);

                        setTimeout(function () {
                            window.location = '/task';
                        }, 10000)

                },
                error: function (err) {
                      console.error(err)
                }
            })
        }

    }

    var newLogin = new Login();
    newLogin.init();
})(jQuery);
