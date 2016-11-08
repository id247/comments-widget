let settings = {
	commentsTitle: 'Комментарии',
	pageSize: 5,
	anonAvatar: 'https://static.dnevnik.ru/images/avatars/user/a.m.jpg',
};

function init(o){
	settings = {...settings, ...o};
}

export default {
	init: (o) => init(o),
	getSettings: () => settings,
};
