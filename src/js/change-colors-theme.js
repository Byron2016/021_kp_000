import themeColors from './colors.js';

const buttons = document.getElementsByTagName('button');

const buttonPressed = e => {
	const isButton = e.target.nodeName === 'BUTTON';
	if (isButton) {
		const buttonClicked = e.target.id;
		switch (buttonClicked) {
			case 'color_theme_01':
				route(buttonClicked);
				break;
			case 'color_theme_02':
				route(buttonClicked);
				break;
			case 'color_theme_03':
				route(buttonClicked);
				break;
			default:
				break;
		}
	}
	if (!isButton) {
		console.log('no es boton');
	}
};

for (const button of buttons) {
	button.addEventListener('click', buttonPressed);
}

const route = buttonPressed => {
	const root = document.querySelector(':root');
	const rootStyles = getComputedStyle(root);
	const primaryColor = rootStyles.getPropertyValue('--primary-color');
	console.log(primaryColor);

	const newColors = themeColors[buttonPressed];

	root.style.setProperty('--primary-color', newColors['primary-color']);
	root.style.setProperty(
		'--primary-color-dark',
		newColors['primary-color-dark']
	);

	root.style.setProperty('--secondary-color', newColors['secondary-color']);
	root.style.setProperty(
		'--secondary-color-dark',
		newColors['secondary-color-dark']
	);

	root.style.setProperty('--gray-color', newColors['gray-color']);
	root.style.setProperty('--gray-color-dark', newColors['gray-color-dark']);
};
