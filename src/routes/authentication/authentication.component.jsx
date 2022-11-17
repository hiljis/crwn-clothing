import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AuthenticationPage } from './authentication.styles.jsx';

const Authentication = () => {
	return (
		<AuthenticationPage>
			<SignInForm />
			<SignUpForm />
		</AuthenticationPage>
	);
};

export default Authentication;
