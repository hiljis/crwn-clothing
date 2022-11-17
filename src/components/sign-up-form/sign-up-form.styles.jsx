import styled from 'styled-components';
import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from '../button/button.styles';

export const Header = styled.h2`
	margin-top: 10px 0;
`;

export const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	${BaseButton},
	${GoogleSignInButton},
	${InvertedButton} {
		width: 100%;
	}
`;
