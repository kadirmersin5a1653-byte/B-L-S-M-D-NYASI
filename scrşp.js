var siteThemeBtn = document.getElementById('theme-toggle');
var siteThemeIcon = document.getElementById('theme-icon');
var siteBody = document.body;

if (localStorage.getItem('site_theme') === 'light') {
    siteBody.classList.add('light-mode');
    if (siteThemeIcon) {
        siteThemeIcon.classList.remove('fa-sun');
        siteThemeIcon.classList.add('fa-moon');
    }
}

if (siteThemeBtn) {
    siteThemeBtn.addEventListener('click', function() {
        siteBody.classList.toggle('light-mode');
        
        if (siteBody.classList.contains('light-mode')) {
            if (siteThemeIcon) {
                siteThemeIcon.classList.remove('fa-sun');
                siteThemeIcon.classList.add('fa-moon');
            }
            localStorage.setItem('site_theme', 'light');
        } else {
            if (siteThemeIcon) {
                siteThemeIcon.classList.remove('fa-moon');
                siteThemeIcon.classList.add('fa-sun');
            }
            localStorage.setItem('site_theme', 'dark');
        }
    });
}