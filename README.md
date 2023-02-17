<div>
	<div>
		<img src=https://raw.githubusercontent.com/Byron2016/00_forImages/main/images/Logo_01_00.png align=left alt=MyLogo width=200>
	</div>
	&nbsp;
	<div>
		<h1>021_kp_000</h1>
	</div>
</div>

&nbsp;

## Project Description

**021_kp_000** is a practice to create a responsibe website with HTLM and CSS, following Youtube Kiko Palomares's tutorial [Presentación - Crea una página web con elementos Flotantes (Proyecto de CSS desde cero)](https://www.youtube.com/watch?v=0m7AXUkqLbQ) and the other help that you can find into **Reference** section.
&nbsp;

## Technologies used

![HTML](https://img.shields.io/static/v1?label=&message=HTML&color=red&logo=html&logoColor=white&style=for-the-badge)
![Sass](https://img.shields.io/static/v1?label=&message=sass&color=CC6699&logo=sass&logoColor=white&style=for-the-badge)
![CSS](https://img.shields.io/static/v1?label=&message=css&color=1572B6&logo=css3&logoColor=white&style=for-the-badge)
![JAVASCRIPT](https://img.shields.io/static/v1?label=&message=javascript&color=yellow&logo=javascript3&logoColor=white&style=for-the-badge)
![VITE](https://img.shields.io/static/v1?label=&message=vite&color=blue&logo=vite3&logoColor=white&style=for-the-badge)

## References

- Kiko Palomares tutorial and Github repositories

  - [Presentación - Crea una página web con elementos Flotantes (Proyecto de CSS desde cero)](https://www.youtube.com/watch?v=0m7AXUkqLbQ)
  - [Presentación y recursos - Crear una página web con elementos flotantes](https://kikopalomares.com/clases/proyecto-con-flotantes)

- Colors

  - [The super fast color palettes generator](https://coolors.co/)

- LocalStorage
  - [HTML Living Standard — Last Updated 17 February 2023](https://html.spec.whatwg.org/multipage/)

## Steps

    - Add html section into html main page using js.
    	- Add js code
    	```js
    	function includeHTML() {
    	let z, i, elmnt, file, xhttp;
    	/* loop through a collection of all HTML 		lements: */
    	z = document.getElementsByTagName('*');
    	for (i = 0; i < z.length; i++) {
    		elmnt = z[i];
    		/* search for elements with a certain 		trribute: */
    		file = elmnt.getAttribute('include-html');
    		if (file) {
    			/* make an HTTP request using the 		ttribute value as the file name: */
    			xhttp = new XMLHttpRequest();
    			xhttp.onreadystatechange = function () {
    				if (this.readyState == 4) {
    					if (this.status == 200) {
    						elmnt.innerHTML = this.		esponseText;
    					}
    					if (this.status == 404) {
    						elmnt.innerHTML = 'Page 	not 	ound.';
    					}
    					/* remove the attribute, and 		all this function once more: */
    					elmnt.removeAttribute		'include-html');
    					includeHTML();
    				}
    			};
    			xhttp.open('GET', file, true);
    			xhttp.send();
    			/* exit the function: */
    			return;
    		}
    	}

    	includeHTML();
    	```

    	- Add html code

    	```html
    	<div include-html="./partials/header.html"></div>
    	<script src="/js/include-html.js"></script>
    	```
