'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

;(function ($) {
    var Login = function () {
        function Login() {
            _classCallCheck(this, Login);

            this._form = document.forms['loginForm'];
            this._allInputReq = document.querySelectorAll('.required');
            this._inputSavePass = this._form.elements['save-passw'];
            this._sendFormBtn = this._form.elements['sendForm'];
            this._canSend = true;
            this._formData = {};
            this.regExp = {
                login: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                password: /\S+/
            };
        }

        _createClass(Login, [{
            key: 'init',
            value: function init() {
                var self = this;

                this.checkTocken();

                if (this._form == undefined || this._allInputReq == undefined || this._inputSavePass == undefined) {
                    console.error('Form elements undefined');
                } else {
                    this.formEvents(self);
                }
            }
        }, {
            key: 'checkTocken',
            value: function checkTocken() {
                localStorage.getItem('taskToken') || sessionStorage.getItem('taskToken') ? window.location = '/task' : false;
            }
        }, {
            key: 'formEvents',
            value: function formEvents(self) {
                this._form.addEventListener('submit', function (e) {
                    e.preventDefault();
                    self._canSend = true;
                    self._formData = {};
                    self._allInputReq.forEach(function (input) {
                        if (!self.regExp[input.name].test(input.value)) {
                            input.classList.add('error');
                            self._canSend = false;
                        } else {
                            input.classList.remove('error');
                            self._formData[input.name] = input.value;
                        }
                    });

                    console.log(self._formData, self._canSend);
                    self._canSend ? self.sendFormAjax(self._formData, self) : console.error('input regexp test error');
                });
            }
        }, {
            key: 'sendFormAjax',
            value: function sendFormAjax(data, self) {
                console.log(data);
                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    success: function success(res) {
                        console.log(res);

                        self._inputSavePass.checked ? localStorage.setItem('taskToken', res._id) : sessionStorage.setItem('taskToken', res._id);

                        setTimeout(function () {
                            window.location = '/task';
                        }, 10000);
                    },
                    error: function error(err) {
                        console.error(err);
                    }
                });
            }
        }]);

        return Login;
    }();

    var newLogin = new Login();
    newLogin.init();
})(jQuery);