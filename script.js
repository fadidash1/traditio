// Enhanced with playful features
console.log('%c🌟 Welcome to Traditio! 🌟', 'font-size: 18px; color: #C2185B; font-weight: bold;');

// Playful loading animation
function showLoadingAnimation() {
    const loadingChars = ['🌍', '📜', '🍲', '🎭', '🧵'];
    let counter = 0;
    const loadingInterval = setInterval(() => {
        process.stdout.write(`\rLoading ${loadingChars[counter]} `);
        counter = (counter + 1) % loadingChars.length;
    }, 200);
    
    return () => {
        clearInterval(loadingInterval);
        process.stdout.write('\r'); // Clear the line
    };
}

// Sample data for traditions with more playful examples
let traditions = [
    {
        id: 1,
        title: "Japanese Tea Ceremony",
        category: "Ritual",
        country: "Japan",
        image: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "The Japanese tea ceremony, also called the Way of Tea, is a Japanese cultural activity involving the ceremonial preparation and presentation of matcha, powdered green tea.",
        upvotes: 124,
        isUpvoted: false,
        isBookmarked: false,
        collection: "asian-traditions",
        funFact: "Did you know? The tea ceremony can last up to 4 hours! 🍵⏳"
    },
    {
        id: 2,
        title: "Grandma's Secret Apple Pie",
        category: "Recipe",
        country: "USA",
        image: "https://images.unsplash.com/photo-1562007908-17c67e878c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "A classic American apple pie recipe passed down through generations in my family. The secret is in the blend of spices and the homemade crust.",
        upvotes: 89,
        isUpvoted: false,
        isBookmarked: false,
        collection: "family-recipes",
        funFact: "Fun fact: This recipe includes a pinch of cinnamon magic! ✨"
    },
    {
        id: 3,
        title: "Day of the Dead Celebration",
        category: "Festival",
        country: "Mexico",
        image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Día de los Muertos is a Mexican holiday where families welcome back the souls of their deceased relatives for a brief reunion that includes food, drink and celebration.",
        upvotes: 156,
        isUpvoted: false,
        isBookmarked: false,
        collection: "latin-american-culture",
        funFact: "The marigold flowers are believed to guide spirits with their vibrant color and scent! 🌼👻"
    },
    {
        id: 4,
        title: "The Legend of Anansi the Spider",
        category: "Folklore",
        country: "Ghana",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Anansi the spider is a trickster figure in West African and Caribbean folklore who often takes the form of a spider and is considered to be the god of all knowledge of stories.",
        upvotes: 72,
        isUpvoted: false,
        isBookmarked: false,
        collection: "african-folklore",
        funFact: "Anansi stories traveled to the Americas through the transatlantic slave trade! 🕷️🌎"
    },
    {
        id: 5,
        title: "Norwegian Rosemaling Art",
        category: "Craft",
        country: "Norway",
        image: "https://images.unsplash.com/photo-1584735422182-45196a8d4e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "Rosemaling is a traditional Norwegian decorative painting style that developed in the 18th century, characterized by stylized flowers, scrollwork, and geometric elements.",
        upvotes: 43,
        isUpvoted: false,
        isBookmarked: false,
        collection: "european-arts",
        funFact: "Each region in Norway developed its own distinctive style! 🎨❄️"
    },
    {
        id: 6,
        title: "Chinese Moon Festival",
        category: "Festival",
        country: "China",
        image: "https://images.unsplash.com/photo-1567069395953-5075370c8899?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        description: "The Mid-Autumn Festival is a harvest festival celebrated by Chinese people. Families gather to admire the bright moon and eat mooncakes together.",
        upvotes: 98,
        isUpvoted: false,
        isBookmarked: false,
        collection: "asian-traditions",
        funFact: "Mooncakes often contain salted egg yolks to represent the full moon! 🥮🌕"
    }
];

// Collections data with playful descriptions
const collections = [
    {
        id: "asian-traditions",
        title: "Asian Traditions",
        description: "Discover the colorful tapestry of Asian cultures 🎎🎋",
        image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        itemCount: 2,
        emoji: "🌏"
    },
    {
        id: "family-recipes",
        title: "Family Recipes",
        description: "Secret ingredients and love passed through generations 👵🍳",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        itemCount: 1,
        emoji: "👨‍🍳"
    },
    {
        id: "latin-american-culture",
        title: "Latin American Culture",
        description: "Vibrant fiestas and rich traditions 💃🎉",
        image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        itemCount: 1,
        emoji: "🌶️"
    },
    {
        id: "african-folklore",
        title: "African Folklore",
        description: "Ancient wisdom and captivating stories 📜✨",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        itemCount: 1,
        emoji: "🦁"
    },
    {
        id: "european-arts",
        title: "European Arts & Crafts",
        description: "Timeless techniques and beautiful craftsmanship 🎨🖌️",
        image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        itemCount: 1,
        emoji: "🏰"
    }
];

// Team data with playful bios
const team = [
    {
        name: "Aisha Johnson",
        role: "Founder & Chief Culture Explorer",
        bio: "Cultural anthropologist with a passion for indigenous knowledge and a weakness for street food. 🍜",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        funFact: "Has participated in 37 different cultural ceremonies worldwide!"
    },
    {
        name: "Carlos Mendez",
        role: "Lead Developer & Tech Wizard",
        bio: "Codes by day, cooks traditional recipes by night. Believes emojis are a universal language. 💻🌮",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        funFact: "Can name all the ingredients in a mole sauce blindfolded!"
    },
    {
        name: "Priya Patel",
        role: "Community Manager & Story Collector",
        bio: "Connects with cultural communities and has a story for every occasion. Also a professional hugger. 🤗📖",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        funFact: "Knows 42 traditional lullabies from different cultures!"
    },
    {
        name: "Kwame Osei",
        role: "Content Curator & Fact Checker",
        bio: "Ensures every tradition is authentic. Also an amateur folk dancer. 🕺📚",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        funFact: "Can identify the origin of any folk tale within 3 guesses!"
    }
];

// Playful confetti effect
function showConfetti() {
    const confettiSettings = { 
        target: 'confetti-canvas',
        max: 150,
        size: 1.5,
        animate: true,
        props: ['■', '●', '◆', '▲', '🎉', '✨', '🌸'],
        colors: [[190, 24, 91], [0, 188, 212], [255, 255, 255], [240, 242, 245]],
        clock: 25,
        rotate: true,
        start_from_edge: true,
        respawn: true
    };
    
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    
    setTimeout(() => {
        confetti.clear();
    }, 3000);
}

// Easter egg - show random fun fact
function showRandomFunFact() {
    const funFacts = [
        "Did you know? The world has over 7,000 languages!",
        "Fun fact: The oldest known recipe is for beer! 🍺",
        "Cultural tip: In Thailand, pointing with your feet is considered rude! 👣",
        "Amazing: The Japanese tea ceremony can take 4 years to learn properly! 🍵",
        "Wow: In Norway, there's a tradition of hiding brooms on Christmas Eve to ward off witches! 🧹"
    ];
    
    if (Math.random() > 0.7) { // 30% chance to show
        const notification = document.createElement('div');
        notification.className = 'fun-fact-notification';
        notification.innerHTML = `
            <span>${funFacts[Math.floor(Math.random() * funFacts.length)]}</span>
            <button class="close-fun-fact">✕</button>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        notification.querySelector('.close-fun-fact').addEventListener('click', () => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
}

// Playful hover effects
function addPlayfulHoverEffects() {
    document.querySelectorAll('.tradition-card, .team-member').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-5px) rotate(1deg)';
            element.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
            element.style.boxShadow = '';
        });
    });
}

// Playful sound effects
function playSoundEffect(type) {
    if (typeof Audio !== 'undefined') {
        try {
            const sounds = {
                upvote: 'https://assets.mixkit.co/sfx/preview/mixkit-achievement-bell-600.mp3',
                bookmark: 'https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3',
                submit: 'https://assets.mixkit.co/sfx/preview/mixkit-unlock-game-notification-253.mp3'
            };
            
            if (sounds[type]) {
                const audio = new Audio(sounds[type]);
                audio.volume = 0.3;
                audio.play().catch(e => console.log("Audio play failed:", e));
            }
        } catch (e) {
            console.log("Sound effect error:", e);
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Show playful loading animation
    const stopLoading = showLoadingAnimation();
    
    // Load data from localStorage if available
    const savedTraditions = localStorage.getItem('traditions');
    if (savedTraditions) {
        traditions = JSON.parse(savedTraditions);
    }
    
    // Check which page we're on and initialize accordingly
    const path = window.location.pathname.split('/').pop();
    
    setTimeout(() => {
        stopLoading();
        
        if (path === 'collections.html') {
            initCollectionsPage();
        } else if (path === 'bookmarks.html') {
            initBookmarksPage();
        } else if (path === 'about.html') {
            initAboutPage();
        } else {
            initHomePage();
        }
        
        // Add playful effects
        addPlayfulHoverEffects();
        showRandomFunFact();
        
        // Check online status
        checkOnlineStatus();
        
        // Listen for online/offline events
        window.addEventListener('online', checkOnlineStatus);
        window.addEventListener('offline', checkOnlineStatus);
        
        // Easter egg - secret key combination
        let konamiCode = [];
        const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.key);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join('') === konamiSequence.join('')) {
                document.body.classList.add('konami');
                setTimeout(() => {
                    document.body.classList.remove('konami');
                }, 5000);
            }
        });
    }, 1500); // Simulate loading time
});

// Home Page Functions
function initHomePage() {
    displayTraditions(traditions);
    
    // Add event listeners to filters
    document.getElementById('country-filter')?.addEventListener('change', filterTraditions);
    document.getElementById('category-filter')?.addEventListener('change', filterTraditions);
    document.getElementById('search-btn')?.addEventListener('click', filterTraditions);
    
    // Modal functionality
    const uploadBtn = document.getElementById('upload-btn');
    const uploadModal = document.getElementById('upload-modal');
    const closeModal = document.getElementById('close-modal');
    const cancelUpload = document.getElementById('cancel-upload');
    const traditionForm = document.getElementById('tradition-form');

    if (uploadBtn) {
        uploadBtn.addEventListener('click', () => {
            uploadModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            uploadModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (cancelUpload) {
        cancelUpload.addEventListener('click', () => {
            uploadModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === uploadModal) {
            uploadModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // Form submission
    if (traditionForm) {
        traditionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newTradition = {
                id: traditions.length + 1,
                title: document.getElementById('tradition-title').value,
                category: document.getElementById('tradition-category').value,
                country: document.getElementById('tradition-country').value,
                image: document.getElementById('tradition-image').value,
                description: document.getElementById('tradition-description').value,
                upvotes: 0,
                isUpvoted: false,
                isBookmarked: false,
                collection: document.getElementById('tradition-collection').value || "",
                funFact: generateRandomFunFact(document.getElementById('tradition-category').value)
            };
            
            traditions.unshift(newTradition);
            displayTraditions(traditions);
            uploadModal.style.display = 'none';
            document.body.style.overflow = '';
            traditionForm.reset();
            
            // Play sound and show confetti
            playSoundEffect('submit');
            showConfetti();
            
            // Save to localStorage
            saveToLocalStorage();
        });
    }
}

// Generate random fun facts based on category
function generateRandomFunFact(category) {
    const funFacts = {
        Ritual: [
            "This ritual is traditionally performed during a full moon! 🌕",
            "Participants often wear special clothing for this ceremony! 👘",
            "This practice dates back over 200 years! ⏳"
        ],
        Recipe: [
            "The secret ingredient is always love! ❤️",
            "This dish tastes even better the next day! 🍽️",
            "Traditionally served on special occasions! 🎉"
        ],
        Folklore: [
            "This story has over 100 variations! 📖",
            "Often told to children at bedtime! 🌙",
            "The moral of this tale is about kindness! ✨"
        ],
        Festival: [
            "Celebrated with colorful costumes! 🎭",
            "Marks the changing of seasons! 🌸🍂❄️🌞",
            "Features special traditional foods! 🍡"
        ],
        Craft: [
            "Traditionally taught from parent to child! 👩‍👧",
            "Uses natural materials from the local environment! 🌿",
            "Each piece is completely unique! 🎨"
        ]
    };
    
    const defaultFacts = [
        "This tradition brings people together! 👫👬👭",
        "Passed down through generations! 👵➡️👩",
        "A beautiful example of cultural heritage! 🌍"
    ];
    
    const facts = funFacts[category] || defaultFacts;
    return facts[Math.floor(Math.random() * facts.length)];
}

// Collections Page Functions
function initCollectionsPage() {
    displayCollections(collections);
    
    // Add search functionality
    document.getElementById('bookmark-search-btn')?.addEventListener('click', filterCollections);
}

function displayCollections(collectionsToDisplay) {
    const collectionsGrid = document.getElementById('collections-grid');
    if (!collectionsGrid) return;
    
    collectionsGrid.innerHTML = '';
    
    collectionsToDisplay.forEach(collection => {
        const card = document.createElement('div');
        card.className = 'tradition-card';
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${collection.image}')"></div>
            <div class="card-content">
                <h3 class="card-title">${collection.emoji || '📚'} ${collection.title}</h3>
                <p class="card-description">${collection.description}</p>
                <div class="card-meta">
                    <span>${collection.itemCount} ${collection.itemCount === 1 ? 'tradition' : 'traditions'}</span>
                </div>
                <div class="card-actions">
                    <a href="collection.html?id=${collection.id}" class="btn btn-primary">Explore ${collection.emoji || '→'}</a>
                </div>
            </div>
        `;
        collectionsGrid.appendChild(card);
    });
}

function filterCollections() {
    const searchTerm = document.getElementById('bookmark-search')?.value.toLowerCase() || '';
    
    const filtered = collections.filter(collection => {
        return collection.title.toLowerCase().includes(searchTerm) || 
               collection.description.toLowerCase().includes(searchTerm);
    });
    
    displayCollections(filtered);
}

// Bookmarks Page Functions
function initBookmarksPage() {
    const bookmarkedTraditions = traditions.filter(t => t.isBookmarked);
    displayTraditions(bookmarkedTraditions, true);
    
    // Add search functionality
    document.getElementById('bookmark-search-btn')?.addEventListener('click', filterBookmarks);
    document.getElementById('bookmark-country-filter')?.addEventListener('change', filterBookmarks);
    document.getElementById('bookmark-category-filter')?.addEventListener('change', filterBookmarks);
}

function filterBookmarks() {
    const searchTerm = document.getElementById('bookmark-search')?.value.toLowerCase() || '';
    const countryFilter = document.getElementById('bookmark-country-filter')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('bookmark-category-filter')?.value.toLowerCase() || '';
    
    const filtered = traditions.filter(tradition => {
        const matchesSearch = !searchTerm || 
                             tradition.title.toLowerCase().includes(searchTerm) || 
                             tradition.description.toLowerCase().includes(searchTerm);
        const matchesCountry = !countryFilter || tradition.country.toLowerCase().includes(countryFilter);
        const matchesCategory = !categoryFilter || tradition.category.toLowerCase().includes(categoryFilter);
        return tradition.isBookmarked && matchesSearch && matchesCountry && matchesCategory;
    });
    
    displayTraditions(filtered, true);
}

// About Page Functions
function initAboutPage() {
    displayTeamMembers();
    
    // Add playful team member interactions
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('click', function() {
            const name = this.querySelector('h3').textContent;
            const role = this.querySelector('.role').textContent;
            const funFact = team.find(t => t.name === name)?.funFact || "Loves cultural traditions!";
            
            alert(`${name}\n${role}\n\nFun Fact: ${funFact}`);
        });
    });
}

function displayTeamMembers() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = '';
    
    team.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member';
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p class="role">${member.role}</p>
            <p class="bio">${member.bio}</p>
            <div class="hover-effect">Click me!</div>
        `;
        teamGrid.appendChild(memberCard);
    });
}

// Shared Functions with playful enhancements
function displayTraditions(traditionsToDisplay, isBookmarksPage = false) {
    const traditionsGrid = document.getElementById(isBookmarksPage ? 'bookmarks-grid' : 'traditions-grid');
    if (!traditionsGrid) return;
    
    traditionsGrid.innerHTML = '';
    
    if (traditionsToDisplay.length === 0) {
        traditionsGrid.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                <i class="fas fa-${isBookmarksPage ? 'bookmark' : 'book-open'}" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h3>${isBookmarksPage ? 'No bookmarks yet' : 'No traditions found'}</h3>
                <p>${isBookmarksPage ? 'Bookmark traditions to see them here! Try clicking the bookmark icon on any tradition.' : 'Try changing your search filters or adding a new tradition!'}</p>
                ${!isBookmarksPage ? '<button class="btn btn-primary" id="upload-btn-empty">Share a Tradition</button>' : ''}
            </div>
        `;
        
        if (!isBookmarksPage) {
            document.getElementById('upload-btn-empty')?.addEventListener('click', () => {
                document.getElementById('upload-modal').style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
        }
        return;
    }
    
    traditionsToDisplay.forEach(tradition => {
        const card = document.createElement('div');
        card.className = 'tradition-card';
        card.innerHTML = `
            <div class="card-image" style="background-image: url('${tradition.image || 'https://via.placeholder.com/300x180?text=No+Image'}')"></div>
            <div class="card-content">
                <h3 class="card-title">${tradition.title}</h3>
                <div class="card-meta">
                    <span>${getCategoryEmoji(tradition.category)} ${tradition.category}</span>
                    <span>${getCountryFlag(tradition.country)} ${tradition.country}</span>
                </div>
                <p class="card-description">${tradition.description}</p>
                ${tradition.funFact ? `<div class="fun-fact">✨ ${tradition.funFact}</div>` : ''}
                <div class="card-actions">
                    <button class="upvote-btn ${tradition.isUpvoted ? 'upvoted' : ''}" data-id="${tradition.id}">
                        <i class="fas fa-heart"></i>
                        <span>${tradition.upvotes}</span>
                    </button>
                    <button class="bookmark-btn ${tradition.isBookmarked ? 'bookmarked' : ''}" data-id="${tradition.id}">
                        <i class="fas fa-bookmark"></i>
                    </button>
                </div>
            </div>
        `;
        traditionsGrid.appendChild(card);
    });

    // Add event listeners to upvote and bookmark buttons
    document.querySelectorAll('.upvote-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const tradition = traditions.find(t => t.id === id);
            if (tradition) {
                if (tradition.isUpvoted) {
                    tradition.upvotes--;
                    tradition.isUpvoted = false;
                    this.classList.remove('upvoted');
                    this.querySelector('i').classList.add('fa-heart');
                    this.querySelector('i').classList.remove('fa-heartbeat');
                } else {
                    tradition.upvotes++;
                    tradition.isUpvoted = true;
                    this.classList.add('upvoted');
                    this.querySelector('i').classList.remove('fa-heart');
                    this.querySelector('i').classList.add('fa-heartbeat');
                    playSoundEffect('upvote');
                    
                    // Bounce animation
                    this.querySelector('i').classList.add('bounce');
                    setTimeout(() => {
                        this.querySelector('i').classList.remove('bounce');
                    }, 1000);
                }
                this.querySelector('span').textContent = tradition.upvotes;
                saveToLocalStorage();
            }
        });
    });

    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const tradition = traditions.find(t => t.id === id);
            if (tradition) {
                tradition.isBookmarked = !tradition.isBookmarked;
                this.classList.toggle('bookmarked');
                playSoundEffect('bookmark');
                
                // If we're on the bookmarks page, refresh the display
                if (window.location.pathname.split('/').pop() === 'bookmarks.html') {
                    initBookmarksPage();
                }
                
                // Show floating emoji
                if (tradition.isBookmarked) {
                    const emoji = document.createElement('div');
                    emoji.className = 'floating-emoji';
                    emoji.textContent = '📌';
                    this.appendChild(emoji);
                    
                    setTimeout(() => {
                        emoji.remove();
                    }, 1000);
                }
                
                saveToLocalStorage();
            }
        });
    });
}

// Helper functions for playful elements
function getCategoryEmoji(category) {
    const emojis = {
        Ritual: '🙏',
        Recipe: '🍳',
        Folklore: '📖',
        Festival: '🎉',
        Craft: '🎨'
    };
    return emojis[category] || '✨';
}

function getCountryFlag(country) {
    // Simple emoji flags for some countries
    const flags = {
        Japan: '🇯🇵',
        USA: '🇺🇸',
        Mexico: '🇲🇽',
        China: '🇨🇳',
        Ghana: '🇬🇭',
        Norway: '🇳🇴',
        India: '🇮🇳',
        Italy: '🇮🇹'
    };
    return flags[country] || '🌍';
}

function filterTraditions() {
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    const countryFilter = document.getElementById('country-filter')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('category-filter')?.value.toLowerCase() || '';
    
    const filtered = traditions.filter(tradition => {
        const matchesSearch = !searchTerm || 
                             tradition.title.toLowerCase().includes(searchTerm) || 
                             tradition.description.toLowerCase().includes(searchTerm);
        const matchesCountry = !countryFilter || tradition.country.toLowerCase().includes(countryFilter);
        const matchesCategory = !categoryFilter || tradition.category.toLowerCase().includes(categoryFilter);
        return matchesSearch && matchesCountry && matchesCategory;
    });
    
    displayTraditions(filtered);
}

function checkOnlineStatus() {
    const offlineNotice = document.getElementById('offline-notice');
    if (!offlineNotice) return;
    
    if (!navigator.onLine) {
        offlineNotice.style.display = 'block';
        offlineNotice.innerHTML = `
            <span>You're currently offline. Viewing cached content.</span>
            <div class="offline-emoji">📶❌</div>
        `;
        loadFromLocalStorage();
    } else {
        offlineNotice.style.display = 'none';
    }
}

function saveToLocalStorage() {
    localStorage.setItem('traditions', JSON.stringify(traditions));
}

function loadFromLocalStorage() {
    const savedTraditions = localStorage.getItem('traditions');
    if (savedTraditions) {
        const parsed = JSON.parse(savedTraditions);
        displayTraditions(parsed);
    }
}

// Add CSS for playful elements
const playfulStyles = document.createElement('style');
playfulStyles.textContent = `
    .fun-fact-notification {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background-color: var(--primary);
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        max-width: 300px;
    }
    
    .fun-fact-notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .close-fun-fact {
        background: none;
        border: none;
        color: white;
        position: absolute;
        top: 5px;
        right: 5px;
        cursor: pointer;
        font-size: 1rem;
    }
    
    .fun-fact {
        background-color: rgba(0, 188, 212, 0.1);
        padding: 0.5rem;
        border-radius: 4px;
        margin: 0.5rem 0;
        font-size: 0.9rem;
        border-left: 3px solid var(--accent);
    }
    
    .floating-emoji {
        position: absolute;
        animation: floatUp 1s ease-out forwards;
        font-size: 1.5rem;
        pointer-events: none;
    }
    
    @keyframes floatUp {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-50px) scale(1.5); opacity: 0; }
    }
    
    .bounce {
        animation: bounce 0.5s;
    }
    
    @keyframes bounce {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
    
    .konami {
        animation: rainbow 5s linear infinite;
    }
    
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
    
    .offline-emoji {
        font-size: 1.5rem;
        margin-left: 0.5rem;
        display: inline-block;
        animation: blink 1.5s infinite;
    }
    
    @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
    }
    
    .team-member .hover-effect {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(194, 24, 91, 0.7);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s;
        border-radius: 8px;
        font-weight: bold;
    }
    
    .team-member:hover .hover-effect {
        opacity: 1;
    }
`;
document.head.appendChild(playfulStyles);

// Load Confetti library if not already loaded
if (typeof ConfettiGenerator === 'undefined') {
    const confettiScript = document.createElement('script');
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/confetti-js@0.0.18/dist/index.min.js';
    document.head.appendChild(confettiScript);
}