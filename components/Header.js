import Link from 'next/link'

export default function Header() {
    return (
        <header className='top center sticker glassy'>
            <div >
                <h1>
                    DeiAsPie's Recommended Courses 🙂
                </h1>

                <section class="tabs">
                    <a href="https://open.lbry.com/@DeiAsPieBlog:f">
                        <section class="center button">
                            <strong>Tech Blog 📜 →</strong>
                        </section>
                    </a>

                    <a href="https://open.lbry.com/@DeiAsPie:1">
                        <section class="center button">
                            <strong>Tech Videos 🎬 →</strong>
                        </section>
                    </a>

                    <a href="https://open.lbry.com/@DeiAsPieMindSpace:7">
                        <section class="center button">
                            <strong>Mind Space 🧠 →</strong>
                        </section>
                    </a>

                    <a href="https://github.com/DeiAsPie">
                        <section class="center button">
                            <strong>GitHub 🐙 →</strong>
                        </section>
                    </a>
                </section>
            </div>
        </header>
    )
}
