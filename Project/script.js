 // ---------- SLIDER DATA ----------
    const slide_data = [
      {
        src: "baranti.webp",
          title: "Welcome To The KingSukh Guest House",
        copy: "KingSukh Guest House"
      },
      {
        src: " image1.webp",
          title: "The Prestige Of Service",
        copy: "KingSukh Guest House "
      },
      {
        src: "large.jpg",
        title: "Situated in the heart of the city",
        copy: "KingSukh Guest House "
      },
      {
        src: "out.jpg",
        title: "Book Now and Experience Luxury Like Never Before",
        copy: "KingSukh Guest House "
      }
    ];

    const container = document.getElementById("container");
    const leftSlider = document.getElementById("left-slider");
    const down_button = document.getElementById("down_button");

    let slides = [];
    let captions = [];
    let autoplay;

    // ---------- CREATE SLIDES ----------
    slide_data.forEach((data, i) => {
      const slide = document.createElement("div");
      const caption = document.createElement("div");
      const slide_title = document.createElement("div");

      slide.classList.add("slide");
      slide.style.backgroundImage = `url(${data.src})`;

      caption.classList.add("caption");
      slide_title.classList.add("caption-heading");
      slide_title.innerHTML = `<h1>${data.title}</h1>`;

      caption.appendChild(slide_title);
      caption.insertAdjacentHTML(
        "beforeend",
        `<div class="caption-subhead"><span>${data.copy}</span></div>`
      );

      if (i === 0) {
        slide.classList.add("current");
        caption.classList.add("current-caption");
      }

      slides.push(slide);
      captions.push(caption);
      leftSlider.appendChild(slide);
      container.appendChild(caption);
    });

    // ---------- SLIDE FUNCTION ----------
    function nextSlide() {
      slides[0].classList.remove("current");
      captions[0].classList.remove("current-caption");

      slides.push(slides.shift());
      captions.push(captions.shift());

      slides[0].classList.add("current");
      captions[0].classList.add("current-caption");
    }

    // ---------- AUTOPLAY ----------
    function startAutoplay() {
      autoplay = setInterval(nextSlide, 5000);
    }
    function stopAutoplay() {
      clearInterval(autoplay);
    }

    startAutoplay();

    // ---------- BUTTON CLICK ----------
    down_button.addEventListener("click", (e) => {
      e.preventDefault();
      stopAutoplay();
      nextSlide();
      startAutoplay();
    });
        // Smooth scrolling with offset for fixed header and active link highlight (scrollspy)
    const navLinks = document.querySelectorAll('.navlinks a');
    const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;

    navLinks.forEach(a=>{
      a.addEventListener('click', e=>{
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(!el) return;
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset + 8; // small gap
        window.scrollTo({top,behavior:'smooth'});
      })
    })

    // Scrollspy: observe sections and toggle .active on nav links
    const sections = document.querySelectorAll('main section[id]');
    const observer = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        const id = entry.target.id;
        const link = document.querySelector('.navlinks a[data-target="'+id+'"]');
        if(entry.isIntersecting){
          document.querySelectorAll('.navlinks a').forEach(x=>x.classList.remove('active'));
          if(link) link.classList.add('active');
        }
      })
    },{root:null,rootMargin:"-40% 0px -40% 0px",threshold:0});

    sections.forEach(s=>observer.observe(s));

    // contact form demo (no backend) — show a simple alert
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! Your message has been received (demo).');
      this.reset();
    });
    
 