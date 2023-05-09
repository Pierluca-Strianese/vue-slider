const app = Vue.createApp ({

    data (){
        return {
            activeIndex: 0,
            sliderDirection: 1,
            isAutorun: true,
            autorunTime: 2000,
            idAutorun: null,
            arrImages :[
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
        }
    },
    methods: {
        showNextSlide() {
            this.activeIndex++;
            if (this.activeIndex >= this.arrImages.length) {
                this.activeIndex = 0;
            }
        },
        
        showPrevSlide() {
            this.activeIndex--;
            if (this.activeIndex < 0) {
                this.activeIndex = this.arrImages.length - 1;
            }
        },

        setActiveIndex(i) {
            this.activeIndex = i;
        },

        toggleAutorun() {
            this.isAutorun = !this.isAutorun;
        },

        runSlider() {
            if (this.isAutorun) {
                this.idAutorun = setInterval(
                    () => this.sliderDirection == 1 ? this.showNextSlide() : this.showPrevSlide(),  this.autorunTime);
            } else {
                clearInterval(this.idAutorun);
            }
        },

        runSlider() {
            if (this.isAutorun) {
                this.idAutorun = setInterval(
                    () => this.sliderDirection == 1 ? this.showNextSlide() : this.showPrevSlide(),  this.autorunTime);
            } else {
                clearInterval(this.idAutorun);
            }
        },

        invertSliderDirection() {
            this.sliderDirection *= -1;
        },

        stopAutorun() {
            clearInterval(this.idAutorun);
        },
    },

    watch: {
        isAutorun(){
            this.runSlider();
        },
    },

    mounted() {
        this.runSlider();
    },

});

app.mount ('.container');