let path = document.querySelector("path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  // What % down is it?
  var scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength;

  // console.log(path);
  console.log(pathLength);
  console.log(scrollPercentage);
  console.log(drawLength);
  console.log("------------");
});

console.log("bew");
