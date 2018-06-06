//Создаем компонент filterBlock
var filterBlock = React.createClass({

    displayName: 'filterBlock',
  
    // Прописываем дефолтное значение props
    getDefaultProps: function() {
      return { items:[        
        {label:'слива', code:0}] }
    },

    // Включаем проверку типов для props компонента
    propTypes: {
      items: React.PropTypes.arrayOf(React.PropTypes.shape({        
        label: React.PropTypes.string.isRequired,
        code: React.PropTypes.number.isRequired,       
    }))
  },

 // Инициализилуем значения стейтов
  getInitialState: function () {
    return {
      items: this.props.items,
      sorted: false,        
    };
  },

  // Фильтруем товары по наличию букв в значении строки ключа label и отражаем в setState
  filteredList: function (EO) {    
    this.setState({items: this.state.items.filter((item)=>{
      return item.label.toLowerCase().search(EO.target.value.toLowerCase())!== -1;
  })
});
  },

  // Сортируем товары по чекнутому чекбоксу
  handleCheckbox: function (EO) {
     //Если чекбокс чекнутый, то сортируем в алфавитном порядке с отражением в setState
      if (EO.target.checked) {
        this.setState({ 
          items:this.state.items.sort((a,b)=>{
            if ( a.label<b.label )  return -1;
            if ( a.label>b.label)  return 1;
            return 0;
            }),
            sorted:true
          })        
      }
      // Если чекбокс не чекнутый, то сортируем в порядке возрастания ключа code из массива товаров
      else  this.setState({
          items:this.state.items.sort((a,b)=>{
          if ( a.code<b.code )  return -1;
          if ( a.code>b.code)  return 1;
          return 0;
          }),
          sorted:false
      })
    },

    render: function() {     

      //Создаем массив,в который помещаем строку c названиями товаров      
      var itemsCode=[];
        this.state.items.map ((item) => {
        var itemCode=         
          React.DOM.li({key:item.code}, item.label);          
          itemsCode.push(itemCode);
    })
          return React.DOM.div({className:'filterBlock_box'}, 
          React.DOM.input ({type:'checkbox', onChange:this.handleCheckbox, defaultChecked:this.state.sorted}),
          React.DOM.input ({type: 'text', onChange:this.filteredList}),  
          React.DOM.ul({className:'filterBlock_items'}, itemsCode),          
        );
      },  
    });

 

  