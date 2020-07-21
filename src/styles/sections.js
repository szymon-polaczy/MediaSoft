import styled from 'styled-components'

export const SectionContainer = styled.section`
    margin-top: 5rem;
`;

export const SectionDoubleContainer = styled(SectionContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;

    section:not(.image-container) {
        padding: 0 2.5rem;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        ${props => props.textOnTheRight ? "grid-row: 1;": ""}

        img {
            width: 80%;
        }
    }

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;

        .image-container{
            grid-row: 1;
        }
    }

    @media (max-width: 600px) {
        section:not(.image-container) {
            padding: 0;
        }
    }
`