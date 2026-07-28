

    // ---------- Blog page specific data and functions ----------
    const blogPosts = [
        { id:1, cat:"AI Tips", title:"How to make your AI plan taste exactly like your mom’s dal", excerpt:"One simple prompt changed everything. Real Indian flavors in 60 seconds.", img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600", author:"Sneha Kapoor", location:"Delhi", date:"2 days ago", read:"6 min", emoji:"🍛" },
        { id:2, cat:"Zero Waste", title:"Turn yesterday’s roti into today’s best breakfast (3 recipes)", excerpt:"Zero food waste challenge winners share their secret recipes.", img:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600", author:"Rahul Verma", location:"Hyderabad", date:"5 days ago", read:"4 min", emoji:"🥞" },
        { id:3, cat:"Recipes", title:"The 15-minute paneer butter masala that beats restaurant quality", excerpt:"Tested by 4,291 PlatePal members. You won’t believe how easy it is.", img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600", author:"Priya Malhotra", location:"Mumbai", date:"1 week ago", read:"8 min", emoji:"🍛" },
        { id:4, cat:"Community Stories", title:"How our Bengaluru family of 6 eats for under ₹800 a day", excerpt:"Real story from a PlatePal Family Plan member who now cooks together every night.", img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600", author:"Arjun Rao", location:"Bengaluru", date:"1 week ago", read:"9 min", emoji:"👨‍👩‍👧‍👦" },
        { id:5, cat:"Quick Meals", title:"7 one-pot meals ready in under 20 minutes for busy weeknights", excerpt:"No fancy ingredients. Just pure comfort and speed.", img:"https://images.unsplash.com/photo-1600585154340-be6161a56a9c?w=600", author:"NewDadRahul", location:"Hyderabad", date:"2 weeks ago", read:"5 min", emoji:"🍲" },
        { id:6, cat:"Budget Cooking", title:"₹49 per plate meals that actually taste expensive", excerpt:"Smart swaps and AI suggestions that cut your grocery bill in half.", img:"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600", author:"Meena Sharma", location:"Patna", date:"3 weeks ago", read:"7 min", emoji:"💰" }
    ];
    const categories = ["All","Recipes","AI Tips","Zero Waste","Indian Classics","Quick Meals","Community Stories","Budget Cooking"];

    function populateCategoryFilters() {
        let html = '';
        categories.forEach((cat, idx) => {
            const activeClass = idx === 0 ? 'active' : '';
            html += `<button class="category-pill ${activeClass}" onclick="filterCategory(this)">${cat}</button>`;
        });
        document.getElementById('categoryFilters').innerHTML = html;
    }
    function filterCategory(btn) {
        document.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderBlogGrid();
    }
    function renderBlogGrid() {
        let html = '';
        blogPosts.forEach(post => {
            html += `<div class="blog-card" onclick="viewBlogPost(${post.id})"><div class="relative"><img src="${post.img}" class="blog-card-img"><div class="badge-cat">${post.emoji} ${post.cat}</div></div><div class="card-content"><h4 style="font-size:1.2rem; font-weight:700;">${post.title}</h4><p style="color:#4b5563; margin-top:0.5rem;">${post.excerpt}</p><div style="display:flex; align-items:center; justify-content:space-between; margin-top:1.5rem;"><span style="font-size:0.7rem;">${post.date} • ${post.read}</span><div style="display:flex; align-items:center; gap:0.5rem;"><img src="https://picsum.photos/id/${post.id+60}/32/32" style="width:32px; height:32px; border-radius:1rem;"><div><div style="font-weight:500;">${post.author}</div><div style="font-size:0.7rem;">${post.location}</div></div></div></div></div></div>`;
        });
        document.getElementById('blogGrid').innerHTML = html;
    }
    function viewBlogPost(id) { alert(`📖 Opening full article: “${id===0?'AI replaced my Sunday meal prep':blogPosts[id-1]?.title}”\n\n(Real app would show detailed post with comments & related recipes)`); }
    function loadMorePosts() { alert("🎉 6 more stories loaded (demo)"); renderBlogGrid(); }
    function fakeSearch() { const q = prompt("🔍 What are you looking for?"); if(q) alert(`🔎 Found 14 results for “${q}”`); }

    function populatePopularTopics() {
        const topics = ["AI Meal Planning", "Jain Recipes", "Moms’ Secret Tips", "Sunday Batch Cooking", "Keto Indian", "Kids Lunchbox Ideas"];
        let html = '';
        topics.forEach(t => html += `<div onclick="alert('Showing all stories about ${t}')" style="background:rgba(255,255,255,0.1); padding:0.5rem 1.2rem; border-radius:2rem; cursor:pointer;">${t}</div>`);
        document.getElementById('popularTopics').innerHTML = html;
    }

    // Newsletter subscription (works for both header/footer and internal)
    function subscribeNewsletter() {
        const inputs = [document.getElementById('newsEmail'), document.getElementById('footerNewsEmail')];
        let email = '';
        inputs.forEach(inp => { if(inp && inp.value.trim()) email = inp.value; });
        if(email) {
            alert('🎉 Thank you! You’re now subscribed to weekly delicious recipes & blog updates.');
            inputs.forEach(inp => { if(inp) inp.value = ''; });
        } else {
            alert('Please enter your email ✨');
        }
    }

    // Planner modal functions
    function showPlannerModal() { document.getElementById('plannerModal').style.display = 'flex'; }
    function closePlannerModal() { document.getElementById('plannerModal').style.display = 'none'; }
    function genPlan() { closePlannerModal(); alert("✨ Your 5-day plan is ready! Check your email."); }

    // Slider
    const slider = document.getElementById('daysSlider');
    if(slider) slider.addEventListener('input', (e) => { document.getElementById('daysVal').innerText = e.target.value; });
    document.querySelectorAll('.plan-opt').forEach(btn => {
        btn.addEventListener('click', function() { document.querySelectorAll('.plan-opt').forEach(b=>b.classList.remove('active-plan')); this.classList.add('active-plan'); });
    });

    // Initialize everything
    populateCategoryFilters();
    renderBlogGrid();
    populatePopularTopics();
    

    document.querySelectorAll(".blog-card").forEach(card=>{
card.addEventListener("mousemove",e=>{
card.style.transform="translateY(-8px) scale(1.02)"
})
card.addEventListener("mouseleave",()=>{
card.style.transform="translateY(0)"
})
})