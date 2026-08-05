const skincareQuestions = [
    // Partition 1
    { q: "What is the best way to determine my skin type?", a: "Wash your face, wait an hour without applying products, and observe if it's oily, dry, normal, or combination." },
    { q: "How often should I wash my face?", a: "Twice a day: once in the morning and once at night, plus after heavy sweating." },
    { q: "Do I really need to wear sunscreen every day?", a: "Yes, sunscreen protects against premature aging and skin cancer, even on cloudy days." },
    { q: "What does Vitamin C do for the skin?", a: "Vitamin C brightens the skin, evens out tone, and provides antioxidant protection." },
    { q: "Is it okay to pop my pimples?", a: "No, popping pimples can cause scarring, infection, and push bacteria deeper into the skin." },
    { q: "At what age should I start using anti-aging products?", a: "Mid-20s is a good time to introduce preventative anti-aging products like retinoids." },
    { q: "What is the difference between a physical and chemical exfoliant?", a: "Physical uses granules to scrub, while chemical uses acids (like AHA/BHA) to dissolve dead skin cells." },
    { q: "How much water should I drink for healthy skin?", a: "Aim for at least 8 glasses (2 liters) a day to maintain skin hydration." },
    { q: "Can diet affect my acne?", a: "Yes, high glycemic foods and dairy can trigger acne in some individuals." },
    { q: "What is hyaluronic acid?", a: "It's a humectant that draws moisture into the skin, keeping it plump and hydrated." },
    // Partition 2
    { q: "Should I apply products to damp or dry skin?", a: "Most moisturizers and serums absorb better on slightly damp skin." },
    { q: "What order should I apply my skincare products?", a: "Thinnest to thickest: cleanser, toner, serums, moisturizer, then sunscreen/oil." },
    { q: "How often should I exfoliate?", a: "1-3 times a week, depending on your skin type and the product's strength." },
    { q: "What are the benefits of a chemical peel?", a: "They improve skin texture, reduce hyperpigmentation, and stimulate collagen production." },
    { q: "Is retinol safe for sensitive skin?", a: "Yes, if started slowly with a low concentration and paired with a good moisturizer." },
    { q: "What causes dark circles under the eyes?", a: "Genetics, lack of sleep, aging, allergies, and thinning skin." },
    { q: "How can I reduce enlarged pores?", a: "Keep them clean with salicylic acid, use niacinamide, and wear sunscreen to prevent collagen loss." },
    { q: "What is a signature facial?", a: "A customized facial treatment that includes cleansing, exfoliation, extraction, and hydration tailored to your needs." },
    { q: "Do I need a separate eye cream?", a: "Not always, but eye creams are formulated for the thinner, more sensitive skin around the eyes." },
    { q: "How long does it take to see results from a new skincare routine?", a: "Generally 4-6 weeks, as this is how long it takes for your skin cells to turn over." },
    // Partition 3
    { q: "What are AHAs and BHAs?", a: "AHAs (Alpha Hydroxy Acids) exfoliate the surface; BHAs (Beta Hydroxy Acids) penetrate pores to clear oil." },
    { q: "How can I get rid of blackheads?", a: "Use BHA (salicylic acid) regularly, avoid pore-clogging ingredients, and try professional extractions." },
    { q: "Is double cleansing necessary?", a: "Yes, especially if you wear makeup or heavy sunscreen. Use an oil-based cleanser followed by a water-based one." },
    { q: "What is niacinamide?", a: "Vitamin B3, which helps minimize pores, reduce redness, and regulate oil production." },
    { q: "Can stress affect my skin?", a: "Yes, stress increases cortisol, which can lead to increased oil production and breakouts." },
    { q: "Why is my skin suddenly breaking out?", a: "Hormones, stress, diet changes, new products, or not washing pillowcases often enough." },
    { q: "What is the best treatment for acne scars?", a: "Chemical peels, laser resurfacing, microneedling, and topical retinoids." },
    { q: "Are natural skincare products better?", a: "Not necessarily. 'Natural' doesn't always mean safe or effective, and synthetic ingredients are often well-researched." },
    { q: "What causes hyperpigmentation?", a: "Sun exposure, inflammation, hormones (melasma), and skin injuries." },
    { q: "How can I treat hyperpigmentation?", a: "Use sunscreen, Vitamin C, AHAs, retinoids, and consider professional treatments like laser or peels." },
    // Partition 4
    { q: "What is rosacea?", a: "A chronic skin condition causing redness, visible blood vessels, and sometimes pimples on the face." },
    { q: "How do I care for rosacea-prone skin?", a: "Use gentle, fragrance-free products, avoid known triggers, and consult a dermatologist." },
    { q: "What is the skin barrier?", a: "The outermost layer of skin that keeps moisture in and irritants out." },
    { q: "How do I know if my skin barrier is damaged?", a: "Skin feels tight, dry, flaky, sensitive, or looks red and irritated." },
    { q: "How can I repair a damaged skin barrier?", a: "Stop using active ingredients, focus on hydration, and use products with ceramides and fatty acids." },
    { q: "What is microneedling?", a: "A procedure using fine needles to create micro-injuries, stimulating collagen production." },
    { q: "Is microneedling painful?", a: "A numbing cream is applied beforehand, making it relatively painless for most." },
    { q: "How often should I get a facial?", a: "Generally every 4-6 weeks, coinciding with your skin's natural turnover cycle." },
    { q: "What is laser hair removal?", a: "A procedure using concentrated light to destroy hair follicles for long-term hair reduction." },
    { q: "How many sessions are needed for laser hair removal?", a: "Typically 6-8 sessions for optimal results, depending on the area and hair type." },
    // Partition 5
    { q: "What is Botox?", a: "A neurotoxin injected to temporarily relax muscles and smooth out wrinkles." },
    { q: "How long does Botox last?", a: "Usually 3-4 months." },
    { q: "What are dermal fillers?", a: "Substances injected beneath the skin to restore lost volume, smooth lines, or enhance contours." },
    { q: "How long do fillers last?", a: "Depending on the type of filler and area injected, they can last 6-18 months." },
    { q: "What is the difference between Botox and fillers?", a: "Botox relaxes muscles that cause wrinkles; fillers plump up areas that have lost volume." },
    { q: "Can I use Vitamin C and Retinol together?", a: "It's best to use Vitamin C in the morning and Retinol at night to avoid irritation." },
    { q: "Do I need a toner?", a: "Toners are optional. Modern cleansers are pH-balanced, but toners can provide extra hydration or gentle exfoliation." },
    { q: "What causes dry skin?", a: "Weather, harsh soaps, hot showers, aging, and certain skin conditions." },
    { q: "What is the best moisturizer for dry skin?", a: "Look for thicker creams containing ceramides, hyaluronic acid, and glycerin." },
    { q: "How can I treat oily skin?", a: "Use a gentle foaming cleanser, a lightweight oil-free moisturizer, and ingredients like niacinamide or salicylic acid." },
    // Partition 6
    { q: "Why is my skin so oily even when I wash it?", a: "Over-washing can strip the skin, causing it to produce even more oil to compensate." },
    { q: "What is combination skin?", a: "Having oily areas (usually the T-zone: forehead, nose, chin) and dry or normal areas (cheeks)." },
    { q: "How should I treat combination skin?", a: "You may need to use different products on different areas, or look for balancing products." },
    { q: "What are ceramides?", a: "Lipids that make up a significant portion of the skin barrier, helping retain moisture." },
    { q: "What are peptides?", a: "Short chains of amino acids that act as building blocks for proteins like collagen and elastin." },
    { q: "What is the difference between a lotion and a cream?", a: "Lotions have higher water content and are lighter; creams are thicker and more moisturizing." },
    { q: "Is it safe to use skincare products during pregnancy?", a: "Many are, but some (like retinoids and high-dose salicylic acid) should be avoided. Always consult a doctor." },
    { q: "Can I get treatments while pregnant?", a: "Some treatments are safe, but things like chemical peels, Botox, and lasers are generally avoided." },
    { q: "What is a hydrojelly mask?", a: "A peel-off mask that creates a vacuum-like seal to push hydration and active ingredients deep into the skin." },
    { q: "How do I prevent neck wrinkles?", a: "Extend your facial skincare routine (including sunscreen) down to your neck and chest." },
    // Partition 7
    { q: "What causes cellulite?", a: "Genetics, hormones, diet, and lifestyle. It's structural, where fat pushes through connective tissue." },
    { q: "Can skincare products cure cellulite?", a: "No, but some creams with caffeine or retinol can temporarily improve the appearance." },
    { q: "What are stretch marks?", a: "Scars that occur when the skin stretches or shrinks quickly." },
    { q: "Can stretch marks be removed?", a: "They can't be completely removed, but treatments like microneedling, lasers, and retinoids can fade them." },
    { q: "How can I treat keratosis pilaris (strawberry legs/arms)?", a: "Use chemical exfoliants (like lactic acid) and heavy moisturizers regularly." },
    { q: "What is the best way to remove makeup?", a: "Use a cleansing balm, oil, or micellar water, followed by a regular cleanser (double cleansing)." },
    { q: "Can makeup cause acne?", a: "Yes, especially if it's comedogenic (pore-clogging) or if it isn't removed properly." },
    { q: "How often should I clean my makeup brushes?", a: "Ideally once a week to prevent bacteria buildup." },
    { q: "What is SPF?", a: "Sun Protection Factor, indicating how well a sunscreen protects against UVB rays." },
    { q: "Is SPF 30 enough?", a: "Dermatologists generally recommend SPF 30 or higher for daily use." },
    // Partition 8
    { q: "What is the difference between UVA and UVB rays?", a: "UVA causes aging; UVB causes burning. You need broad-spectrum sunscreen for both." },
    { q: "Do people with dark skin need sunscreen?", a: "Yes, everyone needs sunscreen. Dark skin can still burn, age prematurely, and develop skin cancer." },
    { q: "What is melasma?", a: "A condition causing brown or gray-brown patches on the face, often triggered by hormones and sun exposure." },
    { q: "How is melasma treated?", a: "Strict sun protection, topical lighteners (like hydroquinone), chemical peels, and sometimes lasers." },
    { q: "Are face rollers effective?", a: "They can temporarily reduce puffiness by aiding lymphatic drainage, but they don't have long-term anti-aging effects." },
    { q: "What does squalane do?", a: "It's a lightweight, non-comedogenic oil that mimics skin's natural sebum to hydrate and lock in moisture." },
    { q: "How can I soothe sunburned skin?", a: "Use aloe vera, take cool showers, apply hydrocortisone cream, and moisturize well." },
    { q: "Can smoking affect my skin?", a: "Yes, smoking causes premature aging, deep wrinkles, and a dull complexion." },
    { q: "Why do I need a consultation before treatment?", a: "To assess your skin type, medical history, and goals, ensuring we choose the safest and most effective treatment." },
    { q: "How can I book an appointment?", a: "You can book directly through our website, or by clicking the Call or WhatsApp buttons below!" }
];

let currentPartition = 0;
const partitionSize = 10;

function createChatbotUI() {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chatbot-container';
    chatContainer.className = 'chatbot-closed';
    
    chatContainer.innerHTML = `
        <div id="chatbot-header">
            <span><i class="fa-solid fa-headset me-2"></i> Glow Assistant</span>
            <button id="chatbot-close"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <div id="chatbot-messages">
            <div class="bot-message">Hello! Welcome to Glow Skincare. How can I assist you today?</div>
            <div class="bot-message">Please select an option:</div>
        </div>
        <div id="chatbot-options">
            <button class="chat-option-btn" data-action="whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp Us</button>
            <button class="chat-option-btn" data-action="call"><i class="fa-solid fa-phone"></i> Call Us</button>
            <button class="chat-option-btn" data-action="appointment"><i class="fa-regular fa-calendar-check"></i> Book Appointment</button>
            <button class="chat-option-btn" data-action="more"><i class="fa-solid fa-list-ul"></i> More (Skincare FAQs)</button>
        </div>
        <div id="chatbot-input-area" style="display:none;">
            <input type="text" id="chatbot-input" placeholder="Type your question..." disabled>
            <button id="chatbot-send" disabled><i class="fa-solid fa-paper-plane"></i></button>
        </div>
    `;

    document.body.appendChild(chatContainer);

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'chatbot-toggle';
    toggleBtn.innerHTML = '<i class="fa-solid fa-message"></i>';
    document.body.appendChild(toggleBtn);

    const fabContainer = document.createElement('div');
    fabContainer.id = 'fab-container';
    const waMessage = encodeURIComponent("Hello Glow Skincare! 🌿 I was browsing your website and would love to get more information about your treatments. Can you help me?");
    fabContainer.innerHTML = `
        <a href="tel:8320852144" class="fab-btn fab-call" title="Call Us"><i class="fa-solid fa-phone"></i></a>
        <a href="https://wa.me/918320852144?text=${waMessage}" class="fab-btn fab-whatsapp" target="_blank" title="WhatsApp Us"><i class="fa-brands fa-whatsapp"></i></a>
    `;
    document.body.appendChild(fabContainer);

    attachChatEventListeners();
}

function attachChatEventListeners() {
    const toggleBtn = document.getElementById('chatbot-toggle');
    const closeBtn = document.getElementById('chatbot-close');
    const container = document.getElementById('chatbot-container');
    const optionsContainer = document.getElementById('chatbot-options');
    const messagesContainer = document.getElementById('chatbot-messages');

    toggleBtn.addEventListener('click', () => {
        container.classList.remove('chatbot-closed');
        container.classList.add('chatbot-open');
        toggleBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        container.classList.remove('chatbot-open');
        container.classList.add('chatbot-closed');
        toggleBtn.style.display = 'flex';
    });

    optionsContainer.addEventListener('click', (e) => {
        if(e.target.closest('.chat-option-btn')) {
            const btn = e.target.closest('.chat-option-btn');
            const action = btn.getAttribute('data-action');
            handleAction(action, btn.innerText);
        }
    });
}

function addMessage(text, isUser = false) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = isUser ? 'user-message' : 'bot-message';
    msgDiv.innerHTML = text;
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleAction(action, text) {
    addMessage(text, true);
    
    setTimeout(() => {
        if (action === 'whatsapp') {
            addMessage("Connecting you to our WhatsApp...");
            const waMessage = encodeURIComponent("Hello Glow Skincare! 🌿 I am reaching out from your website and would like to ask a few questions.");
            window.open(`https://wa.me/918320852144?text=${waMessage}`, '_blank');
            showInitialOptions();
        } else if (action === 'call') {
            addMessage("Opening your dial pad...");
            window.location.href = 'tel:8320852144';
            showInitialOptions();
        } else if (action === 'appointment') {
            addMessage("Redirecting you to our booking page...");
            window.location.href = 'appointment.html';
        } else if (action === 'more') {
            currentPartition = 0;
            showFaqPartition();
        } else if (action === 'next_faq') {
            currentPartition++;
            if (currentPartition * partitionSize >= skincareQuestions.length) {
                currentPartition = 0;
            }
            showFaqPartition();
        } else if (action === 'back') {
            currentPartition = 0;
            showInitialOptions();
        } else if (action.startsWith('faq_')) {
            const index = parseInt(action.split('_')[1]);
            addMessage(skincareQuestions[index].a);
            // After answering, we do not re-render the FAQ options, so they can keep clicking other questions.
        }
    }, 500);
}

function showInitialOptions() {
    const optionsContainer = document.getElementById('chatbot-options');
    optionsContainer.innerHTML = `
        <button class="chat-option-btn" data-action="whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp Us</button>
        <button class="chat-option-btn" data-action="call"><i class="fa-solid fa-phone"></i> Call Us</button>
        <button class="chat-option-btn" data-action="appointment"><i class="fa-regular fa-calendar-check"></i> Book Appointment</button>
        <button class="chat-option-btn" data-action="more"><i class="fa-solid fa-list-ul"></i> More (Skincare FAQs)</button>
    `;
    addMessage("What else can I help you with?");
}

function showFaqPartition() {
    const optionsContainer = document.getElementById('chatbot-options');
    let html = '';
    
    const start = currentPartition * partitionSize;
    const end = Math.min(start + partitionSize, skincareQuestions.length);
    
    addMessage(`Here are some common questions (Part ${currentPartition + 1}):`);
    
    for (let i = start; i < end; i++) {
        html += `<button class="chat-option-btn" data-action="faq_${i}">${skincareQuestions[i].q}</button>`;
    }
    
    html += `<div class="d-flex justify-content-between mt-2 gap-2">`;
    html += `<button class="chat-option-btn w-50" style="background: var(--secondary-beige); color: var(--text-dark);" data-action="back">Back to Menu</button>`;
    
    if (end < skincareQuestions.length || currentPartition > 0) {
        html += `<button class="chat-option-btn w-50" style="background: var(--text-dark); color: white;" data-action="next_faq">Next <i class="fa-solid fa-arrow-right"></i></button>`;
    }
    html += `</div>`;
    
    optionsContainer.innerHTML = html;
}

// Initialize on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createChatbotUI);
} else {
    createChatbotUI();
}
