const fs = require('fs');

const path = require('path');

const template = path.join(process.cwd(), 'template');

const client = path.join(process.cwd(), 'client', 'dist', 'app');

module.exports = function(waw) {
	const seo = {
		title: waw.config.name,
		description: waw.config.description,
		keywords: waw.config.keywords,
		image: 'https://webart.work/template/img/spider.svg'
	};

	waw.serve(client);

	if (fs.existsSync(client)) {
		waw.url(
			path.join(client, 'index.html'),
			[
				'/admin/categories',
				'/admin/products',
				'/profile',
				'/sign'
			]
		);
	} else {
		console.log("You don't have client build, careful with committing without that");
	}

	waw.serve(template, {
		prefix: '/template'
	});

	waw.build(template, 'index');

	waw.url(
		path.join(template, 'dist', 'index.html'),
		'/',
		seo
	);

	waw.build(template, 'about');

	waw.url(
		path.join(template, 'dist', 'about.html'),
		'/about',
		seo
	);
	waw.build(template, 'catalog');

	waw.url(
		path.join(template, 'dist', 'catalog.html'),
		'/catalog',
		seo
	);

	waw.build(template, 'contacts');

	waw.url(
		path.join(template, 'dist', 'contacts.html'),
		'/contacts',
		seo
	);

	waw.build(template, 'contract');

	waw.url(
		path.join(template, 'dist', 'contract.html'),
		'/contract',
		seo
	);

	waw.build(template, 'delivery');

	waw.url(
		path.join(template, 'dist', 'delivery.html'),
		'/delivery',
		seo
	);

	waw.build(template, 'privacy');

	waw.url(
		path.join(template, 'dist', 'privacy.html'),
		'/privacy',
		seo
	);

	waw.build(template, 'product');

	waw.url(
		path.join(template, 'dist', 'product.html'),
		'/product',
		seo
	);

	waw.build(template, 'products');

	waw.url(
		path.join(template, 'dist', 'products.html'),
		'/products',
		seo
	);
};
