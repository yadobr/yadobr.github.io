class Form extends Elements
{
    constructor( element )
    {
        super( element );

        this.form = element;

        if( this.form != null )
        {
            this.ondone   = null;  // Upload done callback
            this.ondfail  = null;  // Upload ondfail callback
            this.onalways = null;  // Upload onalways callback
            this.onsubmit = null;  // Callback in submit function
            this.onclear  = null;  // Callback in Clear function

            this.filename = null; // File name of uploaded file

            if( typeof this.elements.file !== 'undefined' )
            {
                for( var i = 0; i < this.elements.file.length; i++ )
                {
                    // Remember handle of Form class instance to use in upload function. Because in upload funtion this != class instance. In upload function this = input[type="file"]
                    this.elements.file[ i ].handle = this;

                    // Remember form__browse button to use in upload function
                    this.elements.file[ i ].form__browse = document.querySelector('[for="' + this.elements.file[ i ].id + '"]')

                    // Add change event listener to input

                    this.elements.file[ i ].addEventListener( 'change', this.upload );
                }
            }

            if( typeof this.elements.clear !== 'undefined' )
            {
                for( var i = 0; i < this.elements.clear.length; i++ )
                {
                    this.elements.clear[ i ].addEventListener( 'click', () =>
                    {
                        this.clear();
                    } );
                }
            }

            if( typeof this.elements.submit !== 'undefined' )
            {
                // Кнопка вызывает событие submit и его callback - onsubmit
                for( var i = 0; i < this.elements.submit.length; i++ )
                    this.elements.submit[ i ].addEventListener('click', () => { this.submit() } )
            }

        }
    }

    upload()
    {
        var file_data = this.files[0],
            form_data = new FormData();

        form_data.append( 'file', file_data );

        req( 'upload', form_data, this.form__browse,
        {
            file: true,
            done  : ( response ) => { this.handle.done( response ) },
            fail  : ( response ) => { this.handle.fail( response ) },
            always: ( response ) => { this.handle.always( response ) }
        } );
    }

    done( response )
    {
        if( response.status )
            this.filename = response.file_name;

        typeof this.ondone === 'function' && this.ondone( response );
    }

    fail( response )
    {
        typeof this.onfail === 'function' && this.onfail( response );
    }

    always( response )
    {
        typeof this.onalways === 'function' && this.onalways( response );
    }

    submit()
    {
        typeof this.onsubmit === 'function' && this.onsubmit();
    }

    // Clear all inputs, when clicked on .form__clear element
    clear()
    {
        var inputs = this.form.querySelectorAll('input, .input, .textarea');

        for( var i = 0; i < inputs.length; i++ )
            inputs[ i ].value = '';

        typeof this.onclear === 'function' && this.onclear();
    }
}
