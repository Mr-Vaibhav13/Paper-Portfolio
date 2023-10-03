const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


const tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh",
    duration:0,
    scale:0.7,
    ease:"power"
})

tl.to("#page1",{
    y:"30vh",
    duration:2,
    delay:1
})

tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:1
})