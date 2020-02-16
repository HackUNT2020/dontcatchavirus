import React from "react"
import "rbx/index.css"
import {
    Container,
    Hero,
    Section
} from "rbx"

class MainComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Section>
                    <Hero color="primary" size="fullheight-with-navbar">
                        <Hero.Head>
                            Hero Head
                    </Hero.Head>
                        <Hero.Body>
                            <Container>
                                Hero body
                             </Container>
                        </Hero.Body>
                    </Hero>
                </Section>
            </React.Fragment>
        )
    }
}
export default MainComponent