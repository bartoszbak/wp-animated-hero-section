document.addEventListener('DOMContentLoaded', () => {
    const heroBlocks = document.querySelectorAll('.wp-block-ruby-care-animated-hero');
    
    heroBlocks.forEach(block => {
        const subtitle = block.querySelector('.animated-hero-subtitle');
        const headline = block.querySelector('.animated-hero-headline');
        const secondImage = block.querySelector('.animated-hero-second-image img');
        
        // Set initial states
        if (subtitle) {
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(20px)';
            subtitle.style.transition = 'opacity 0.5s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)';
        }
        
        if (headline) {
            // Split headline into words and wrap each word in a span
            const words = headline.textContent.split(' ');
            headline.innerHTML = words.map(word => `<span class="headline-word">${word}</span>`).join(' ');
            
            // Set initial states for all words
            const headlineWords = headline.querySelectorAll('.headline-word');
            headlineWords.forEach(word => {
                word.style.opacity = '0';
                word.style.transform = 'translateY(30px) scale(0.9)';
                word.style.transition = 'opacity 0.5s ease, transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)';
            });
        }
        
        if (secondImage) {
            secondImage.style.opacity = '0';
            secondImage.style.transform = 'translateY(20px)';
            secondImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        
        // Force a reflow to ensure initial states are applied
        if (subtitle) void subtitle.offsetWidth;
        if (headline) void headline.offsetWidth;
        if (secondImage) void secondImage.offsetWidth;
        
        // Animate subtitle first
        if (subtitle) {
            setTimeout(() => {
                subtitle.style.opacity = '1';
                subtitle.style.transform = 'translateY(0)';
            }, 400);
        }
        
        // Animate headline words one by one with smooth timing
        if (headline) {
            const headlineWords = headline.querySelectorAll('.headline-word');
            headlineWords.forEach((word, index) => {
                // Add a slight random delay to each word for natural feel
                const randomDelay = Math.random() * 100; // Reduced random delay (0-100ms)
                const baseDelay = 800 + (index * 120); // Faster base delay (800ms) + 120ms per word
                
                setTimeout(() => {
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0) scale(1)';
                }, baseDelay + randomDelay);
            });
        }
        
        // Animate second image after all words
        if (secondImage) {
            const totalWords = headline?.querySelectorAll('.headline-word').length || 0;
            const baseDelay = 800 + (totalWords * 120); // Base delay + word animations
            
            setTimeout(() => {
                secondImage.style.opacity = '1';
                secondImage.style.transform = 'translateY(0)';
            }, baseDelay);
        }
    });
}); 