
function toggleSidebar() {
    const sidebar=document.getElementById("sidebarDiv")
    const rect=sidebar.getBoundingClientRect()
    var toggle=""
    if (rect.left<0) {
        toggle="display"

    }
    else {
        toggle="hide"
    }
    sidebar.style.animation=toggle+"Sidebar 1s ease 0s 1 normal forwards"

}

function recolorMenuBars(bars) {
    const all=bars.getElementsByTagName("div")
    for (var i=0;i<all.length;i++) {
        all[i].style.backgroundColor="gray"
    }
}

function resetMenuBars(bars) {
    const all=bars.getElementsByTagName("div")
    for (var i=0;i<all.length;i++) {
        all[i].style.backgroundColor="black"
    }
}