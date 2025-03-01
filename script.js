gsap.from("#one", {
  duration: 1,
  stagger: 1,
  ease: "ease",
  y: 50,
  onComplete: onComplete,
});
function onComplete() {
  gsap.to("#one, #two, #three", {
    opacity: 0,
    y: 50,
    delay: 2,
  });
  gsap.to(".id3", {
    opacity: 0,
    delay: 2,
  });
}
gsap.from("#two", {
  duration: 1,
  stagger: 0.5,
  y: 50,
  delay: 4,
  opacity: 0,
  onComplete: onComplete,
});
gsap.from("#three", {
  duration: 1,
  stagger: 0.5,
  y: 50,
  delay: 8,
  opacity: 0,
  onComplete: onComplete,
});
gsap.from("#four", {
  duration: 1,
  stagger: 0.5,
  y: 50,
  delay: 12,
  ease: "elastic",
  opacity: 0,
  onComplete: onComplete,
});


window.addEventListener("load", () => {
  Swal.fire({
    title: "Do you want to play music in the background?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

