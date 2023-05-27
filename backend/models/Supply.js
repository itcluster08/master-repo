const connection = require('./connector');
const { DataTypes } = require('sequelize')
const Food = connection.define('Food', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		unique: true,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING(255),
		allowNull: false
	},
	category: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	countInStock: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	restockDay: {
		type: DataTypes.INTEGER,
		allowNull: true
	},
	rate: {
		type: DataTypes.INTEGER,
		allowNull: false,
		defaultValue: 5
	}
})

Food.sync({ force: false })
	.then(() => {
		console.log('Таблица еды создана.');


		// const data = [
		// 	{
		// 		"title": "Лимон",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2019/11/limony-getvegetable-324x243.jpg",
		// 		"price": 209
		// 	},
		// 	{
		// 		"title": "Виноград белый без косточек",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/green-grape-getvegetable-324x243.jpg",
		// 		"price": 439
		// 	},
		// 	{
		// 		"title": "Мандарины",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/mandarin-getvegetable-324x243.jpg",
		// 		"price": 289
		// 	},
		// 	{
		// 		"title": "Апельсины",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/06/apelsiny-getvedzhetabl-324x243.jpg",
		// 		"price": 350
		// 	},
		// 	{
		// 		"title": "Манго",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/mango-kupit-moskva-scaled-324x243.gif",
		// 		"price": 359
		// 	},
		// 	{
		// 		"title": "Бананы",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/03/banany-getvegetable-324x243.jpg",
		// 		"price": 122
		// 	},
		// 	{
		// 		"title": "Яблоки Гала",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/apple-royal-gala-getvegetable-324x243.jpg",
		// 		"price": 278
		// 	},
		// 	{
		// 		"title": "Груши Конференс",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2021/03/grusha-konferens-getvedzhetabl-324x243.jpg",
		// 		"price": 364
		// 	},
		// 	{
		// 		"title": "Сельдерей стебель",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/selderei-getvegetable-324x243.jpg",
		// 		"price": 160
		// 	},
		// 	{
		// 		"title": "Авокадо Хасс (Доминикана)",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/avokado-hass-kupit-324x243.jpeg",
		// 		"price": 799
		// 	},
		// 	{
		// 		"title": "Огурцы короткоплодные",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/06/ogurcy-korotkoplodnye-getvedzhetabl-300x243.jpg",
		// 		"price": 399
		// 	},
		// 	{
		// 		"title": "Редис",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/radish-getvegetable-324x243.jpg",
		// 		"price": 80
		// 	},
		// 	{
		// 		"title": "Свёкла мытая",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/svekla-getvegetable-324x243.jpg",
		// 		"price": 95
		// 	},
		// 	{
		// 		"title": "Морковь мытая",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/morkov-getvegetable-324x243.jpg",
		// 		"price": 89
		// 	},
		// 	{
		// 		"title": "Помидоры Черри",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/03/pomidory-cherri-getvegetable-324x243.jpg",
		// 		"price": 548
		// 	},
		// 	{
		// 		"title": "Перец красный сладкий",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/perec-krasnyi-getvegetable-324x243.jpg",
		// 		"price": 380
		// 	},
		// 	{
		// 		"title": "Ежевика",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/06/ezhevika-getvedzhetabl-324x243.png",
		// 		"price": 585
		// 	},
		// 	{
		// 		"title": "Голубика",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/golubika-getvegetable-324x243.jpg",
		// 		"price": 399
		// 	},
		// 	{
		// 		"title": "Клубника",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/strawberry-buy-getvegetable-324x243.jpeg",
		// 		"price": 1899
		// 	},
		// 	{
		// 		"title": "Малина",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/organic-fresh-raspberry-getvegetable-324x243.jpg",
		// 		"price": 1850
		// 	},
		// 	{
		// 		"title": "Шпинат",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/06/Product-Images_Palak-324x243.jpg",
		// 		"price": 135
		// 	},
		// 	{
		// 		"title": "Укроп",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/06/ukrop-getvegetable.jpeg",
		// 		"price": 120
		// 	},
		// 	{
		// 		"title": "Кинза",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/kinza-getvegetable-1-324x243.jpg",
		// 		"price": 142
		// 	},
		// 	{
		// 		"title": "Салат Романо",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/06/romano-salat-getvedzhetabl-324x243.jpg",
		// 		"price": 199
		// 	},
		// 	{
		// 		"title": "Базилик зелёный (в горшочке)",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/basilik-getvegetable-324x243.jpg",
		// 		"price": 210
		// 	},
		// 	{
		// 		"title": "Салат Саланова",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/06/salanova-getvegetable-324x243.png",
		// 		"price": 180
		// 	},
		// 	{
		// 		"title": "Руккола",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/05/rukkola-getvegetable-324x243.jpg",
		// 		"price": 210
		// 	},
		// 	{
		// 		"title": "Щавель",
		// 		"img": "https://getvegetable.com/wp-content/uploads/2020/07/shhavel-getvedzhetabl-1-324x243.jpg",
		// 		"price": 110
		// 	}
		// ];
		//
		// data.forEach(async product => {
		// 	await Food.create({
		// 		name: product.title,
		// 		image: product.img,
		// 		category: 'food',
		// 		countInStock: Math.round(Math.random() * 958 + 100),
		// 		price: product.price > 150 ? Math.round(product.price / 3) : product.price,
		// 		restockDay: Math.round(Math.random() * 5 + 1)
		// 	})
		// })



	})
	.catch((error) => {
		console.error('Ошибка при создании таблицы еды:', error);
	});

module.exports = Food;