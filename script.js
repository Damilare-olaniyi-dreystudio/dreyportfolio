//for counter counting


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const speed = 10000; // Lower is faster

    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = target;
    }
  };

  // Optional: Animate only when in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 1.0 });

  observer.observe(counter);
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//for revealing the first portfolio rows using loadmore btn
let loadMoreBtn, revealPort, loadMoreBtn1, revealPort1;
loadMoreBtn = document.getElementById('loadmore');
loadMoreBtn1 = document.getElementById('loadmore1');
revealPort1 = document.getElementById('reveal1')
revealPort = document.getElementById('reveal');

//what to execute
loadMoreBtn.addEventListener('click', function () {
  loadMoreBtn.style.display = 'none';
  loadMoreBtn1.style.display = 'block';
})
loadMoreBtn.addEventListener('click', function () {
  revealPort.style.display = 'block';
})


loadMoreBtn1.addEventListener('click', function () {
  loadMoreBtn1.style.display = 'none';
})
loadMoreBtn1.addEventListener('click', function () {
  revealPort1.style.display = 'block'
})

//for revealing the second portfolio project using loadmore btn
let loadMoreBtn3, revealPort3;
loadMoreBtn3 = document.getElementById('loadmore2');
revealPort3 = document.getElementById('reveal2');

//what to execute
loadMoreBtn3.addEventListener('click', function () {
  loadMoreBtn3.style.display = 'none';
})
loadMoreBtn3.addEventListener('click', function () {
  revealPort3.style.display = 'block';
})


let bodys = document.getElementById('body');
let nav = document.getElementById('navbar');
let myWidth = document.innerWidth;
let myValue = '600px'

if (document.myWidth <= myValue) {
  nav.style.width = '10%'
}


counters.forEach(counter => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counter.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });
  observer.observe(counter);
});

document.querySelectorAll('.accordion-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.accordion-item');
    item.classList.toggle('show');
  });
});