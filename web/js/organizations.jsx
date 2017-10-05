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
    validateNum: function (event) {
        var theEvent = event || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /d{10}|\d{12}/;
        if( !regex.test(key) ) {
            theEvent.returnValue = false;
            if(theEvent.preventDefault) theEvent.preventDefault();
        }
    },

   validateTel:function (event) {
       var theEvent = event || window.event;
       var key = theEvent.keyCode || theEvent.which;
       key = String.fromCharCode( key );
       var regex = /[0-9]{10}/;
       if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault();
       }
   },
   render: function () {
       return(
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
       );
   }
});

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}