var Menu = React.createClass({

    getTask: function () {
        ReactDOM.render(
            <Task/>,
            document.getElementById('content_data')

        );
    },

    getAllOrg: function () {
        document.getElementById('content_data').innerHTML = "";
    },

    addOrg: function () {
        ReactDOM.render(
            <NewOrganization/>,
            document.getElementById('content_data')

        );
    },

    render:function () {

        return(
            <div className="right-menu">
                <div className="wrap clearfix">
                    <ul>
                        <li className="rm">
                            <a href="#" id="task" title="Прочитать задание" onClick={this.getTask}>Задание<span className="icon"></span></a>
                        </li>
                        <li className="rm">
                            <a href="#" id="all" title="Все организации" onClick={this.getAllOrg}>Все<span className="icon"></span></a>
                        </li>

                        <li className="rm"  title="Добавить новую организацию">
                            <a href="#" id="add" onClick={this.addOrg}>Добавить<span className="icon"></span></a>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
});
ReactDOM.render(
    <Menu/>,
    document.getElementById('menu')

);
var Task = React.createClass({
    render: function () {
        return(
            <div>
                <h2>Необходимо реализовать простейший REST API сервер и клиент.</h2>
                <h3>Задача.</h3>
                <p>Реализовать работу со списком организаций. Каждая запись должна содержать следующие данные:</p>
                <ul>
                    <li>
                        <b>Тип.</b> Юридическое лицо (ЮЛ) или ИП.
                    </li>
                    <li>
                        <b>Наименование организации.</b> Обязательное к заполнению поле. Строка длиной не более 255 символов.
                        В строке не допускается одновременное использование символов латинского и кириллического алфавитов.
                    </li>
                    <li>
                        <b>ИНН.</b> Обязательное к заполнению поле. Должно содержать только цифры. Для ЮЛ 10 цифр, для ИП 12 цифр.
                    </li>
                    <li>
                        <b>КПП.</b> Для ЮЛ обязательное к заполнению поле. Для ИП не должно заполняться. Должно состоять из 9 цифр.
                    </li>
                    <li>
                        <b>Контактный телефон.</b> Обязательное к заполнению поле. Должно состоять из 10 цифр.
                    </li>
                    <li>
                        <b>Контактный e-mail.</b> Необязательное к заполнению поле. Строка длиной не более 255 символов. Должно проверяться на формат e-mail адресов.
                    </li>
                </ul>
                <p>Уникальность записей должна проверяться по совокупности двух полей: <b>ИНН, КПП</b>.</p>
                <p>Необходимо реализовать следующие операции с записями:</p>
                <ul>
                    <li>
                        <b>Просмотр</b> списка существующих записей.
                    </li>
                    <li>
                        <b>Добавление</b> новой записи.
                    </li>
                    <li>
                        <b>Редактирование</b> существующей записи.
                    </li>
                    <li>
                        <b>Удаление</b> существующей записи.
                    </li>
                </ul>

                <strong>Требования.</strong>
                <ul>
                    <li>
                        REST API сервер должен быть написан на PHP 5.4 (допускается использование фреймворка Yii2 или отсутствие фреймворков).
                    </li>
                    <li>
                        Клиент может представлять собой страницу, работающую с API через Java Script (страница не должна перезагружаться,
                        запросы к серверу только через JS) или PHP скрипт, реализующий работу с API на серверной стороне.
                    </li>
                    <li>
                        В качестве хранилища данных должна быть использована БД MySQL.
                    </li>
                    <li>
                        Указанные выше ограничения для полей должны проверяться как на стороне сервера,
                        так и на стороне клиента (при реализации клиента на PHP проверки должны осуществляться в том числе в браузере).
                    </li>
                    <li>
                        Использование Bootstrap для оформления пользовательского интерфейса клиента будет плюсом.
                    </li>
                </ul>
            </div>
        );
    }
});
ReactDOM.render(
    <Task/>,
    document.getElementById('content_data')

);

var NewOrganization = React.createClass({

    componentDidMount: function () {
        {validMask()}
    },

   render: function () {

       return(
           <form>

               <label>Тип</label>
               <select  id="type" onChange={valid}>
                   <option id="select_0">Юридическое лицо</option>
                   <option id="select_1">Индивидуальный предприниматель</option>
               </select>
               <label>Наименование <span>*</span></label>
               <input type = "text" id="name"/>

               <label>ИНН <span>*</span></label>
               <input type = "text" id="inn"/>

               <label>КПП <span>*</span></label>
               <input type = "text" id="kpp"/>

               <label>Телефон</label>
               <input type = "text" id="tel"/>

               <label>e-mail</label>
               <input type = "email" id="mail" className="validate"/>

               <button onClick={save}>Сохранить</button>


           </form>

       );
   }
});
function validMask() {
    $("#tel").mask("+7 (999) 999-9999");

    $("#inn").on('change',function() {

        if($('#type').val()=="Юридическое лицо"){
            if(event.currentTarget.value.length < 10){
                $("#inn").css({
                    "background-color": "rgba(255, 0, 0, 0.2)"
                });
            } else{
                $("#inn").css({
                    "background-color": "#fff"
                });
            }
        }else {
            if (event.currentTarget.value.length < 12) {
                $("#inn").css({
                    "background-color": "rgba(255, 0, 0, 0.2)"
                });
            } else {
                $("#inn").css({
                    "background-color": "#fff"
                });
            }
        }
    });

    $("#kpp").on('change',function() {

        if($('#type').val()=="Юридическое лицо"){
            if(event.currentTarget.value.length < 9){
                $("#kpp").css({
                    "background-color": "rgba(255, 0, 0, 0.2)"
                });
            } else{
                $("#kpp").css({
                    "background-color": "#fff"
                });
            }
        }else {
            $("#kpp").css({
                "background-color": "#fff"
            });

        }
    });

    $("#name").on('change',function() {
        if($("#name").val()==""){
            $("#name").css({
                "background-color": "rgba(255, 0, 0, 0.2)"
            });
        }else{
            $("#name").css({
                "background-color": "#fff"
            });
        }
    });

    if($('#type').val()=="Юридическое лицо"){
        $("#inn").mask("9999999999");
        $("#kpp").mask("999999999");
    }else{
        $("#inn").mask("999999999999");
        $("#kpp").mask("0");
    }

        $("#mail").on('input',function() {

            var email = $.trim(this.value), $span = $(this);

            if (email) {
                if (isValidEmailAddress(email)) {
                    $span.css({
                        "background-color": "#fff"
                    });
                } else {
                    $span.css({
                        "background-color": "rgba(255, 0, 0, 0.2)"
                    });
                }
            } else {
                $span.css({
                    "background-color": "#fff"
                });
            }

        });

    $("#type").on('change', function () {
        if(event.currentTarget.value=="Юридическое лицо"){
            $("#inn").mask("9999999999");
            $("#kpp").mask("999999999");
        }else{
            $("#inn").mask("999999999999");
            $("#kpp").mask("0");
            $("#kpp").val("0");
        }
    })

}
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}
function valid() {
    if($('#type').val()=="Юридическое лицо"){
        if($("#inn").val().length < 10){
            $("#inn").css({
                "background-color": "rgba(255, 0, 0, 0.2)"
            });
        } else{
            $("#inn").css({
                "background-color": "#fff"
            });
        }

        if($("#kpp").val().length < 9){
            $("#kpp").css({
                "background-color": "rgba(255, 0, 0, 0.2)"
            });
        } else{
            $("#kpp").css({
                "background-color": "#fff"
            });
        }

    }else {
        if ($("#inn").val().length < 12) {
            $("#inn").css({
                "background-color": "rgba(255, 0, 0, 0.2)"
            });
        } else {
            $("#inn").css({
                "background-color": "#fff"
            });
        }

        $("#kpp").css({
            "background-color": "#fff"
        });
    }

    if($('#name').val()==""){
        $("#name").css({
            "background-color": "rgba(255, 0, 0, 0.2)"
        });
    }else{
        $("#name").css({
            "background-color": "#fff"
        });
    }

}

function save(){
    valid();
    var selectedInput = $("input");

    var count = selectedInput.length;

    for(var i=0;i<selectedInput.length;i++){
        if($(selectedInput[i]).css("background-color") != "rgba(255, 0, 0, 0.2)"){
            count--;
        }
    }
    if(count==0){
        alert("сохраняю");
    }

}
/*return(
 <div className="addOrg col-xs-24">
 <div className="col-xs-24">
 <label className="col-xs-6">Наименование организации:</label>
 <input type="text" className="col-xs-18"/>
 </div>
 <div className="col-xs-24">
 <label className="col-xs-6">Статус</label>
 <select  className="col-xs-18">
 <option>Юридическое лицо</option>
 <option>Индивидуальный предприниматель</option>
 </select>
 </div>
 <div className="col-xs-24">
 <label className="col-xs-6">ИНН</label>
 <input type="text" className="col-xs-18" onKeyPress={this.validateNum}/>
 </div>
 <div className="col-xs-24">
 <label className="col-xs-6">КПП</label>
 <input type="text" className="col-xs-18" onKeyPress={this.validateNum}/>
 </div>
 <div className="col-xs-24">
 <label className="col-xs-6">Контактный номер</label>
 <input type="tel" className="col-xs-18" onKeyPress={this.validateTel}/>
 </div>
 <div className="col-xs-24">
 <label className="col-xs-6">e-mail</label>
 <input type="email" className="col-xs-18"/>
 </div>
 <div className="col-xs-24">
 <button>Добавить</button>
 </div>
 </div>
 );*/