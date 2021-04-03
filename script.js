var tl = gsap.timeline();

tl.from('.elm',{
    opacity:0,
    stagger:.1,
    y:30,
    duration:2,
    ease:"Expo.easeInOut"
})
gsap.from('#shot,#shotDets',{
    scrollTrigger:{
    trigger:'#model',
    start:'top center'
    },
    opacity:0,
    stagger:.1,
    y:30,
    duration:2,
    ease:"Expo.easeInOut"
    
})
gsap.to('#pannel',{

    scrollTrigger:{
        trigger:'#model',
        pin:true,
        end:'+=3000',
        start:'top top',
        scrub:1,
        ease: "power1.inOut",
       
    },
    scale:3.4,  
})

