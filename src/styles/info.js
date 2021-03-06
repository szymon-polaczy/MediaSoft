import styled from 'styled-components'

export const BigInfo = styled.h2`
	text-align: center;
	font-size: 2.5rem;
	letter-spacing: .05rem;
	line-height: 120%;
	margin: 1rem .65rem 1.5rem .65rem;

	&::after {
		content: '';
		display: block;
		width: 4rem;
		height: 2px;
		background: #666;
		margin: .3rem auto 0 auto;
	}
`;

const BigInfoSide = styled(BigInfo)`
	&::after {
		width: 20rem;
		margin: unset;
		margin-top: .3rem;
	}

	@media (max-width: 1200px) {
		text-align: center;
		
		&::after {
			margin: 0 auto;
		}
	}

	@media (max-width: 450px) {
		&::after {
			width: 4rem;
		}
	}
`

export const BigInfoRight = styled(BigInfoSide)`
	text-align: right;

	&::after {
		margin-left: auto;
        background: #45B649;
	}
`;

export const BigInfoLeft = styled(BigInfoSide)`
	text-align: left;

	&::after {
		margin-right: auto;
        background: #B06AB3;
	}
`;

export const SmallInfo = styled.small`
	line-height: 165%;
	text-align: center;
	color: #555;
	letter-spacing: .04rem;
	display: block;
	font-size: 1.2rem;
	padding: 0 .65rem;
`;