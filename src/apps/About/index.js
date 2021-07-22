import Window from "../../components/Window";

export default function About() {
    return (
        <Window title="About" dark={false} titleBarShown={true}>
            <h2 className="text-xl font-bold">What's this about?</h2>
            <br />
            <p>
                You may be wondering <span className="italic">why</span> this
                project exists, and you are completely valid in thinking this
                way.
            </p>
            <br />
            <p>
                There isn't much value to be had here, other than to make a
                project that not only looks beautiful, but explores what can be
                done in the web browser. So far, the functionality is fairly
                limited, though that will improve over time, as I am able to
                create better methods for making "applications" easier to
                create. For now, enjoy perusing the site, and feel free to{" "}
                <a href="mailto:me@ethanling.com">email me</a> with any and all
                suggestions you may have. You can also find the GitHub repo{" "}
                <a href="https://github.com/ethanling/browser-os">here</a> and
                use issues to make requests. 
            </p>
            <br />
            <p>
                Feel free to check out my other projects over at{" "}
                <a href="https://ethanling.com/">ethanling.com</a>. Enjoy!
            </p>
            <br />
            <p>- Ethan</p>
        </Window>
    );
}
