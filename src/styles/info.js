import styled from 'styled-components'

export const BigInfo = styled.h2`
	text-align: center;
	font-size: 2.5rem;
	letter-spacing: .05rem;
	line-height: 120%;
	margin: 1rem 0 1.5rem 0;

	&::after {
		content: '';
		display: block;
		width: 4rem;
		height: 2px;
		background-color: #666;
		margin: .3rem auto 0 auto;
	}
`;

export const SmallInfo = styled.small`
	line-height: 165%;
	text-align: center;
	color: #555;
	letter-spacing: .04rem;
	display: block;
	font-size: 1.2rem;
`;