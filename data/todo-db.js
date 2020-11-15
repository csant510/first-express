const todos = [
    {todo: 'Feed Dogs', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ];
  
  //this just function that we created
  module.exports = {
    getAll: function() {
      return todos;
    }
  };