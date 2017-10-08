var Menu = React.createClass({

    getTask: function () {
        $('#content_data').html("");
        ReactDOM.render(
            <Task/>,
            document.getElementById('content_data')

        );
    },

    getAllOrg: function () {
        $('#content_data').html("");
        ReactDOM.render(
            <OrganizationList
            portion={0}
            />,
            document.getElementById('content_data')

        );
    },

    addOrg: function () {
        $('#content_data').html("");
        ReactDOM.render(
            <NewOrganization
                type=""
                name=""
                inn=""
                kpp=""
                tel=""
                mail=""
                actions='new'
            />,
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

    shouldComponentUpdate: function(){
        $('#content_data').html("");
        ReactDOM.render(
            <NewOrganization
               actions='new'
            />,
            document.getElementById('content_data')
        );
    },

    componentDidMount: function () {

        if(this.props.type==1){
            $('#select_0').attr('selected', 'true')
        }else if(this.props.type==2){
            $('#select_1').attr('selected', 'true')
        }
        {this.validMask()}
        {this.valid()}
    },

    validMask: function() {
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

        if($('#type').val()=="Юридическое лицо"){
            $("#inn").mask("9999999999");
            $("#kpp").mask("999999999");
        }else{
            $("#inn").mask("999999999999");
            $("#kpp").mask("0");
        }



    },


    valid: function() {
        if($('#type').val()=="Юридическое лицо"){
            if(!!!$("#inn").val() && $("#inn").val().length < 10){
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
            if (!!!($("#inn").val()) && $("#inn").val().length < 12) {
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

    },

    add: function(){
        this.validMask();
        this.valid();
        var selectedInput = $("input");

        var count = selectedInput.length;

        for(var i=0;i<selectedInput.length;i++){
            if($(selectedInput[i]).css("background-color") != "rgba(255, 0, 0, 0.2)"){
                count--;
            }
        }
        if(count==0) {
            $.ajax({
                url: 'organizations/organizations/create',
                type: 'POST',
                data: {
                    type: $("#type").val(),
                    name: $("#name").val(),
                    inn: $("#inn").val(),
                    kpp: $("#kpp").val(),
                    tel: $("#tel").val(),
                    mail: $("#mail").val()
                },
                success: function (data) {
                    if (data) {
                        alert("Успешно");
                        //переход к списку
                    } else {
                        alert("Ошибка сохранения1");
                    }
                },
                error: function () {
                    alert("Ошибка сохранения2");
                }
            })
        }
    },
    update: function(){
        this.validMask();
        this.valid();
        var selectedInput = $("input");

        var count = selectedInput.length;

        for(var i=0;i<selectedInput.length;i++){
            if($(selectedInput[i]).css("background-color") != "rgba(255, 0, 0, 0.2)"){
                count--;
            }
        }
        if(count==0) {
            $.ajax({
                url: 'organizations/organizations/update',
                type: 'POST',
                data: {
                    inn_old: this.props.inn,
                    kpp_old: this.props.kpp,
                    type: $("#type").val(),
                    name: $("#name").val(),
                    inn: $("#inn").val(),
                    kpp: $("#kpp").val(),
                    tel: $("#tel").val(),
                    mail: $("#mail").val()
                },
                success: function (data) {
                    if (data) {
                        alert("Успешно");
                        //переход к списку
                    } else {
                        alert("Ошибка сохранения1");
                    }
                },
                error: function () {
                    alert("Ошибка сохранения2");
                }
            })
        }
    },

   delete: function () {
       $.ajax({
           url: 'organizations/organizations/delete',
           type: 'POST',
           data: {
               inn: $("#inn").val(),
               kpp: $("#kpp").val(),

           },
           success: function (data) {
               if (data) {
                   alert("Успешно");
                   //$('#content_data').html("");
                   ReactDOM.render(
                       <OrganizationList
                           portion={0}
                       />,
                       document.getElementById('content_data')

                   );
               } else {
                   alert("Ошибка сохранения1");
               }
           },
           error: function () {
               alert("Ошибка сохранения2");
           }
       })
   },
   render: function () {

       if(this.props.actions=='run') {
           return (

               <form>

                   <label>Тип</label>
                   <select id="type" onChange={this.valid}>
                       <option id="select_0">Юридическое лицо</option>
                       <option id="select_1">Индивидуальный предприниматель</option>
                   </select>
                   <label>Наименование <span>*</span></label>
                   <input type="text" id="name" defaultValue={this.props.name}/>

                   <label>ИНН <span>*</span></label>
                   <input type="text" id="inn" defaultValue={this.props.inn}/>

                   <label>КПП <span>*</span></label>
                   <input type="text" id="kpp" defaultValue={this.props.kpp}/>

                   <label>Телефон</label>
                   <input type="text" id="tel" defaultValue={this.props.tel}/>

                   <label>e-mail</label>
                   <input type="email" id="mail" className="validate" defaultValue={this.props.mail}/>

                   <button onClick={this.update}>Сохранить</button>
                   <button onClick={this.delete}>Удалить</button>


               </form>

           );
       }else{

           return (

               <form>

                   <label>Тип</label>
                   <select id="type" onChange={this.valid}>
                       <option id="select_0">Юридическое лицо</option>
                       <option id="select_1">Индивидуальный предприниматель</option>
                   </select>
                   <label>Наименование <span>*</span></label>
                   <input type="text" id="name"/>

                   <label>ИНН <span>*</span></label>
                   <input type="text" id="inn"/>

                   <label>КПП <span>*</span></label>
                   <input type="text" id="kpp"/>

                   <label>Телефон</label>
                   <input type="text" id="tel"/>

                   <label>e-mail</label>
                   <input type="email" id="mail" className="validate"/>

                   <button onClick={this.add}>Сохранить</button>


               </form>

           );
       }
   }
});

var Organization = React.createClass({
    
    getInitialState: function () {
        return{
        type:''}
    },

    componentDidMount: function(){
        {
            $.get('organizations/organizations/types?type=' + this.props.type, function(result) {
                if (result) {
                    var rez = JSON.parse(result);
                    this.setState({
                        type:rez['short_name']
                    });
                }
            }.bind(this));
            this.render();
        }
    },

    actions: function(){
        return(
            ReactDOM.render(
                <NewOrganization
                    type={this.props.type}
                    name={this.props.name}
                    inn={this.props.inn}
                    kpp={this.props.kpp}
                    tel={this.props.tel}
                    mail={this.props.mail}
                    actions='run'
                />,
                document.getElementById('content_data')
            )
        );
    },

    render: function () {
        var name = '';

         return(
             <tr>
                 <td><a href="#" onClick={this.actions}><i className="fa fa-bars"> </i></a></td>
                <td>{this.state.type}</td>
                 <td>{this.props.name}</td>
                <td>{this.props.inn}</td>
                <td>{this.props.kpp}</td>
                <td>{this.props.tel}</td>
                <td>{this.props.mail}</td>
             </tr>
         );
    }
});

var OrganizationList = React.createClass({

    getInitialState:function () {
        return {
            data: '',
            //portion: 0,
            count:0,
            types: ''
        }
    },

    componentDidMount: function () {
        {
            $.get('organizations/organizations/all?portion=' + this.props.portion, function(result) {
                var arr = JSON.parse(result);

                if (arr[1]) {

                    this.setState({
                        data:arr[1],
                        count:arr[0]
                    });
                }
            }.bind(this));
            this.render();
        }
    },


    render: function () {

        if(Array.isArray(this.state.data)) {
            return (
                <div>
                    <Pagination
                        count= {this.state.count}
                        num={this.props.portion}
                    />
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <td><i className="fa fa-cog"> </i></td>
                        <td>
                            Тип
                        </td>
                        <td>
                            Наименование
                        </td>
                        <td>
                            ИНН
                        </td>
                        <td>
                            КПП
                        </td>
                        <td>
                            Телефон
                        </td>
                        <td>
                            e-mail
                        </td>
                    </tr>
                    </thead>
                    <tbody>

                    {

                        this.state.data.map(function (el) {

                                return <Organization
                                    type={el.type_id}
                                    name={el.name}
                                    inn={el.inn}
                                    kpp={el.kpp}
                                    tel={el.fone_number}
                                    mail={el.e_mail}
                                />;
                            }
                        )
                    }

                    </tbody>
                </table></div>
            );
        }else{
            return(
                <div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <td><i className="fa fa-cog"> </i></td>
                                <td>
                                    Тип
                                </td>
                                <td>
                                    Наименование
                                </td>
                                <td>
                                    ИНН
                                </td>
                                <td>
                                    КПП
                                </td>
                                <td>
                                    Телефон
                                </td>
                                <td>
                                    e-mail
                                </td>
                            </tr>
                        </thead>
                        <tbody> </tbody>
                    </table>
                    </div>
            )
        }
    }
});

var Pagination = React.createClass({

    prev: function () {
        $('#content_data').html("");
        var prevInd = this.props.num;
        if(this.props.num>0){
            prevInd--;
        }
        ReactDOM.render(
            <OrganizationList
                portion={prevInd}
            />,
            document.getElementById('content_data')

        );
    },

    next: function () {
        $('#content_data').html("");
        var nextInd = this.props.num;
        if(nextInd<this.props.count-1){
            nextInd++;
        }
        ReactDOM.render(
            <OrganizationList
                portion={nextInd}
            />,
            document.getElementById('content_data')

        );
    },

    render: function() {
        var pages = [];
        var num = this.props.num;
        if(this.props.count-1 - num >= 10) {
            for (var i = num; ; i++) {
                if (num < this.props.count && i < 10) {

                    pages[i] = num;
                    num++;
                } else {
                    break;
                }

            }
        }else{
            for (var i = 0; ; i++) {
                if (i < this.props.count) {

                    pages[i] = i;
                   // num++;
                } else {
                    break;
                }

            }
        }
        if (Array.isArray(pages)) {
            return (
                <ul className="pagin">
                    <li> <a href="#" onClick={this.prev} ><i className="fa fa-angle-double-left"> </i></a> </li>
                    {
                        pages.map(function (el) {
                                return <PgnBtn
                                    next={el}
                                />;
                            }
                        )}
                    <li><a href="#" onClick={this.next}> <i  className="fa fa-angle-double-right"> </i></a></li>
                </ul>
            );
        }else{
            return(
                <ul> </ul>
            );
        }
    }


});

var PgnBtn = React.createClass({
    next: function () {
        $('#content_data').html("");
        ReactDOM.render(
            <OrganizationList
            portion={this.props.next}
            />,
            document.getElementById('content_data')

        );
    },
    render: function () {

        return(
            <li><a href="#" onClick={this.next}> {this.props.next+1}</a></li>
        )
    }
})

function     isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

