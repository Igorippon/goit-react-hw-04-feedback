import styled from 'styled-components';

export const List = styled.ul`
display: flex;
gap: 20px;
align-items: center;
justify-content:center;
margin-top: 20px;
`;

export const Btn = styled.button`
font-weight: 500;
font-size: 24px;
line-height: 1.11;
text-transform: capitalize;
padding: 8px;
cursor: pointer;
border-radius: 4px;
&:hover
 {
    color: var(--mien-title-color);
    background-color: rgba(229, 236, 231, 0.99);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
}
`;

