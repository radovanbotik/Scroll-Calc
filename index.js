window.addEventListener("DOMContentLoaded", () => {
  const span1 = document.querySelector("#span1");
  const span2 = document.querySelector("#span2");
  const span3 = document.querySelector("#span3");
  const bar = document.querySelector("#number");

  console.log(document.body.scrollHeight);
  span1.innerHTML = `window height is : `;
  span2.innerHTML = `window scroll is : `;
  span3.innerHTML = `document height is : `;
  console.log(window.pageYOffset);
  window.addEventListener("scroll", () => {
    span1.innerHTML = `window height is : ${window.innerHeight}`;
    span2.innerHTML = `window scroll is : ${window.pageYOffset}`;
    span3.innerHTML = `document height is : ${
      document.body.scrollHeight - window.innerHeight
    }`;

    const scrollableHeight =
      Math.floor(document.body.scrollHeight) - window.innerHeight;
    let percentage = Math.floor((window.pageYOffset / scrollableHeight) * 100);
    bar.innerHTML = `${percentage}% scrolled`;
  });
});
