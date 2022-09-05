import { useForm } from 'react-hook-form';
import { setAuthToken, setUser } from 'redux/registeSlice';
import { useDispatch } from 'react-redux';
import { useCreateNewUserMutation } from 'redux/userApi';
import { ContainerForm, Form, Input, BtnRegistr } from './RegistrForm.styled';
export const RegistrForm = () => {
  const dispatch = useDispatch();
  const [createNewUser] = useCreateNewUserMutation();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addNewUser = async credentials => {
    try {
      if (credentials) {
        console.log();
        const { data } = await createNewUser({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        });

        reset();
        dispatch(setUser({ name: credentials.name, email: credentials.email }));
        dispatch(setAuthToken(data.token));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ContainerForm>
      <Form
        autoComplete="off"
        onSubmit={handleSubmit(data => addNewUser(data))}
      >
        <label htmlFor="name"></label>
        <Input
          name="name"
          placeholder="Name..."
          {...register('name', {
            register: true,
            required: 'This is required',
          })}
        />
        <label htmlFor="email"></label>
        <Input
          name="email"
          placeholder="Email..."
          {...register('email', {
            register: true,
            required: 'This is required',
          })}
        />
        <label htmlFor="password"></label>
        <Input
          name="password"
          placeholder="Password..."
          type="password"
          {...register('password', {
            register: true,
            required: 'This is required',
          })}
        />
        <BtnRegistr type="submit">Sign up</BtnRegistr>
      </Form>
    </ContainerForm>
  );
};
