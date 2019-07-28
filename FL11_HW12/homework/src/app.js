const rootNode = document.getElementById('root');

const todoItems = [
    { isDone: false, id: 12345, description: 'Todo 1' }
];

let todoItemsNumber = 0;

let wrapper = document.createElement('div');
wrapper.className = 'wrapper'

let htmlWrapper = `
	<h1>Simple TODO applications</h1>
	<div class='form'>
		<input>
        <div class='buttons'>
            <button class='cancel'>Cancel</button>
			<button class='save'>Save changes</button>
        </div>
        </input>
    </div>
    <button class='add'>Add new task</button>
    <div class='list'>
        <div class='masage'>
            TODO is empty
        </div>
        <table></table>
    </div>
`

wrapper.innerHTML = htmlWrapper;



rootNode.appendChild(wrapper);

let h1 = document.querySelector('h1');
let buttonAdd = document.querySelector('.add');
let form = document.querySelector('.form');
let buttonCancel = document.querySelector('.cancel');
let buttonSave = document.querySelector('.save');
let table = document.querySelector('table');
let input = document.querySelector('input');
let masage = document.querySelector('.masage');

buttonAdd.addEventListener('click', function () {
    form.style.display = 'flex';
    table.style.display = 'none';
    this.style.display = 'none';
    masage.style.display = 'none';
    h1.textContent = 'Add task';
    localStorage.removeItem('isChange');
    localStorage.removeItem('itemNumber');

    location.hash = 'add';
});

buttonCancel.addEventListener('click', function () {
    input.value = '';
    form.style.display = 'none';
    buttonAdd.style.display = 'block';
    table.style.display = 'block';
    h1.textContent = 'Simple TODO Aplication';
    location.hash = 'main';
});

buttonSave.addEventListener('click', function () {
    let txt = input.value;
    let isChange = localStorage.getItem('isChange');
    localStorage.removeItem('isChange');

    if (txt && isChange) {
        let itemNumber = localStorage.getItem('itemNumber');
        let tr = document.querySelector(`[data-item='${itemNumber}']`);
        let tdDescription = tr.querySelector('td:nth-child(2)');
        tdDescription.textContent = txt;
    } else if (todoItemsNumber >= 10) {

        alert('Max item in list!');

    } else if (txt && !isChange) {
        let tr = document.createElement('tr');
        tr.setAttribute('data-item', ++todoItemsNumber);

        tr.innerHTML = `
            <td class='action todo'>
                <img class='todo-item' src='./assets/img/todo-s.png' />
                <img class='done' src='./assets/img/done-s.png' />
            </td>
            <td class="item">${txt}</td>
            <td class='remove'><img src='./assets/img/remove-s.jpg' /></td>
        `;
        localStorage.setItem(`${todoItemsNumber}`, tr)
        todoItems.push({
            id: todoItemsNumber,
            isDone: false,
            description: txt
        });

        table.appendChild(tr);

        let tdActionCheck = tr.querySelector('td:nth-child(1)');
        let tdDescription = tr.querySelector('td:nth-child(2)');
        let todo = tr.querySelector('.todo-item');
        let done = tr.querySelector('.done');
        let count = 1;

        tdActionCheck.addEventListener('click', function () {

            if (count % 2 === 0) {
                todo.style.display = 'block';
                done.style.display = 'none';
                tdDescription.setAttribute('class', 'item');
                tdDescription.removeAttribute('class="desc-done"');
                count++;
            } else {
                todo.style.display = 'none';
                done.style.display = 'block';
                tdDescription.setAttribute('class', 'desc-done');
                count++;
            }

        });


        tdDescription.addEventListener('click', function () {
            if (done.style.display === 'block') {
                alert('You can\'t edit already done item!');
            } else {
                form.style.display = 'flex';
                input.value = tdDescription.textContent;

                h1.textContent = 'Modify item';

                table.style.display = 'none';
                buttonAdd.style.display = 'none';

                localStorage.setItem('itemNumber', tr.dataset.item);

                location.hash = `mod/${tr.dataset.item}`;
                localStorage.setItem('isChange', true);
            }


        });

        let tdRemove = tr.querySelector('td:nth-child(3)');

        tdRemove.addEventListener('click', function () {
            this.parentNode.parentNode.removeChild(tr);
            todoItemsNumber--;

            if (!table.querySelectorAll('tr').length) {
                masage.style.display = 'block';
            }
        });
    }

    if (txt) {
        input.value = '';
        table.style.display = 'block';
        form.style.display = 'none';
        buttonAdd.style.display = 'block';

        h1.textContent = 'Simple TODO Aplication';

        location.hash = 'main';
    } else {
        input.value = '';
        table.style.display = 'block';
        form.style.display = 'none';
        buttonAdd.style.display = 'block';

        h1.textContent = 'Simple TODO Aplication';
        location.hash = 'main';
    }
});

