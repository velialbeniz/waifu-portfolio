export const works = [
	{ image: "/works/Cinezoom.png", name: "Cinezoom App" },
	{ image: "/works/coffeesticker.jpg", name: "Coffee Shop Branding" },
	{ image: "/works/job.jpg", name: "Job Illustrations" },
	{ image: "/works/minusone.png", name: "Coffee Shop Branding" },
	{ image: "/works/paket.jpg", name: "Package Design" },
	{ image: "/works/Pet.jpg", name: "Pet App" },
	{ image: "/works/zentangleaeropress.jpg", name: "Illustrations" },
	{ image: "/works/zentanglecicek.jpg", name: "Illustrations" },
	{ image: "/works/zentangleplant.png", name: "Illustrations" },
];

export const slider = [
	{ image: "/minislider/19430939.jpg", name:"slidername" },
    { image: "/minislider/aeropress.jpg", name:"slidername2" },
	{ image: "/minislider/cicek.jpg", name:"slidername3" },
	{ image: "/minislider/cinezoom1.jpg", name:"slidername4" },
	{ image: "/minislider/coffees.jpg", name:"slidername5" },
	{ image: "/minislider/ece.png", name:"slidername6" },
	{ image: "/minislider/espressokadin.jpg", name:"slidername7" },
	{ image: "/minislider/kizbardak.jpg", name:"slidername8" },
	{ image: "/minislider/melsek1.jpg", name:"slidername9" },
	{ image: "/minislider/minus2.jpg", name:"slidername10" },
	{ image: "/minislider/minusmobil.jpg", name:"slidername11" },
	{ image: "/minislider/pet1.jpg", name:"slidername12" },
	{ image: "/minislider/pet2.jpg", name:"slidername13" },
	{ image: "/minislider/turk.jpg", name:"slidername14" },
];

export const randomSlider1 = slider
	.sort(() => Math.random() - 0.5)
	.concat(slider.sort(() => Math.random() - 0.5))
	.concat(slider.sort(() => Math.random() - 0.5));

export const randomSlider2 = slider
	.sort(() => Math.random() - 0.5)
	.concat(slider.sort(() => Math.random() - 0.5))
	.concat(slider.sort(() => Math.random() - 0.5))
	.sort(() => Math.random() - 0.5);
