import React from "react";
import Project from "../Project";
import meowme from "../../assets/projects/meowme.png";
import socialsniffers from "../../assets/projects/socialsniffers.png";
import texteditor from "../../assets/projects/texteditor.png";

export default function Portfolio() {
    return (
        <>
        <div>
            <h2>Portfolio</h2>
        </div>

        <div>
            <Project
            id="1"
            name="Meow Me!"
            description="Meow Me delivers short cat videos and cute cat gifs to get you thru your day."
            github="https://github.com/cordovamonica/Meow-Me"
            deployed="https://aaronf87.github.io/Meow-Me/"
            img={meowme}
            />
            <div>
            <Project
            id="2"
            name="Social Sniffers"
            description="Social Sniffers is a social media app for doggy playdates. Users can enter information for their dog and find other dogs in their area to meet up with."
            github="https://github.com/cordovamonica/social-sniffers"
            deployed="https://infinite-crag-92779-668e16ae735a.herokuapp.com/"
            img={socialsniffers}
            />
            <Project
            id="3"
            name="Just Another Text Editor"
            description="Just Another Text Editor is a text editor that allows users to create, edit, and save text files. Also allows users to download app to their local machine"
            github="https://github.com/cordovamonica/pwa-text-editor"
            deployed="https://safe-fortress-11725-881c2621c3c1.herokuapp.com/"
            img={texteditor}
            />
        </div>
        </div>
        </>
    )
}