$( document ).ready( function () {
    $( "#tel" ).mask( "(00) 00000-0000", {
        placeholder: "(00) 00000-00000",
    } );

    $( "form" ).validate( {
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            mensagem: {
                required: true,
            },
        },
        messages: {
            nome: "Por favor, digite seu nome completo",
            email: "Por favor, digite seu email",
            mensagem: "Por favor deixe uma mensagem",
        },
        submitHandler: function ( form ) {
            console.log( form );
            $( "#nome" ).val( "" );
            $( "#email" ).val( "" );
            $( "#tel" ).val( "" );
            $( "#mensagem" ).val( "" );
        },
    } );
} );
