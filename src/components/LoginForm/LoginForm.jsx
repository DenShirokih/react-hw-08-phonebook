import { Form, Input, BtnRegistr } from '../RegistrForm/RegistrForm.styled';
import { LoginWrapper } from './LoginForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux/es/exports';
import { setAuthToken, setUser } from 'redux/registeSlice';
import { useLoginUserMutation } from 'redux/userApi';
// ,
export const LoginForm = () => {
  const [login] = useLoginUserMutation();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const loginUser = async credentials => {
    try {
      if (credentials) {
        const { data } = await login({
          email: credentials.email,
          password: credentials.password,
        });
        reset();
        dispatch(setAuthToken(data.token));
        dispatch(setUser(data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginWrapper>
      <Form autoComplete="off" onSubmit={handleSubmit(data => loginUser(data))}>
        <label htmlFor="email"></label>
        <Input
          name="email"
          placeholder="email..."
          {...register('email', {
            register: true,
            required: 'This is required',
          })}
        />
        <label htmlFor="password"></label>
        <Input
          name="password"
          placeholder="password..."
          type="password"
          {...register('password', {
            register: true,
            required: 'This is required',
          })}
        />
        <BtnRegistr type="submit">Sign in</BtnRegistr>
      </Form>
    </LoginWrapper>
  );
};
