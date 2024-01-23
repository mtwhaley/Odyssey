
navigation={
    "home": {
        sidebarText: "Home",
        href: "/"
    },
    "services": {
        sidebarText: "Services",
        href: "Services.html"
    },
    "meet": {
        sidebarText: "Meet your Counselor",
        href: "Meet.html"
    },
    "appointment": {
        sidebarText: "Request an Appointment",
        href: "Appointment.html"

    }
    
}
function fillSidebar() {
    const sidebar=document.getElementById("sidebar")
    if (sidebar!=null) {
        const containerDiv=document.createElement("div")
        containerDiv.setAttribute("class", "navItemContainer")
        Object.keys(navigation).forEach(function(key) {
            const object=navigation[key]
            
            const anchor=document.createElement("a")
            const div=document.createElement("div")
            const button=document.createElement("button")

            div.setAttribute("class", "navItem")
            anchor.setAttribute("href", object.href)
            button.setAttribute("class", "navigationButton")
            button.innerText=object.sidebarText
            
            anchor.appendChild(button)
            
            containerDiv.appendChild(anchor)
        })

        sidebar.appendChild(containerDiv)


    }
}



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

fillSidebar()