const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const primaryNavigation = document.getElementById('primary-navigation');
const iconHamburger = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');
const header = document.querySelector('.header');

// Mobile Navigation Toggle
mobileNavToggle.addEventListener('click', () => {
  const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
  
  mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
  primaryNavigation.setAttribute('data-visible', !isExpanded);
  header.setAttribute('data-nav-open', !isExpanded);
  document.body.classList.toggle('nav-open');

  if (!isExpanded) {
    iconHamburger.style.display = 'none';
    iconClose.style.display = 'block';
  } else {
    iconHamburger.style.display = 'block';
    iconClose.style.display = 'none';
  }
});

// Close mobile nav when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (primaryNavigation.getAttribute('data-visible') === 'true') {
      mobileNavToggle.click();
    }
  });
});

// Tabs Logic
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetPanelId = tab.getAttribute('aria-controls');
    
    // Deactivate all tabs and panels
    tabs.forEach(t => {
      t.setAttribute('aria-selected', false);
      t.classList.remove('active');
    });
    panels.forEach(p => {
      p.setAttribute('hidden', true);
      p.classList.remove('active');
    });
    
    // Activate target tab and panel
    tab.setAttribute('aria-selected', true);
    tab.classList.add('active');
    
    const targetPanel = document.getElementById(targetPanelId);
    targetPanel.removeAttribute('hidden');
    // slight delay to allow display to apply before opacity animation
    setTimeout(() => {
        targetPanel.classList.add('active');
    }, 10);
  });
});

// Accordion Logic
const accordions = document.querySelectorAll('.accordion-header');

// initialize accordions by removing hidden
document.querySelectorAll('.accordion-content').forEach(content => {
  content.removeAttribute('hidden');
});

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
    const content = document.getElementById(accordion.getAttribute('aria-controls'));
    
    // Close all other accordions
    accordions.forEach(acc => {
      if (acc !== accordion) {
        acc.setAttribute('aria-expanded', false);
        const otherContent = document.getElementById(acc.getAttribute('aria-controls'));
        otherContent.classList.remove('open');
      }
    });

    if (isExpanded) {
      accordion.setAttribute('aria-expanded', false);
      content.classList.remove('open');
    } else {
      accordion.setAttribute('aria-expanded', true);
      content.classList.add('open');
    }
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const inputGroup = document.querySelector('.input-group');

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const emailValue = emailInput.value.trim();
  
  if (emailValue === '' || !isValidEmail(emailValue)) {
    inputGroup.classList.add('error');
  } else {
    inputGroup.classList.remove('error');
    // Simulate successful submission
    emailInput.value = '';
  }
});

emailInput.addEventListener('input', () => {
    if (inputGroup.classList.contains('error')) {
        inputGroup.classList.remove('error');
    }
});
