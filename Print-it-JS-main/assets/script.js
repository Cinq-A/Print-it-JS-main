const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener('DOMContentLoaded', function() {

	const carouselItems = document.querySelector('.carousel-items');
	const prevButton = document.querySelector('.carousel-prev');
	const nextButton = document.querySelector('.carousel-next');
	const indicators = document.querySelectorAll('.carousel-indicator');

	const totalItems = document.querySelectorAll('.carousel-items img').length;

	const titleItem = document.querySelector('.dots p');

    let currentIndex = 0;
	
	//fonction pour mettre ajour les points indicateurs

	function updateIndicators() {
		
		  indicators.forEach((indicator, index) => {
			  if (index === currentIndex) {
				
				  indicator.innerHTML="&#9679";
			  } else {
				  indicator.innerHTML="&#9675";
			  }
		  });}


	// image suivante
	nextButton.addEventListener('click', () => {
	  if (currentIndex < totalItems - 1) {
		  
		currentIndex++;
		carouselItems.style.transform = `translateX(-${currentIndex * 200 / totalItems}%)`;
		updateIndicators();

		titleItem.innerHTML=(slides[currentIndex].tagLine);

		
	  }else if (currentIndex === totalItems - 1){

		  currentIndex=0;
		  updateIndicators();
		  carouselItems.style.transform = `translateX(-${currentIndex * 200 / totalItems}%)`;

		  titleItem.innerHTML=(slides[currentIndex].tagLine);
		
	  }
	});


  	// image précedente
	prevButton.addEventListener('click', () => {
	  if (currentIndex > 0) {
		  
		currentIndex--;
		carouselItems.style.transform = `translateX(-${currentIndex * 200 / totalItems}%)`;
		updateIndicators();

		titleItem.innerHTML=(slides[currentIndex].tagLine);
		
	  }else if (currentIndex === 0 ){

		carouselItems.style.transform = `translateX(-${(totalItems-1) * 200 / totalItems}%)`;
		currentIndex=totalItems-1;
		updateIndicators();

		titleItem.innerHTML=(slides[currentIndex].tagLine);
	  }
	});
  });
  
  
  