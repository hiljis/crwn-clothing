import styled from 'styled-components';
import {
	BaseButton,
	GoogleSignInButton,
	InvertedButton,
} from '../button/button.styles';

export const Header = styled.h2`
	margin-top: 10px 0;
`;

export const ButtonsAltContainer = styled.div`
	display: flex;
	gap: 10px;

	${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
		flex-grow: 1;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
`;
