document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a.btn-hover-group'); // Lấy tất cả các thẻ <a> có class 'btn-hover-group'

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
            const page = this.getAttribute('data-page'); // Lấy giá trị của thuộc tính 'data-page'
            window.location.href = `/app/products/${page}.html`; // Thay đổi đường dẫn trang. Thay '/path-tuong-ung/' bằng đường dẫn thực tế bạn muốn sử dụng
        });
    });
});