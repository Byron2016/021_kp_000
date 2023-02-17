export const localStorageRecovery = localStorageName => {
	const localStorageValue = localStorage.getItem(localStorageName);
	return localStorageValue;
};

export const localStorageSet = (localStorageName, localStorageValue) => {
	localStorage.setItem(localStorageName, localStorageValue);
};
