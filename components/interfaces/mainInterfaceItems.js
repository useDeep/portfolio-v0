import AboutMe from "../../app/markdown/aboutMe.mdx";
import Projects from "../../app/markdown/projects.mdx"
import Contact from "../../app/markdown/contact.mdx"
import Guide from "../../app/markdown/guide.mdx"
import RecycleBin from "../../app/markdown/recycleBin.mdx"
const memesFolder = require.context('../../public/memes', false);
const memesList = memesFolder.keys().map(img => img);

export const mainInterfaceItems = [
    {
        name: "My Computer",
        id: "myComputer",
        icon: "/windowsIcons/my-computer.svg",
        target: "Not Found",
        content: <Guide />,
    },
    {
        name: "Network Neighbourhood",
        id: "networkNeighbourhood",
        icon: "/windowsIcons/network-neighbourhood.svg",
        target: "Not Found",
        content: <Contact />,
    },
    {
        name: "Recycle Bin",
        id: "recycleBin",
        icon: "/windowsIcons/recycle-bin.svg",
        target: "Not Found",
        content: <RecycleBin />,
    },
    {
        name: "xxx vids",
        id: "xxxvids",
        icon: "/windowsIcons/ie.svg",
        target: "vids",
        content: "Press any key or I'll show your browser history to your parents",
    },
    {
        name: "Meme Vault",
        id: "memes",
        icon: "/windowsIcons/troll-face.png",
        target: "dank",
        content: memesList,
    },
    {
        name: "About Me",
        id: "aboutMe",
        icon: "/windowsIcons/builder.png",
        target: "Wordpad",
        content: <AboutMe />,
    },
    {
        name: "Projects",
        id: "projects",
        icon: "/windowsIcons/joystick.png",
        target: "Wordpad",
        content: <Projects />,
    },
    {
        name: "Talk to Me",
        id: "mail",
        icon: "/windowsIcons/chat.png",
        target: "Mail",
        content: "",
    },
    {
        name: "Download my résumé",
        id: "resume",
        icon: "/windowsIcons/resume.png",
        target: "system downloads",
        content: "",
    },

]