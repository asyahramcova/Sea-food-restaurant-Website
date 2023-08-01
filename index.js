gsap.registerPlugin(TextPlugin);

gsap.from ("h2", {y:-40, opacity: 0, duration: .6,stagger: 0.4 })


gsap.from (".logo", {scale:2, opacity: 0, duration: 3 })

const tl = gsap.timeline({default: {duration:.3}})
  tl.to( '#title-text', {
    text:'Fresh fish',
    yoyo: true,
  })

  tl.to( '#title-text-two', {
    text:'Funtastic taste',
    yoyo: true,
  })

  tl.to( '#title-text-three', {
    text:'Free delivery',
    yoyo: true,
  })
  tl.to ("#link", { opacity: 1,stagger: 0.4 })
