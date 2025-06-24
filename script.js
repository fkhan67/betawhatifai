// Chat functionality
let isProcessing = false;

// Scroll to chat section
function scrollToChat() {
    document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to examples section
function scrollToExamples() {
    document.getElementById('examples').scrollIntoView({ behavior: 'smooth' });
}

// Handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter' && !isProcessing) {
        sendMessage();
    }
}

// Send message function
function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message === '' || isProcessing) return;
    
    // Add user message
    addMessage(message, 'user');
    input.value = '';
    
    // Show loading
    isProcessing = true;
    showLoading();
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessage(response, 'ai');
        hideLoading();
        isProcessing = false;
    }, 1500 + Math.random() * 1000);
}

// Add message to chat
function addMessage(content, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    if (sender === 'ai') {
        messageContent.innerHTML = `<i class="fas fa-robot me-2"></i>${content}`;
    } else {
        messageContent.textContent = content;
    }
    
    messageDiv.appendChild(messageContent);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show loading indicator
function showLoading() {
    const chatMessages = document.getElementById('chat-messages');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message ai-message';
    loadingDiv.id = 'loading-message';
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = '<i class="fas fa-robot me-2"></i>Thinking<span class="loading-dots"></span>';
    
    loadingDiv.appendChild(messageContent);
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide loading indicator
function hideLoading() {
    const loadingMessage = document.getElementById('loading-message');
    if (loadingMessage) {
        loadingMessage.remove();
    }
}

// Generate AI response
function generateAIResponse(question) {
    const responses = {
        'alexander': `What an intriguing question! If Alexander the Great hadn't died prematurely at age 32 in 323 BCE, the course of world history would have been dramatically different. 

At the time of his death, Alexander was planning campaigns to Arabia and potentially Carthage. With his military genius and the vast resources of his empire, he likely would have expanded his conquests further west and south.

The most significant impact would have been on the cultural and political landscape. Alexander's empire might have lasted longer, potentially creating a more unified Hellenistic world. This could have accelerated the spread of Greek culture, philosophy, and science across the Mediterranean and beyond.

However, the question remains: could even Alexander have maintained control over such a vast empire? The administrative challenges were immense, and his death actually prevented potential civil wars that might have erupted over succession.`,

        'roman empire': `This is one of history's most fascinating "what if" scenarios! If the Roman Empire had never fallen, the world would be unrecognizable today.

The Roman Empire's collapse in 476 CE was actually a gradual process, but if it had survived, we might have seen:
- A unified European political system lasting centuries longer
- Latin remaining the dominant language of Europe
- Christianity developing differently under continued Roman influence
- Different technological and scientific developments
- A very different relationship between Europe and the rest of the world

The Roman Empire's survival would have prevented the fragmentation of Europe into competing kingdoms and nations. This could have led to earlier technological advancement, different patterns of trade and exploration, and a completely different geopolitical landscape.

However, it's worth considering whether any empire could have survived indefinitely. The challenges of governing such a vast territory, managing diverse cultures, and maintaining military control might have eventually led to transformation rather than complete collapse.`,

        'library': `The destruction of the Library of Alexandria is one of history's greatest intellectual tragedies. If it had survived, the advancement of human knowledge might have been accelerated by centuries.

The library contained an estimated 400,000 to 700,000 scrolls, representing the accumulated knowledge of the ancient world. Its survival could have meant:
- Preserved works of ancient philosophers, scientists, and historians
- Earlier development of scientific methods and discoveries
- Different approaches to medicine, mathematics, and astronomy
- A more continuous intellectual tradition from antiquity to the modern era

The loss of the library's contents set back human knowledge significantly. Many works by figures like Archimedes, Euclid, and other ancient scholars were lost forever. If these had been preserved, the Renaissance might have happened centuries earlier, or taken a very different form.

However, it's also possible that the preservation of ancient knowledge might have slowed innovation by creating too much reverence for past authorities. The tension between preserving knowledge and encouraging new discoveries is a fascinating aspect of this scenario.`,

        'napoleon': `Napoleon's defeat at Waterloo in 1815 marked the end of his remarkable career. If he had won, European history would have taken a dramatically different course.

A victory at Waterloo would have likely meant:
- Napoleon's return to power in France
- Continued French dominance in Europe
- Different borders and political systems across the continent
- Potential changes in colonial expansion and global trade
- Different development of nationalism and liberalism

Napoleon was a brilliant military commander and administrator. His continued rule might have led to more centralized, efficient governments across Europe, but also to continued warfare as other powers resisted French dominance.

The most interesting aspect is how this would have affected the development of democracy, nationalism, and the balance of power in Europe. Napoleon's system of meritocracy and legal reforms might have spread more widely, but so too might have his authoritarian tendencies.

However, even a victory at Waterloo wouldn't have guaranteed Napoleon's long-term success. The coalition against him was powerful, and the economic and human costs of continued warfare might have eventually led to his downfall regardless.`,

        'mongols': `The Mongol Empire's expansion into Europe was halted by the death of Ögedei Khan in 1241, when the Mongol armies were already deep into Central Europe. If they had continued their conquest, the world would be dramatically different today.

A complete Mongol conquest of Europe would have meant:
- A unified Eurasian empire spanning from the Pacific to the Atlantic
- Different religious and cultural developments
- Changed patterns of trade and communication
- Different technological and scientific exchanges
- A very different relationship between East and West

The Mongols were surprisingly tolerant rulers who encouraged trade and cultural exchange. A Mongol Europe might have experienced earlier contact with Asian technologies and ideas, potentially accelerating the Renaissance and the Age of Discovery.

However, the Mongols also brought destruction and population decline wherever they conquered. The long-term stability of such a vast empire is questionable, and it might have eventually fragmented into regional khanates, similar to what happened in Asia.

The most fascinating aspect is how this would have affected the development of European identity, Christianity, and the eventual rise of European global dominance.`,

        'wright brothers': `The Wright brothers' first flight in 1903 marked the beginning of the aviation age. If they had never achieved powered flight, the world would be dramatically different today.

Without the Wright brothers' breakthrough, aviation development might have been delayed by decades. This would have meant:
- Slower global transportation and communication
- Different patterns of trade and economic development
- Changed military strategies and capabilities
- Different approaches to exploration and travel
- A very different 20th century

However, it's important to note that the Wright brothers weren't the only ones working on flight. Other inventors like Samuel Langley and Alberto Santos-Dumont were also pursuing aviation. If the Wrights hadn't succeeded, someone else likely would have within a few years.

The real question is how much delay would have occurred, and how this would have affected the development of other technologies. Aviation accelerated the development of materials science, aerodynamics, and many other fields. A delay might have slowed overall technological progress.

The most significant impact might have been on the course of World War I and II, where aviation played crucial roles. Different military technologies might have developed instead.`
    };
    
    const questionLower = question.toLowerCase();
    
    // Check for specific keywords
    if (questionLower.includes('alexander') || questionLower.includes('great')) {
        return responses.alexander;
    } else if (questionLower.includes('roman') || questionLower.includes('empire')) {
        return responses.roman;
    } else if (questionLower.includes('library') || questionLower.includes('alexandria')) {
        return responses.library;
    } else if (questionLower.includes('napoleon') || questionLower.includes('waterloo')) {
        return responses.napoleon;
    } else if (questionLower.includes('mongol') || questionLower.includes('mongols')) {
        return responses.mongols;
    } else if (questionLower.includes('wright') || questionLower.includes('brothers') || questionLower.includes('fly')) {
        return responses.wright;
    } else {
        // Generic response for other questions
        return `That's a fascinating "what if" question! While I can't predict with certainty what would have happened, I can help you think through the possibilities.

Historical events are often interconnected, so changing one event can have ripple effects throughout time. When considering alternate scenarios, it's helpful to think about:
- The immediate consequences of the change
- How this would affect related events and people
- The broader social, political, and economic impacts
- How this might change the development of technology, culture, or society

What specific aspects of this scenario interest you most? I'd be happy to explore the possibilities further with you!`;
    }
}

// Ask example question
function askQuestion(question) {
    const input = document.getElementById('user-input');
    input.value = question;
    sendMessage();
    scrollToChat();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Focus on input when chat section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.getElementById('user-input').focus();
            }
        });
    });
    
    const chatSection = document.getElementById('chat');
    if (chatSection) {
        observer.observe(chatSection);
    }
}); 