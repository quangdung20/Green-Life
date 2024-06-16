document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a.item_nav');
    console.log(links);
    // Khởi tạo trạng thái ban đầu khi tải trang
    initializeCurrentPage();

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
        const filePath = `app/${page}.html`;
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
        const homeLink = document.querySelector('.item_nav[data-page="home"]');
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

function toggleChatbox() {
    const chatbox = document.getElementById('chatbox');
    const chatboxIcon = document.getElementById('chatboxIcon');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'flex';
        chatboxIcon.style.display = 'none';
    } else {
        chatbox.style.display = 'none';
        chatboxIcon.style.display = 'block';
    }
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        setTimeout(() => {
            addMessage('Cảm ơn bạn đã gửi tin nhắn!', 'bot');
        }, 1000);
    }
}

function addMessage(text, sender) {
    const chatboxBody = document.getElementById('chatboxBody');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${sender}`;
    messageElement.textContent = text;
    chatboxBody.appendChild(messageElement);
    chatboxBody.scrollTop = chatboxBody.scrollHeight;
}

// click bar icon then show menu
function openNavBar() {
    const navbar = document.getElementById('header-bar');
    const menu = document.getElementById('menu-bar');
    // khi clic vao icon bar thi hien menu
    if (window.innerWidth <= 812) {
        if (navbar.style.display === '') {
            navbar.style.display = 'block';
            menu.style.display = 'none';
        } else {
            navbar.style.display = '';
            menu.style.display = 'block';
        }
    }
}
// click menu item then hide menu đối với màn hình max 812px
function closeNavBar() {
    const menu = document.getElementById('menu-bar');
    const menuBarItem = document.querySelectorAll('.menu-bar-item');

    // khi click vao item menu thi an menu
    if (window.innerWidth <= 812) {
        if (menu.style.display === 'block') {
            // click vao item menu thi an menu
            menuBarItem.forEach(item => {
                item.addEventListener('click', function () {
                    menu.style.display = 'none';
                });
            }
            );
        }
    }
}

// sau khi back page
