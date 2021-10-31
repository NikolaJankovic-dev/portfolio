import React from "react";
import style from "./Projects.module.css"

const Projects = () => {
    return (
        <div>
            <h4>PROJECTS</h4>
            <div>Check out projects I've been working on. Unfortunately, if you want to see JobBook, you'll have to download a few things, but don't worry, you can see how to do it on my GitHub page.
                <ul>
                    <li><a href="https://job-book.vercel.app/" target="_blank" className={style.link}>JobBook</a></li>
                    <li><a href="https://nikolatvmaze-850rvk16e-nikolajankovic-dev.vercel.app/" target="_blank" className={style.link}>TvMaze</a></li>
                    <li><a href="https://rick-morty-ashen.vercel.app/index.html" target="_blank" className={style.link}>Rick &amp; Morty Wiki</a></li>
                    <li><a href="https://peoplebit.vercel.app/home" target="_blank" className={style.link}>BitPeople</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Projects