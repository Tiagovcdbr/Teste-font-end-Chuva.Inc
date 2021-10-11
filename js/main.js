function togglemenu() {
	document.getElementById('aside').classList.toggle('active_menu')
}

let el = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae turpis auctor, mollis felis ut, commodo turpis. Phasellus felis mauris, egestas eget cursus et, iaculis quis lacus. Fusce auctor eros sed magna ultricies gravida. Etiam aliquam dictum nisl, vel aliquet enim accumsan sit amet. Donec finibus nisi tellus, ut viverra lorem vestibulum ut. Phasellus condimentum orci id leo condimentum lobortis et non lorem. Sed id nisl metus. Quisque sollicitudin ligula in sapien scelerisque, ac gravida eros vestibulum.<br><br>Fusce vitae luctus dui. Donec id euismod mauris, in volutpat urna. Proin dapibus consequat feugiat. Proin dictum justo arcu, quis vestibulum augue lacinia quis. Sed dignissim dui nulla, ut faucibus mauris sodales id. Aliquam erat volutpat. Maecenas dolor enim, tincidunt id elit non, suscipit interdum turpis. Etiam finibus urna libero, eget interdum eros volutpat ullamcorper. Pellentesque et pretium lorem. Aenean interdum quis diam ac porttitor. Cras nec ipsum pulvinar, pharetra libero non, ornare enim. Etiam in laoreet odio.<br><br>Nam eget tristique elit, at fermentum tellus. Mauris scelerisque ligula id eleifend feugiat. Donec eleifend vehicula sem nec dapibus. Integer scelerisque neque dui, in lacinia erat molestie eu. Phasellus maximus dui eget lacus porta tempor. Ut ex nibh, dignissim quis purus semper, efficitur facilisis turpis. Praesent blandit elementum ultricies. Aliquam sit amet enim sit amet nulla pulvinar lobortis consectetur non odio. Phasellus at lacus hendrerit, vulputate nisi sit amet, viverra mauris. Etiam eu scelerisque orci. Quisque sagittis, mi vitae pharetra iaculis, orci elit eleifend massa, eu posuere mauris odio id odio. Morbi eu libero luctus, consectetur lorem vel, interdum sapien. Aenean in porta arcu. Maecenas eu maximus massa.<br><br>Praesent velit dolor, dignissim sed quam ac, efficitur porta justo. Pellentesque porta pharetra felis ut hendrerit. Nulla facilisi. Aliquam erat volutpat. Nunc sit amet faucibus quam. Maecenas dapibus luctus dolor at viverra. Duis nec fringilla libero. Duis risus nibh, viverra ac orci nec, iaculis dictum sem. Aliquam at malesuada arcu. Aliquam erat volutpat. Donec varius ipsum purus, ut vehicula purus placerat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let isClicked = false;

const button = (text) => {
	return `<button class="see-more" onclick="changeCollapse()">${text}</button>`;
}

function collapse(bool) {
	let p = null;
	let text = null;
	if (bool == false) {
		text = el.substring(0, 950) + button("Ver mais...");
	} else {
		text = el.substring(0, 2293) + button("Ver menos...");
	}
	p = `<p>${text}<p>`
	document.getElementById('collapse_content').innerHTML = p;
}

collapse(isClicked);

function changeCollapse() {
	isClicked = !isClicked;
	collapse(isClicked);
	if (isClicked == true) {
		document.querySelector('.summary').classList.add('summary_active');
	}
}

const create = document.getElementById("create_topic")
const write = document.getElementById("write_topic");
const feedback = document.getElementById("feedback");
const comments = document.getElementById("comments");
const none = "none";
const flex = "flex";

function ChangeState() {
	create.style.display = none;
	write.style.display = flex;
}

function ChangeStateFeedback() {
	write.style.display = none;
	feedback.style.display = flex;
	comments.style.display = flex;
}

function ChangeStateCreate() {
	feedback.style.display = none;
	comments.style.display = none;
	write.style.display = flex;
}


function toggleAnswer() {
	const hover = document.getElementById('hover');
	const toggle = 'toggle_height';

	hover.classList.toggle(toggle)
}