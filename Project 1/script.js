document.addEventListener('DOMContentLoaded', () => {
    const moodForm = document.getElementById('mood-form');
    const moodInput = document.getElementById('mood-input');
    const suggestionsContainer = document.getElementById('movie-suggestions');
    const noResultsMessage = document.getElementById('no-results');

    // --- Mood to Genre Mapping ---
    // This object connects mood keywords to specific movie genres.
    const moodGenreMap = {
        'sad': ['Comedy', 'Family', 'Animation'],
        'unhappy': ['Comedy', 'Family', 'Animation', 'Music', 'Musical'],
        'down': ['Comedy', 'Family', 'Animation'],
        'happy': ['Action', 'Adventure', 'SciFi'],
        'joyful': ['Action', 'Adventure', 'Music', 'Musical'],
        'excited': ['Action', 'Thriller', 'SciFi', 'Fantasy'],
        'bored': ['Thriller', 'Mystery', 'Horror'],
        'dull': ['Thriller', 'Mystery', 'Horror'],
        'romantic': ['Romance', 'Comedy'],
        'love': ['Romance'],
        'adventurous': ['Adventure', 'Action'],
        'curious': ['Mystery', 'SciFi', 'Documentary'],
        'tense': ['Drama', 'War'],
        'angry': ['Comedy', 'Music', 'Musical', 'Family', 'Fantasy'],
        'good': ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'History', 'Musical', 'Music', 'Mystery', 'Romance', 'SciFi', 'Thriller', 'War', 'Western'],
    };

    let allMovies = [];

    // --- Fetch Movie Data ---
    // This function fetches the movie data from our JSON file.
    async function fetchMovies() {
        try {
            const response = await fetch('movies.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            allMovies = data.movies;
        } catch (error) {
            console.error("Could not fetch movie data:", error);
            suggestionsContainer.innerHTML = "<p>Sorry, we couldn't load the movie database.</p>";
        }
    }

    // --- Event Listener for Form Submission ---
    moodForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const mood = moodInput.value.trim().toLowerCase();
        if (mood) {
            generateSuggestions(mood);
        }
    });

    // --- Generate Movie Suggestions ---
    function generateSuggestions(mood) {
        // Find the matching genres for the entered mood
        const targetGenres = moodGenreMap[mood];

        if (!targetGenres) {
            displayNoResults();
            return;
        }

        // Filter the main movie list to get movies of the target genres
        let filteredMovies = allMovies.filter(movie =>
            targetGenres.some(genre => movie.genres.includes(genre))
        );

        if (filteredMovies.length === 0) {
            displayNoResults();
            return;
        }

        // Shuffle the filtered movies to get a random order
        let shuffledMovies = filteredMovies.sort(() => 0.5 - Math.random());

        // Decide on a random number of movies to show (4)
        let suggestionsCount = 4
        let selectedMovies = shuffledMovies.slice(0, suggestionsCount);

        displayMovies(selectedMovies);
    }

    // --- Display Movies on the Page ---
    function displayMovies(movies) {
        suggestionsContainer.innerHTML = '';
        noResultsMessage.style.display = 'none';

        movies.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <img src="${movie.posterUrl}" alt="${movie.title} Poster">
                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <p>${movie.synopsis}</p>
                    </div>
                </div>
            `;
            suggestionsContainer.innerHTML += movieCard;
        });
    }

    // --- Show the "No Results" message ---
    function displayNoResults() {
        suggestionsContainer.innerHTML = '';
        noResultsMessage.style.display = 'block';
    }

    // --- Initial call to fetch the movies when the page loads ---
    fetchMovies();
});

// p5.js code

const mySketch = (p) => {
    p.setup = () => {
        let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
        canvas.parent('canvas-container');
        p.noCursor();
    };

    p.draw = () => {
        p.clear();
        p.noStroke();
        p.fill(128, 0, 128);

        // ellipse
        p.ellipse(p.mouseX, p.mouseY, 30);
    };
};

let myp5 = new p5(mySketch);