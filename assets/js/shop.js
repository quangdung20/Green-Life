console.log(1234);


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a.btn-hover-group');
    console.log(links);
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            const page = event.target.getAttribute('data-page');
            console.log(page);
            loadPage(page);
        });
    });

    async function loadPage(page) {
        let content;
        const filePath = `app/products/${page}.html`;
        try {
            const response = await fetch(filePath);
            if (response.ok) {
                content = await response.text();
            } else {
                console.error('Could not load the page:', filePath);
                content = '<p>Error loading page.</p>';
            }
        } catch (error) {
            console.error('Error fetching the page:', error);
            content = '<p>Error loading page.</p>';
        }
        document.getElementById('main-content').innerHTML = content;
        updateCurrentPage(page);
    }

    function initializeCurrentPage() {
        // dao diện chính là home page
        // thực hiện gắn class active cho item_nav cho home page
        const homeLink = document.querySelector('.btn-hover-group[data-page="home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
        // Kiểm tra xem có hash không
        const hash = window.location.hash;
        if (hash) {
            const page = hash.slice(1);
            loadPage(page);
        }

    }

    function updateCurrentPage(page) {
        const currentLink = document.querySelector('.item_nav.current');
        if (currentLink) {
            currentLink.classList.remove('current');
        }
        const newCurrentLink = document.querySelector(`.item_nav[data-page="${page}"]`);
        if (newCurrentLink) {
            newCurrentLink.classList.add('current');
        }
        window.location.hash = page;
    }
    }
);