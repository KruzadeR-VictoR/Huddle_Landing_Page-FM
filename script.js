gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.out",
    stagger: {
      amount: 1,
    },
  },
});

tl.from(".logo", {
  x: -100,
  opacity: 1,
  duration: 1,
});
tl.from(".hero-img", {
  y: 100,
  opacity: 0,
  duration: 1,
});

tl.from(".caption", {
  y: -100,
  opacity: 0,
  stagger: {
    amount: 1,
  },
});
tl.from(".icon", {
  y: -100,
  opacity: 0,
  stagger: {
    amount: 1,
  },
});
