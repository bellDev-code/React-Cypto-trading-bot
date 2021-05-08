import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, SignUpBox, SignUpForm, SignUpInputWrapper, SubmitInput } from './styles';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <SignUpBox>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <SignUpInputWrapper>
            <input
              placeholder="이메일"
              {...register('email', {
                required: true,
                pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              })}
            />
          </SignUpInputWrapper>
          {errors.email && <span>이메일을 입력해주세요.</span>}

          <SignUpInputWrapper>
            <input
              placeholder="비밀번호"
              {...register('password', {
                required: true,
                pattern: /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/,
              })}
            />
          </SignUpInputWrapper>

          {errors.password && (
            <span>비밀번호를 입력해주세요. (숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력)</span>
          )}

          <SubmitInput type="submit" value="회원가입" />
        </SignUpForm>
      </SignUpBox>
    </Container>
  );
};

export default Signup;
