let currentTab = 'results'; 
let favorites = JSON.parse(localStorage.getItem('jobFavorites')) || [];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const jobContainer = document.getElementById('jobContainer');
const favCountSpan = document.getElementById('favCount');

const APP_ID = 'e382f927'; 
const APP_KEY = '060407f8e1f5fafe6c516b265e20c830';
const COUNTRY = 'in'; 

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        if (currentTab !== 'results') switchTab('results');
        fetchJobs(query);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') searchBtn.click();
});

async function fetchJobs(query) {
    jobContainer.innerHTML = '<p class="placeholder-text">Searching latest jobs in India...</p>';

    if (APP_ID === 'YOUR_APP_ID_HERE' || APP_KEY === 'YOUR_APP_KEY_HERE') {
        alert("Please paste your Adzuna App ID and Key inside script.js!");
        fetchMockJobs(query);
        return;
    }

    try {
        const response = await fetch(`https://api.adzuna.com/v1/api/jobs/${COUNTRY}/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=10&what=${query}&content-type=application/json`);
        
        if (!response.ok) throw new Error('API Request Failed');
        
        const data = await response.json();
        
        const formattedJobs = data.results.map(job => ({
            id: job.id,
            title: job.title,
            company_name: job.company.display_name,
            location: job.location.display_name,
            url: job.redirect_url,
            description: job.description
        }));

        displayJobs(formattedJobs);

    } catch (error) {
        console.error("API Error:", error);
        jobContainer.innerHTML = '<p class="placeholder-text">API Error. Showing demo data instead.</p>';
        fetchMockJobs(query);
    }
}

function fetchMockJobs(query) {
    setTimeout(() => {
        const mockData = generateMockJobs(query);
        displayJobs(mockData);
    }, 800);
}

function displayJobs(jobs) {
    jobContainer.innerHTML = '';

    if (!jobs || jobs.length === 0) {
        jobContainer.innerHTML = '<p class="placeholder-text">No jobs found.</p>';
        return;
    }

    jobs.forEach(job => {
        const isFav = favorites.some(fav => fav.id === job.id);
        const cleanDesc = job.description ? job.description.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...' : '';

        const card = document.createElement('div');
        card.classList.add('job-card');
        
        card.innerHTML = `
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company_name}</div>
            <div class="job-location">📍 ${job.location}</div>
            <p style="font-size: 0.85rem; color: #9EB3D7; margin-bottom: 10px;">${cleanDesc}</p>
            <a href="${job.url}" target="_blank" class="job-link">View Job</a>
            <button class="save-btn ${isFav ? 'saved' : ''}" onclick="toggleFavorite('${job.id}')">
                ${isFav ? '❤️' : '🤍'}
            </button>
        `;
        
        card.dataset.job = JSON.stringify(job);
        jobContainer.appendChild(card);
    });
}

window.toggleFavorite = function(id) {
    const strId = String(id);
    const btn = document.querySelector(`button[onclick="toggleFavorite('${strId}')"]`);
    
    const existingIndex = favorites.findIndex(job => String(job.id) === strId);

    if (existingIndex !== -1) {
        favorites.splice(existingIndex, 1);
        if (btn) {
            btn.innerHTML = '🤍';
            btn.classList.remove('saved');
        }
        if(currentTab === 'favorites') displayJobs(favorites);
    } else {
        if (btn) {
            const card = btn.closest('.job-card');
            const jobData = JSON.parse(card.dataset.job);
            favorites.push(jobData);
            btn.innerHTML = '❤️';
            btn.classList.add('saved');
        }
    }

    localStorage.setItem('jobFavorites', JSON.stringify(favorites));
    updateFavCount();
};

window.switchTab = function(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    if (tab === 'results') {
        document.querySelector('button[onclick="switchTab(\'results\')"]').classList.add('active');
        jobContainer.innerHTML = '<p class="placeholder-text">Enter a keyword above to start searching.</p>';
    } else {
        document.querySelector('button[onclick="switchTab(\'favorites\')"]').classList.add('active');
        jobContainer.innerHTML = '';
        if(favorites.length === 0) {
            jobContainer.innerHTML = '<p class="placeholder-text">No favorites saved yet.</p>';
        } else {
            displayJobs(favorites);
        }
    }
};

function updateFavCount() {
    favCountSpan.textContent = favorites.length;
}

function generateMockJobs(query) {
    const q = query.charAt(0).toUpperCase() + query.slice(1);
    return [
        { id: 'm1', title: `Senior ${q} Dev`, company_name: "TechIndia", location: "Bangalore", url: "#", description: "Great opportunity..." },
        { id: 'm2', title: `${q} Intern`, company_name: "Pune StartUp", location: "Pune", url: "#", description: "Entry level role..." },
        { id: 'm3', title: `Lead ${q}`, company_name: "Gurugram Systems", location: "Gurugram", url: "#", description: "Lead a team..." }
    ];
}

updateFavCount();