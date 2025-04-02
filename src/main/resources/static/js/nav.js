document.addEventListener('DOMContentLoaded', function() {
    const userMenu = document.querySelector('.user-menu-container');
    const dropdown = document.querySelector('.user-dropdown');

    // 处理移动端触摸事件
    userMenu.addEventListener('touchstart', function(e) {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });

    // 点击页面其他区域关闭菜单
    document.addEventListener('click', function(e) {
        if (!userMenu.contains(e.target)) {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        }
    });

    // 处理菜单项点击
    dropdown.querySelectorAll('a, button').forEach(item => {
        item.addEventListener('click', () => {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
        });
    });
});

// 在浏览器控制台执行
console.log(document.styleSheets)
// 查找是否存在来自cdnjs.cloudflare.com的样式表

// 在控制台执行
document.querySelector('.fa-user-circle')
// 应返回 <i class="fas fa-user-circle user-icon"> 