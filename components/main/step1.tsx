/**
 * Author : Ryan
 * Date : 2023-03-29
 * Desc : index
 */

import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStore } from '@lib/zustand/store';
import LoadingSpinner from '@components/common/Spinner';

export default function index() {
  const {
    message,
    relatedMessage,
    isLoading,
    isRelatedLoading,
    setStep,
    answerApi,
    relatedQuestionApi,
  } = useStore();
  const [input, setInput] = useState();

  const onClickFirstSearch = useCallback(() => {
    answerApi({ input });
    relatedQuestionApi({ input });
  }, [input]);

  useEffect(() => {
    if (message !== null && relatedMessage !== null && !isLoading && !isRelatedLoading) {
      setStep(1);
    }
  }, [message, relatedMessage, isLoading, isRelatedLoading]);

  return (
    <Wrapper>
      <TitleBox>
        <h1>Prompty</h1>
        <p>Chain of knowledge service</p>
      </TitleBox>
      <SearchBox>
        <input
          placeholder="What are your interests?"
          onChange={(e: any) => setInput(e.target.value)}
        />
        <button onClick={onClickFirstSearch}>Confirm</button>
        {isLoading ? (
          <div style={{ position: 'absolute', bottom: '-80px' }}>
            <LoadingSpinner />
          </div>
        ) : null}
      </SearchBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  ${({ theme }) => theme.boxSet('100%', '100vh', '0px')};
`;

const TitleBox = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  & > h1 {
    ${({ theme }) => theme.fontSet(70, 700, 50)};
  }
  & > p {
    margin-top: 7px;
    ${({ theme }) => theme.fontSet(20, 300, 30)};
  }
`;

const SearchBox = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  margin-top: 40px;
  & > input {
    ${({ theme }) => theme.boxSet('350px', '50px', '25px')};
    padding: 15px;
    border: 1px solid #909090;
  }
  & > button {
    position: absolute;
    bottom: 0;
    right: 0;
    ${({ theme }) => theme.boxSet('100px', '50px', '25px')};
    ${({ theme }) => theme.colorSet('white', '#404040')};
    margin-left: 5px;
    cursor: pointer;
  }
`;
