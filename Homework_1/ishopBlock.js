//Создаем компонент Ishop
var Ishop = React.createClass({

  displayName: 'ishop',

  // Прописываем дефолтное значение props
  getDefaultProps: function() {
    return { items:[      
      {id:1, label:'слива', count:700, price:15, link: 'https://goo.gl/haJuRU', code:2}] }
  },

  // Включаем проверку типов для props компонента
  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number,
      label: React.PropTypes.string.isRequired,
      count: React.PropTypes.number,
      price: React.PropTypes.number,
      link: React.PropTypes.string,     
  }))
},

  render: function() {
    var headerTable =    
    React.DOM.tr({key: captionTable.code},
      React.DOM.td(null, captionTable.id),
      React.DOM.td(null, captionTable.label),
      React.DOM.td(null, captionTable.count),
      React.DOM.td(null, captionTable.price),
      React.DOM.td(null, captionTable.link),  
    );         

    //Создаем массив,в который помещаем строку со столбцами заголовка таблицы,
    //а другими элементами будут строки со столбцами таблицы со значениями товаров 
    var itemsCode=[headerTable]; 
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

 

  