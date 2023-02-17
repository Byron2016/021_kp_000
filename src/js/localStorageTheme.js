import themeColors from './colors.js';

import { localStorageRecovery, localStorageSet } from './common.js';

const themeRecovery = localStorageValue => {
	const root = document.querySelector(':root');

	const newColors = themeColors[localStorageValue];

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

const localStorageThemeVerification = (localStorageName, localStorageValue) => {
	let recLocalStorageValue = localStorageRecovery(localStorageName);
	if (!recLocalStorageValue) {
		// No existe, se procede a crear
		localStorageSet(localStorageName, localStorageValue);
		recLocalStorageValue = localStorageValue;
	}
	// console.log(recLocalStorageValue);
	themeRecovery(recLocalStorageValue);
};

localStorageThemeVerification('theme', 'color_theme_01');
