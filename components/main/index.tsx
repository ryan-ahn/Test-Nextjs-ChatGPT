/**
 * Author : Ryan
 * Date : 2023-03-22
 * Desc : index
 */

import { useState } from 'react';
import styled from 'styled-components';
import { TEXT } from '@containers/text';
import { useStore } from '@lib/zustand/store';
import LoadingSpinner from '@components/common/Spinner';

export default function Mainindex() {
  const { message, isLoading, chatCompletionsApi } = useStore();
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [schedule, setSchedule] = useState('');
  const [question, setQuestion] = useState('');

  const onClickAsyncAction = () => {
    chatCompletionsApi({
      country,
      city,
      schedule,
      question,
    });
  };

  return (
    <Wrapper>
      <TitleBlock>
        <TitleText>{TEXT.main.title}</TitleText>
        <DescriptionText>{TEXT.main.description}</DescriptionText>
      </TitleBlock>
      <ContentBlock>
        <SideBar>
          <InputBlock>
            <LabelText>{TEXT.main.country}</LabelText>
            <InputBox onChange={e => setCountry(e.target.value)} />
          </InputBlock>
          <InputBlock>
            <LabelText>{TEXT.main.city}</LabelText>
            <InputBox onChange={e => setCity(e.target.value)} />
          </InputBlock>
          <InputBlock>
            <LabelText>{TEXT.main.schedule}</LabelText>
            <InputBox onChange={e => setSchedule(e.target.value)} />
          </InputBlock>
          <InputBlock>
            <LabelText>{TEXT.main.question}</LabelText>
            <InputBox onChange={e => setQuestion(e.target.value)} />
          </InputBlock>
          <ButtonBlock onClick={onClickAsyncAction}>
            <ButtonText>{TEXT.main.button}</ButtonText>
          </ButtonBlock>
        </SideBar>
        <GptArea>
          {isLoading ? (
            <LoadingWrapper>
              <LoadingSpinner />
            </LoadingWrapper>
          ) : (
            message
          )}
        </GptArea>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  ${({ theme }) => theme.boxSet('100vw', '100vh', '0px')};
  ${({ theme }) => theme.colorSet('white', 'black')};
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'flex-start', 'row')};
  width: 1050px;
`;

const SideBar = styled.div``;

const TitleBlock = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  ${({ theme }) => theme.boxSet('100%', 'auto', '0px')};
  margin-bottom: 40px;
`;

const TitleText = styled.h1`
  ${({ theme }) => theme.fontSet(40, 500, 55)};
`;

const DescriptionText = styled.p`
  ${({ theme }) => theme.fontSet(15, 300, 25)};
`;

const InputBlock = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'flex-start', 'column')};
  ${({ theme }) => theme.boxSet('300px', '70px', '0px')};
  margin-bottom: 20px;
`;

const LabelText = styled.label`
  ${({ theme }) => theme.fontSet(16, 400, 20)};
`;

const InputBox = styled.input`
  ${({ theme }) => theme.boxSet('100%', '40px', '5px')};
  ${({ theme }) => theme.colorSet('black', 'white')};
  padding: 0 15px;
`;

const ButtonBlock = styled.button`
  ${({ theme }) => theme.boxSet('100%', '50px', '5px')};
  ${({ theme }) => theme.colorSet('white', '#202020')};
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const ButtonText = styled.p`
  ${({ theme }) => theme.fontSet(15, 400, 20)};
`;
const GptArea = styled.div`
  ${({ theme }) => theme.boxSet('700px', '60vh', '10px')};
  ${({ theme }) => theme.colorSet('black', 'white')};
  padding: 25px;
  ${({ theme }) => theme.fontSet(14, 400, 20)};
  white-space: pre-wrap;
`;

const LoadingWrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  ${({ theme }) => theme.boxSet('100%', '100%', '0px')};
`;
