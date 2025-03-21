import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";
import {Container} from "../../components/Container.tsx";
import {MenuContact} from "../../components/menu/MenuContact.tsx";
import {HeaderMenu} from "./headerMenu/HeaderMenu.tsx";


export const items = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact',]

// export const icons = [
//     { iconId: 'github-contacts' },
//     { iconId: 'linkedin' },
//     { iconId: 'telegram' },
// ]


export const Header = () => {
    return (
        <StyledHeader>
            <H1>Web Developer, React Developer, Frontend Developer, 2 years, Portfolio, UI/UX Designer, Web Development, Responsive Design, JavaScript, React, TypeScript, HTML, CSS, Bootstrap, Tailwind CSS, Figma, Adobe XD, User Experience, User Interface, Cross-Browser Compatibility, Version Control (Git), GitHub Pages Agile Methodologies, RESTful APIs, Mobile-First Design, Performance Optimization, SEO Best Practices, Accessibility (a11y), Wireframe, Prototyping, Graphic Design, Animation, CSS Preprocessors (Sass, Less), Frontend Frameworks</H1>
            <Container>
                <FlexWrapper justifyContent="space-between" alignItems={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    {/*<MenuContact menuIcons={icons}/>*/}
                    <MenuContact />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background: rgba(25, 25, 25, 0.9);
    padding: 40px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`

const H1 = styled.h1`
    display: none;
`

// TODO in h1 to do for SEO (web developer, react developer, frontend developer, 2 years...)
