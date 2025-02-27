
navigation={
    "home": {
        sidebarText: "Home",
        href: "/Odyssey/"
    },
    "meet": {
        sidebarText: "Meet your Counselor",
        footerText: "Counselors",
        href: "#therapist"
    },
    "appointment": {
        sidebarText: "Take the next step",
        footerText: "Appointment",
        href: "Appointment.html"
    }
    
}

function addFooterNavigation() {
    const injectionPoint=document.getElementById("footNavInjection")
    var first=true
    if (injectionPoint!=null) {
        const div=document.createElement("div")
        div.setAttribute("class", "footNavigation")

        Object.keys(navigation).forEach(function(key) {
            if (key!="appointment") {
                if (first==false) {div.append("|")}
                else {first=false}

            
            
                const object=navigation[key]
                const anchor=document.createElement("a")
                const button=document.createElement("button")

                anchor.setAttribute("href", object.href)
                if (object.footerText!=undefined) {
                    button.innerText=object.footerText
                }
                else {
                    button.innerText=object.sidebarText
                }
                anchor.appendChild(button)
                div.appendChild(anchor)
            }

        })

        injectionPoint.appendChild(div)
    }
}

function fillSidebar() {
    const sidebar=document.getElementById("sidebar")
    if (sidebar!=null) {
        const containerDiv=document.createElement("div")
        containerDiv.setAttribute("class", "navItemContainer")
        Object.keys(navigation).forEach(function(key) {
            if (key=="appointment") { 
                const object=navigation[key]
                const button=document.createElement("button")
                button.setAttribute("class", "navigationButton")

                button.onclick=function() {openForm()}

                if (object.footerText!=undefined) {
                    button.innerText=object.footerText
                }
                else {
                    button.innerText=object.sidebarText
                }
                containerDiv.appendChild(button)
            }
            else {
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
            }
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