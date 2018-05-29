//Создаем компонент Ishop
var Ishop = React.createClass({

    displayName: 'ishop',
  
    // Прописываем дефолтное значение props
    getDefaultProps: function() {
      return { items:[
        {id:'№', label:'Наименование',count:'Количество', price:'Цена', link: 'URL', code:1},
        {id:1, label:'слива', count:700, price:15, link: 'https://goo.gl/haJuRU', code:2}] }
    },

    // Включаем проверку типов для props компонента
    propTypes: {
      items: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.any,
        label: React.PropTypes.string.isRequired,
        count: React.PropTypes.number,
        price: React.PropTypes.number,
        link: React.PropTypes.string,     
    }))
  },
  
    render: function() {     
        //Создаем пустой массив, элементами которого будут строки и столбцы таблицы со значениями товаров 
        var itemsCode=[];
        this.props.items.map ((item, index) => {
        var itemCode=          
          React.DOM.tr({key:item.code},
            React.DOM.td(null, item.id),
            React.DOM.td(null,item.label),
            React.DOM.td(null,item.count),
            React.DOM.td(null,item.price),
            React.DOM.td(null,item.link),
    );
          itemsCode.push(itemCode);
    })
          return React.DOM.table(null,  
          React.DOM.tbody(null, itemsCode),          
        );
      },  
    });

 

  