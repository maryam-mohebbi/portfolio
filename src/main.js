// ============================================
// MAIN JAVASCRIPT - Portfolio Functionality
// ============================================

(function() {
  'use strict';

  // ============================================
  // Wait for DOM to be ready
  // ============================================
  document.addEventListener('DOMContentLoaded', function() {
    populateContent();
    initNavigation();
    initScrollEffects();
    setCurrentYear();
  });

  // ============================================
  // Populate all content from config.js
  // ============================================
  function populateContent() {
    if (typeof portfolioData === 'undefined') {
      console.error('Portfolio data not found! Make sure config.js is loaded.');
      return;
    }

    // Hero Section
    populateHero();
    
    // About Section
    populateAbout();
    
    // Experience Section
    populateExperience();
    
    // Skills Section
    populateSkills();
    
    // Education Section
    populateEducation();
    
    // Languages Section
    populateLanguages();
    
    // Contact Section
    populateContact();
  }

  // ============================================
  // Hero Section
  // ============================================
  function populateHero() {
    const { personal } = portfolioData;
    
    setText('heroName', personal.name);
    setText('heroTitle', personal.title);
    setText('heroTagline', personal.tagline);
    
    // Social links
    setLink('socialLinkedin', personal.socialLinks.linkedin);
    setLink('socialGithub', personal.socialLinks.github);
    setLink('socialEmail', personal.socialLinks.email);
  }

  // ============================================
  // About Section
  // ============================================
  function populateAbout() {
    const { personal } = portfolioData;
    
    // Set photo if available
    const photoImg = document.getElementById('aboutPhoto');
    const photoContainer = document.getElementById('aboutPhotoContainer');
    if (personal.photo && photoImg && photoContainer) {
      photoImg.src = personal.photo;
      photoContainer.style.display = 'block';
    } else if (photoContainer) {
      photoContainer.style.display = 'none';
    }
    
    setText('aboutSummary', personal.summary);
    setText('aboutLocation', personal.location);
    
    const emailLink = document.getElementById('aboutEmail');
    if (emailLink) {
      emailLink.href = `mailto:${personal.email}`;
      emailLink.textContent = personal.email;
    }
  }

  // ============================================
  // Experience Section
  // ============================================
  function populateExperience() {
    const { workExperience } = portfolioData;
    const container = document.getElementById('experienceTimeline');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    workExperience.forEach((job, index) => {
      const item = document.createElement('div');
      item.className = `timeline-item ${job.current ? 'current' : ''}`;
      
      const achievements = job.achievements
        .map(achievement => `<li>${achievement}</li>`)
        .join('');
      
      item.innerHTML = `
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="job-title">${job.title}</h3>
          <div class="job-company">${job.company}</div>
          <div class="job-period">
            ${job.period}
            ${job.current ? '<span class="current-badge">Current</span>' : ''}
          </div>
          <ul class="job-achievements">
            ${achievements}
          </ul>
        </div>
      `;
      
      container.appendChild(item);
    });
  }

  // ============================================
  // Skills Section
  // ============================================
  function populateSkills() {
    const { skills } = portfolioData;
    const container = document.getElementById('skillsContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    Object.entries(skills).forEach(([category, skillList]) => {
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'skill-category';
      
      const tags = skillList
        .map(skill => `<span class="skill-tag">${skill}</span>`)
        .join('');
      
      categoryDiv.innerHTML = `
        <h3>${category}</h3>
        <div class="skill-tags">
          ${tags}
        </div>
      `;
      
      container.appendChild(categoryDiv);
    });
  }

  // ============================================
  // Education Section
  // ============================================
  function populateEducation() {
    const { education } = portfolioData;
    const container = document.getElementById('educationContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    education.forEach(edu => {
      const item = document.createElement('div');
      item.className = 'education-item';
      
      const details = edu.details
        .map(detail => `<li>${detail}</li>`)
        .join('');
      
      item.innerHTML = `
        <h3 class="education-degree">${edu.degree}</h3>
        <div class="education-school">${edu.school}</div>
        <div class="education-meta">
          <span><i class="fas fa-calendar"></i>${edu.period}</span>
          <span><i class="fas fa-map-marker-alt"></i>${edu.location}</span>
          ${edu.gpa ? `<span><i class="fas fa-award"></i>GPA: ${edu.gpa}</span>` : ''}
        </div>
        <ul class="education-details">
          ${details}
        </ul>
      `;
      
      container.appendChild(item);
    });
  }

  // ============================================
  // Languages Section
  // ============================================
  function populateLanguages() {
    const { languages } = portfolioData;
    const container = document.getElementById('languagesContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    languages.forEach(lang => {
      const item = document.createElement('div');
      item.className = 'language-item';
      
      item.innerHTML = `
        <div class="language-name">${lang.name}</div>
        <div class="language-level">${lang.level}</div>
      `;
      
      container.appendChild(item);
    });
  }

  // ============================================
  // Contact Section
  // ============================================
  function populateContact() {
    const { personal } = portfolioData;
    
    setLink('contactEmail', personal.socialLinks.email);
    setLink('contactLinkedin', personal.socialLinks.linkedin);
    setLink('contactGithub', personal.socialLinks.github);
  }

  // ============================================
  // Navigation
  // ============================================
  function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    if (navToggle) {
      navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = navMenu.classList.contains('active') 
          ? 'rotate(-45deg) translate(-5px, 6px)' 
          : '';
        spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navMenu.classList.contains('active') 
          ? 'rotate(45deg) translate(-5px, -6px)' 
          : '';
      });
    }
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        
        // Reset hamburger
        if (navToggle) {
          const spans = navToggle.querySelectorAll('span');
          spans[0].style.transform = '';
          spans[1].style.opacity = '1';
          spans[2].style.transform = '';
        }
      });
    });
    
    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
      let current = '';
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  // ============================================
  // Scroll Effects
  // ============================================
  function initScrollEffects() {
    // Navbar background on scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(20, 45, 76, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
      } else {
        navbar.style.backgroundColor = 'rgba(20, 45, 76, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
      }
    });
    
    // Fade in elements on scroll (intersection observer)
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe elements that should fade in
    const fadeElements = document.querySelectorAll(
      '.timeline-item, .skill-category, .education-item, .language-item, .contact-card'
    );
    
    fadeElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // ============================================
  // Set Current Year in Footer
  // ============================================
  function setCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }

  // ============================================
  // Helper Functions
  // ============================================
  function setText(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
      element.textContent = text;
    }
  }

  function setLink(elementId, href) {
    const element = document.getElementById(elementId);
    if (element) {
      element.href = href;
    }
  }

})();

