import fetcher from '@utils/fetcher';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router';
import useSWR from 'swr';
import { Container, LoginBox, LoginForm, LoginInputWrapper, SubmitInput } from './styles';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  const { data } = useSWR('http://localhost:3050/users', fetcher);
  console.log(data);

  if (data?.ok) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <LoginBox>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginInputWrapper>
            <input placeholder="이메일" {...register('userId', { required: true })} />
          </LoginInputWrapper>
          {errors.userId && <span>이메일을 입력해주세요.</span>}

          <LoginInputWrapper>
            <input placeholder="비밀번호" {...register('password', { required: true })} />
          </LoginInputWrapper>

          {errors.password && <span>비밀번호를 입력해주세요.</span>}

          <SubmitInput type="submit" value="로그인" />
        </LoginForm>
      </LoginBox>
    </Container>
  );
};

export default Login;
