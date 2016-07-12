(function () {

	var ts = new TodoService()
	var todos = ts.getTodos()
	var todosElem = $('#todos')

	$('form').on('submit', function (e) {
		e.preventDefault();
		var form = this;
		var value = form.newInput.value;

		todos.push(value);

		ts.saveTodos(todos)
		update();
	})

	

	var foo = document.getElementById('results');
    foo.innerHTML = 'Showing ' + todos.length + ' Things on List';


	function update() {
		todosElem.empty();
		for (var i = 0; i < todos.length; i++) {
			var todo = todos[i];
			todosElem.append(`<div>${todo}<div>`)
		}
	}
	update();

} ())
