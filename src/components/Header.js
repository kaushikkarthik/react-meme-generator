export default function Header() {
    return (
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
                alt=""
            />
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">
                <a style={{"font-size":"1rem", "color":"white"}}
                    href="https://kaushikkarthik.dev">kaushikkarthik.dev</a>
            </h3>

        </header>
    )
}