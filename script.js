// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add smooth scrolling to all navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Add intersection observer for animations
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

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add click effects to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
        });
    });

    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    // Add heart click effect
    const hearts = document.querySelectorAll('.floating-heart, .heart-animation');
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            this.style.transform = 'scale(1.5) rotate(360deg)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });

    // Add parallax effect to floating hearts
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const floatingHearts = document.querySelectorAll('.floating-heart');
        
        floatingHearts.forEach((heart, index) => {
            const speed = 0.5 + (index * 0.1);
            heart.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Add music toggle (optional background music)
    let isMusicPlaying = false;
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '🎵';
    musicButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: linear-gradient(45deg, #e91e63, #ff6b9d);
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(233, 30, 99, 0.3);
        transition: all 0.3s ease;
    `;
    
    musicButton.addEventListener('click', function() {
        if (isMusicPlaying) {
            this.innerHTML = '🎵';
            this.style.background = 'linear-gradient(45deg, #e91e63, #ff6b9d)';
        } else {
            this.innerHTML = '🔇';
            this.style.background = 'linear-gradient(45deg, #666, #999)';
        }
        isMusicPlaying = !isMusicPlaying;
    });
    
    musicButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    musicButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(musicButton);

    // Add confetti effect on page load
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: ${['#e91e63', '#ff6b9d', '#ff9a9e', '#fecfef'][Math.floor(Math.random() * 4)]};
            left: ${Math.random() * 100}vw;
            top: -10px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: confettiFall 3s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    // Add confetti fall animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Create confetti on page load
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti();
        }, i * 100);
    }

    // Add love message popup
    const loveMessages = [
        "I love you! 💕",
        "You're amazing! ✨",
        "You make me happy! 😊",
        "Forever yours! 💖",
        "You're my everything! 💝"
    ];

    let messageIndex = 0;
    setInterval(() => {
        const message = document.createElement('div');
        message.textContent = loveMessages[messageIndex];
        message.style.cssText = `
            position: fixed;
            top: ${Math.random() * 50 + 20}%;
            left: ${Math.random() * 60 + 20}%;
            background: linear-gradient(45deg, #e91e63, #ff6b9d);
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            font-family: 'Dancing Script', cursive;
            font-size: 1.2rem;
            z-index: 10000;
            animation: messageFloat 3s ease-out forwards;
            pointer-events: none;
        `;
        
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
        
        messageIndex = (messageIndex + 1) % loveMessages.length;
    }, 8000);

    // Add message float animation
    const messageStyle = document.createElement('style');
    messageStyle.textContent = `
        @keyframes messageFloat {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            20% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            80% {
                opacity: 1;
                transform: translateY(-10px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-20px) scale(0.8);
            }
        }
    `;
    document.head.appendChild(messageStyle);
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowUp':
            window.scrollBy(0, -100);
            break;
        case 'ArrowDown':
            window.scrollBy(0, 100);
            break;
        case 'Home':
            window.scrollTo(0, 0);
            break;
        case 'End':
            window.scrollTo(0, document.body.scrollHeight);
            break;
    }
}); 