$(document).ready(function()
{
	var appId = '9B546185-DF31-5378-FF41-1FB6010ECE00',
    secretKey = 'E5BE339C-7642-26AD-FF57-19404DDA1D00',
    version = 'v1';

	Backendless.initApp( appId, secretKey, version); // where to get the argument values for this call
});

function send(hnd)
{
	var name = $('#name').val(),
		num = $('#num').val();

	name = name.replace(/ /g, '');
	num = num.replace(/ /g, '');

	if( name.length != 0 && num.length != 0 )
	{
		if( num.length == 11 )
		{

			$(hnd).html('Отправлено!');

			setTimeout(function()
				{
					$(hnd).html('Отправить');
				}, 4000);

			Backendless.UserService.login( 'test@mail.ru', 'testpassw');

			var successCallback = function( response )
			{
			  alert('Заявка принята! Наш мастер скоро перезвонит вам!');
			};

			var failureCallback = function( fault )
			{
			  alert('Ошибка отправки. Пожалуйста, свяжитесь с нами по электронной почте: remontuu03@mail.ru');
			};

			// prepare message bodies (plain and html) and attachment
			var bodyParts = new Bodyparts();
			bodyParts.textmessage = $('#txt').val();
			bodyParts.htmlmessage = 'Имя: <b>'+name+'</b><br>Номер: <b>'+num+'</b>';
			//var attachments = ["backendless-codegen.zip" ];

			// asynchronous call
			var responder = new Backendless.Async( successCallback, failureCallback );
			//Backendless.Messaging.sendEmail( "Заявка", bodyParts, [ "remontuu03@mail.ru" ], undefined, responder );

		}
		else
		{
			alert('Поле "Номер телефона" должно содержать 11 цифр');
		}
	}
	else
	{
		alert('Поля "Имя" и "Номер телефона" не должны быть пустыми!');
	}
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
