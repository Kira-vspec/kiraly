



//save dark selection
function getCookieValueByName(name) {
    var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
    return match ? match[2] : "";
}

//check if cookie is set
if (getCookieValueByName('theme') === 'dark')
    toggleTheme()

function toggleTheme() {


    document.body.classList.toggle('dark-mode');
    document.getElementById("nav_bar").classList.toggle('dark_nav')
    document.querySelectorAll("a").forEach(link => {
        link.classList.toggle("dark_link");
    });

    //dark mode for timeline
    document.querySelectorAll("div.content").forEach(div => {
        div.classList.toggle('timeline_content_dark')
    });
    document.querySelectorAll("div.timeline").forEach(div => {
        div.classList.toggle('timeline_dark')
    });
    document.querySelectorAll("div.container.right").forEach(div => {
        div.classList.toggle('timeline_Rarrow_dark')
    });
    document.querySelectorAll("div.container.left").forEach(div => {
        div.classList.toggle('timeline_Larrow_dark')
    });


    //changing the icon
    i = document.getElementById("icon_dark")
    if (i.classList == "fa fa-moon-o") {
        i.classList = "fa fa-sun-o"
        document.cookie = `theme=dark`

    }
    else {
        i.classList = "fa fa-moon-o"
        document.cookie = `theme=light`
    }

}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.querySelectorAll("a").forEach(link => {
        link.classList.remove("active");
    });
    document.getElementById(pageId).classList.add('active');
    document.getElementsByName(pageId)[0].classList.add('active')
}


function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}