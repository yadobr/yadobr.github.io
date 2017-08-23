// DROPDOWN
(function($)
{
    var toggle,
        dropdown;

    // Get "data-dropdown-toggle-for" elements
    $('[data-dropdown-toggle-for]').each(function()
    {
        open_dropdown($(this));
    });

    function open_dropdown(toggle)
    {
        toggle.on('click', function()
        {
            toggle = $(this);

            toggle.addClass('dropdown_toggle-active');

            dropdown = $('#'+toggle.attr('data-dropdown-toggle-for'));
            dropdown.css({
                'left': toggle.offset().left + toggle.width() - dropdown.outerWidth() +'px',
                'top': '60px'
            });
            dropdown.addClass('dropdown_active');

            window.addEventListener('click', close_dropdown, true);
        });
    }

    function close_dropdown(e)
    {
        var element = $(e.target || e.srcElement);

        if(element.parents('.dropdown').length == 0)
        {
            $('.dropdown_active').removeClass('dropdown_active');
            $('.dropdown_toggle-active').removeClass('dropdown_toggle-active');

            window.removeEventListener('click', 'close_dropdown');
        }
    }
})(jQuery);



// MODAL
(function($)
{
    var toggle,
        modal,
        close;

    // Get "data-modal-toggle-for" elements
    $('[data-modal-toggle-for]').each(function()
    {
        open_modal($(this));
    });

    function open_modal(toggle)
    {
        toggle.on('click', function()
        {
            toggle = $(this);

            toggle.addClass('modal_toggle-active');

            modal = $('#'+toggle.attr('data-modal-toggle-for'));
            modal.addClass('modal_active');

            window.addEventListener('click', close_modal, true);

            close = modal.find('.modal__close');
            close.on('click', close_modal);
        });
    }

    function close_modal(e)
    {
        var element = $(e.target || e.srcElement);
        if
        (
            element.parents('.modal__content').length == 0 ||
            element.hasClass('modal__close')
        )
        {
            $('.modal_active').removeClass('modal_active');
            $('.modal_toggle-active').removeClass('modal_toggle-active');

            window.removeEventListener('click', 'close_modal');
        }
    }
})(jQuery);
