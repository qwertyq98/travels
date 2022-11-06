document.addEventListener('DOMContentLoaded', _ => {
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('content__show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let people = Array.from(document.getElementsByClassName('content__people'));
  let places = Array.from(document.getElementsByClassName('place'));
  for (let elm of people.concat(places)) {
    observer.observe(elm);
  }
});
