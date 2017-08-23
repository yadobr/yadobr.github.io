(function($){
    $.fn.jTree = function(opt){
        var tree = $(this),
            root,
            trunk,
            ul,
            li,
            curParent,
            curBranch;

        if(typeof opt == 'object')
        {
            if(opt.data != 'undefined')
            {
                root = $('<ul class="jTree-root">');
                trunk = $('<li class="jTree-trunk">');

                ( typeof opt.data == 'object' ) && ( trunk.html(opt.data.text) );

                root.append( trunk );
                tree.append( root );

                createTreeFromData(opt.data.children, 0, trunk);
            }
        }

        trunk = tree.find('.jTree-trunk');

        setEventsAndClasses();
        setBackgroundSizes();

        function setBackgroundSizes(){
            var trunkLastBranch = trunk.find('> ul > li:last-child'),
                trunkLastBranchTop;

            if ( trunkLastBranch.length != 0 )
            {
                trunkLastBranchTop = $(trunkLastBranch[trunkLastBranch.length - 1]).position().top;

                if (navigator.mozGetUserMedia != undefined)
                    trunk.css('background-size', '1px ' + Number(trunkLastBranchTop + 1) + 'px');
                else
                    trunk.css('background-size', '1px ' + trunkLastBranchTop + 'px');

                trunk.find('.jTree-branch-has-children-opened .jTree-branch-has-children-opened:last-child').each(function () {
                    $(this).parent().parent().css('background-size', '1px ' + $(this).position().top + 'px');
                });

                trunk.find('.jTree-leaf:last-child').each(function () {
                    if ($(this).children().length != 0)
                        if (navigator.mozGetUserMedia != undefined)
                            $(this).css('background-size', '1px ' + Number($(this).find(':last-child').position().top - 10) + 'px');
                        else
                            $(this).css('background-size', '1px ' + Number($(this).find(':last-child').position().top - 8) + 'px');
                });
            }
        }
        function setEventsAndClasses(){

            // TRUNK
            // Classes
            if( trunk.children().length != 0 )
                trunk.addClass('jTree-trunk-has-children');
            else
                trunk.addClass('jTree-trunk-no-children');

            // Events
            trunk.click(function(e){
                if( $(this).children().length != 0 ) {
                    if( !$(this).hasClass('jTree-trunk-has-children-opened') )
                        $(this).addClass('jTree-trunk-has-children-opened');
                    else
                        $(this).removeClass('jTree-trunk-has-children-opened');

                    setBackgroundSizes();
                }
                e.stopPropagation();
            });

            // BRANCHES
            trunk.find('.jTree-branch').each(function(){

                // Classes
                if( $(this).children().length != 0 ){
                    $(this).addClass('jTree-branch-has-children')
                }
                else{
                    $(this).addClass('jTree-branch-no-children');
                }

                // Events
                $(this).click(function(e){
                    if( $(this).children().length != 0 ){
                        if( !$(this).hasClass('jTree-branch-has-children-opened') )
                            $(this).addClass('jTree-branch-has-children-opened');
                        else {
                            $(this).removeClass('jTree-branch-has-children-opened');
                            $(this).css('background-image', '1px 0');
                        }

                        setBackgroundSizes();
                    }
                    e.stopPropagation();
                });
            });
        }

        function createTreeFromData( data, index, current_parrent )
        {
            // Обрабатываем объект
            if ( typeof data[index] == 'object' )
            {
                console.log(data[index].text);

                ul = $('<ul>');
                li = $('<li class="jTree-branch">');

                li.html( data[index].text );

                if( current_parrent[0].tagName == 'LI')
                {
                    ul.append(li);
                    current_parrent.append(ul);
                }

                // Если родительский тег - это UL, значит, что текущий элемент - это один из потомоков какого-то эелемента.
                // И не нужно создавать тэг UL, а надо только создать тэг LI, чтобы добавить в уже существующий контейнер для потомков(UL),
                // который ранее создали в родительском тэге LI
                else if( current_parrent[0].tagName == 'UL')
                {
                    current_parrent.append(li);
                }

                // Если у этого объекта есть дети, то выводим и их
                // Если у текущего элемента есть потомки, то создаем для них тэг UL прямо в родительском теге LI, как контейнер для потомков
                ( typeof data[index].children != 'undefined' ) && createTreeFromData(data[index].children, 0, $('<ul>').appendTo(li));
            }

            // Если текущий индекс не превышает количество детей главного массива данных,
            // то продолжаем рекурсию
            ( index < opt.data.children.length - 1 ) && createTreeFromData(data, ++index, current_parrent);
        }
    }
})(jQuery);
