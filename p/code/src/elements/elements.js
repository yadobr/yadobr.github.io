class Elements
{
    constructor( element )
    {
        // Если element это не Node, а всего лишь string, то значит это селектор и надо выбрать элемент
        typeof element === 'string' && ( element = document.querySelector( element ) )

        // Main element of block
        this.element = element;

        if( element != null )
        {
            this.block_name = this.constructor.name.toLowerCase();

            // Array of child elements
            this.elements = [];

            Elements.slots = Elements.slots || {};

            // Автоинициализация элементов блока
            element || console.warn( 'Elements: element of class "%s" not found. Check the constructor argument of instance.', this.constructor.name);

            let child = element.querySelectorAll('[class*="' + this.block_name + '__"]');

            for( var i = 0; i < child.length; i++ )
            {
                // В классах элемента выбираем только тот класс, который относится к блоку. Например, form__row. А затем, оставляем только row.
                let name = child[i].classList.toString().match(/[a-z0-9-]*__[a-z0-9-]*/)[0].split('__')[1];

                // Узнаем, сколько есть дочерних элементов этого типа
                let length = element.querySelectorAll( this.block_name + '__' + name ).length;

                // Если больше одного, значит инициализируем как массив
                if ( length > 1 )
                {
                    this['__' + name] === 'undefined' && ( this['__' + name] = [] );
                    this['__' + name].push( child[ i ] );
                }
                else
                    this['__' + name] = child[i];

                // Дополнительно заносим все элементы в массив elements, в котором elements[name] всегда массив, назависимо от того, один там элемент или несколько
                typeof this.elements[name] === 'undefined' && ( this.elements[name] = [] );
                this.elements[name].push( child[ i ] );
            }
        }
    }

    // Содает экземпляр класса для всех блоков этого типа на странице
    static awake()
    {
        let name = this.name, // Name of class
            elements;

        elements = document.querySelectorAll( '.' + name.toLowerCase() );

        for( var i = 0; i < elements.length; i++ )
        {
            let element = elements[ i ];

            eval('new ' + name + '( element )')
        }
    }

    // Регистрируем слоты и блоки, от которых они ждут сигнала
    receive( params = {} )
    {
        Elements.slots = Elements.slots || {};

        Elements.slots[ this.block_name ] = Elements.slots[ this.block_name ] || {};

        Elements.slots[ this.block_name ][ params.from ] = { on: params.on, do: params.do };
    }

    // Транслируем сигнал
    send( params = {} )
    {
        // Получаем все слоты блока-получателя
        let slots = Elements.slots[ params.to ] || ( console.warn('Elements: slots of block "' + params.to + '" not found. Register slots of block using receive function or check block name in send function.') );

        // Ищем слот с именем блока-отправителя у блока-получателя
        let slot = slots[ this.block_name ] || ( console.warn('Elements: block "' + params.to + '" not contain slot for block "' + this.block_name + '". Check "from" field in receive functions.') );

        // Если слот найден
        if( typeof slot !== 'undefined' )
        {
            // То проверяем, совпадают ли события(on). И если совпадают, то вызываем do()
            if( params.on = slot.on )
                typeof slot.do === 'function' && slot.do( params.with );
        }
    }
}
