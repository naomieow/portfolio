const projects = [
    {
        "name": "Get Pricked!",
        "description": "Ever thought a block should damage you when it doesn't? Well, now it does!",
        "projectpage": "https://modrinth.com/datapack/get-pricked",
        "icon": "get-pricked/icon.webp"
    },
    {
        "name": "RPGTitles",
        "description": "Small, cosmetic datapack that adds titles to small things in the game!",
        "projectpage": "https://modrinth.com/datapack/rpgtitles",
        "icon": "rpgtitles/icon.webp"
    },
    {
        "name": "🚧 Voidborn",
        "description": "Coming soon!",
        "projectpage": "https://modrinth.com/mod/voidborn",
        "icon": "comingsoon.jpg"
    },
    {
        "name": "🚧 DevTools",
        "description": "Coming soon!",
        "projectpage": "https://modrinth.com/mod/devtools",
        "icon": "comingsoon.jpg"
    },
    {
        "name": "🚧 Mystcraft: Ages",
        "description": "Coming soon!",
        "projectpage": "https://modrinth.com/mod/mystcraft-ages",
        "icon": "comingsoon.jpg"
    },
]

const template = `
<a class="project" href="PROJREF">
    <img src="projects/PROJICO" width="128" height="128">
    <div>
        <h3>PROJNAME</h3>
        <p>PROJDESC</p>
    </div>
</a>
`;


window.onload = function() {
    projects.forEach(element => {
        document.getElementById("projectContainer").innerHTML += template.replace("PROJREF", element.projectpage).replace("PROJICO", element.icon).replace("PROJNAME", element.name).replace("PROJDESC", element.description);
        
    });
};