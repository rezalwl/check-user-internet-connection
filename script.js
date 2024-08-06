const wrapper = document.querySelector(".wrapper");
const toast = document.querySelector(".toast");
const title = document.querySelector("span");
const subTitle = document.querySelector("p");
const icon = document.querySelector(".icon");
const closeIcon = document.querySelector(".close-icon");

window.addEventListener("load", () => {
  function ajaxRequest() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res.status < 300 || res.status === 200) {
          toast.classList.remove("offline");
          title.innerHTML = "You're online now";
          subTitle.innerHTML = "Hurray! Internet is connected.";
          icon.innerHTML = '<i class="uil uil-wifi"></i>';

          closeIcon.addEventListener("click", () => {
            wrapper.classList.add("hide");
          });

          setTimeout(() => {
            wrapper.classList.add("hide");
          }, 4000);
        } else {
          offline();
        }
      })
      .catch(() => {
        offline();
      });
  }

  function offline() {
    wrapper.classList.remove("hide");
    toast.classList.add("offline");
    title.innerHTML = "You're offline now";
    subTitle.innerHTML = "OoOops! Internet is disConnected.";
    icon.innerHTML = '<i class="uil uil-wifi-slash"></i>';
  }


    ajaxRequest();
 
});
