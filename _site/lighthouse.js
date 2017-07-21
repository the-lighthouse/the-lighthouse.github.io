window.onload = function() {

document.getElementById("nhome").addEventListener("click", function(){
  document.getElementById("nhome").classList.add('current');
  document.getElementById("nabout").classList.remove('current');
  document.getElementById("nworship").classList.remove('current');
  document.getElementById("nevents").classList.remove('current');
  document.getElementById("ncontact").classList.remove('current');
  document.getElementById("home").style.display = "block";
  document.getElementById("about").style.display = "none";
  document.getElementById("worship").style.display = "none";
  document.getElementById("events").style.display = "none";
  document.getElementById("contact").style.display = "none";
  return;
});

document.getElementById("nabout").addEventListener("click", function(){
  document.getElementById("nhome").classList.remove('current');
  document.getElementById("nabout").classList.add('current');
  document.getElementById("nworship").classList.remove('current');
  document.getElementById("nevents").classList.remove('current');
  document.getElementById("ncontact").classList.remove('current');
  document.getElementById("about").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("worship").style.display = "none";
  document.getElementById("events").style.display = "none";
  document.getElementById("contact").style.display = "none";
  return;
});

document.getElementById("nworship").addEventListener("click", function(){
  document.getElementById("nhome").classList.remove('current');
  document.getElementById("nabout").classList.remove('current');
  document.getElementById("nworship").classList.add('current');
  document.getElementById("nevents").classList.remove('current');
  document.getElementById("ncontact").classList.remove('current');
  document.getElementById("worship").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("events").style.display = "none";
  document.getElementById("contact").style.display = "none";
  return;
});

document.getElementById("nevents").addEventListener("click", function(){
  document.getElementById("nhome").classList.remove('current');
  document.getElementById("nabout").classList.remove('current');
  document.getElementById("nworship").classList.remove('current');
  document.getElementById("nevents").classList.add('current');
  document.getElementById("ncontact").classList.remove('current');
  document.getElementById("events").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("worship").style.display = "none";
  document.getElementById("contact").style.display = "none";
  return;
});

document.getElementById("ncontact").addEventListener("click", function(){
  document.getElementById("nhome").classList.remove('current');
  document.getElementById("nabout").classList.remove('current');
  document.getElementById("nworship").classList.remove('current');
  document.getElementById("nevents").classList.remove('current');
  document.getElementById("ncontact").classList.add('current');
  document.getElementById("contact").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("worship").style.display = "none";
  document.getElementById("events").style.display = "none";
  return;
});


}
