gsap.registerPlugin(ScrollTrigger)
gsap.from(".animate-inicial-txt", {
    // duração da animação
    duration: 0.7,
    // opacidade que vai começar a animação
    opacity: 0,
    // posição do y que vai começar os elemntos na 
    y: -150,
    // tempo entre a animação dos elementos com a mesma classe
    stagger: 0.4,
})

gsap.from(".animate-inicial-img", {
    duration: 0.9,
    opacity: 0,
    x: 250,
})

gsap.from(".animate-artigos", {
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay: 1.2,
})

gsap.from(".animate-final", {
    scrollTrigger: ".animate-final",
    duration: 0.8,
    opacity: 0,
    y: -110,
    stagger:0.36,
    delay: 0.4,
})