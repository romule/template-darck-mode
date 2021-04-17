//theme changer btn

const btnSwtch = document.querySelector(".container_btnChange"),
  svgSunStyle = document.querySelector(".container_svg__sun"),
  svgMoonStyle = document.querySelector(".container_svg__moon");

function changeTheme() {
  btnSwtch.addEventListener("click", () => {
    document.body.classList.toggle("themeChng");
    if (svgMoonStyle.classList.contains("hideSvg")) {
      svgSunStyle.classList.add("hideSvg");
      svgSunStyle.classList.add("anm__sun");
      svgMoonStyle.classList.remove("hideSvg");
    } else {
      console.log("black-on");
      svgSunStyle.classList.remove("hideSvg");
      svgMoonStyle.classList.add("hideSvg");
      svgMoonStyle.classList.add("anm__moon");
    }
  });
}

window.onload = function svgAnimate() {
  // color change
  changeTheme();
};
