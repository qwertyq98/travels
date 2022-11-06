document.addEventListener('DOMContentLoaded', _ => {
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('content__people-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.people');
  for (let elm of elements) {
    observer.observe(elm);
  }
});
