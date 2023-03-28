/**
 * Author : Ryan
 * Date : 2023-03-22
 * Desc : index
 */

import { useEffect } from 'react';
import styled from 'styled-components';
import { useStore } from '@lib/zustand/store';
import LoadingSpinner from '@components/common/Spinner';

export default function Mainindex() {
  const {
    message,
    message2,
    setMessage,
    relatedMessage,
    relatedMessage2,
    answerApi2,
    relatedQuestionApi2,
    isLoading,
    isRelatedLoading,
  } = useStore();

  function convertEmToDiv(text, handleClick) {
    const htmlParts = text.split(/(<em>|<\/em>)/);
    const jsx = htmlParts.map((part, index) => {
      if (part === '<em>') {
        return (
          <span className="click" key={index} onClick={handleClick}>
            {htmlParts[index + 1] + ' '}
          </span>
        );
      }
      if (part === '</em>') {
        return null;
      }
      return <span key={index}>{part}</span>;
    });
    return <div>{jsx}</div>;
  }

  function handleClick(event) {
    const input = event.target.innerText;
    answerApi2({ input });
    relatedQuestionApi2({ input });
  }

  useEffect(() => {
    const textWithDivTags = convertEmToDiv(message, handleClick);
    setMessage(textWithDivTags);
  }, []);

  return (
    <Wrapper>
      <ContentBlock>
        <AnswerBox>
          <FirstMessage>{message}</FirstMessage>
          <FirstRelatedMessage>
            {relatedMessage !== null &&
              relatedMessage.split('\n').map((line, index) => (
                <div key={index} onClick={handleClick}>
                  {line}
                </div>
              ))}
          </FirstRelatedMessage>
        </AnswerBox>
        {message2 !== null && relatedMessage2 !== null ? (
          <AnswerBox>
            <FirstMessage dangerouslySetInnerHTML={{ __html: message2 }} />
            <FirstRelatedMessage>
              {relatedMessage2 !== null &&
                relatedMessage2.split('\n').map((line, index) => <div key={index}>{line}</div>)}
            </FirstRelatedMessage>
          </AnswerBox>
        ) : isLoading || isRelatedLoading ? (
          <div style={{ position: 'absolute', bottom: '-80px' }}>
            <LoadingSpinner />
          </div>
        ) : null}
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  ${({ theme }) => theme.boxSet('100vw', '100vh', '0px')};
`;

const ContentBlock = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('flex-start', 'center', 'column')};
  width: 1050px;
  gap: 20px;
`;

const AnswerBox = styled.div`
  ${({ theme }) => theme.boxSet('800px', 'auto', '20px')};
  border: 1px solid #404040;
  overflow: hidden;
`;

const FirstMessage = styled.div`
  padding: 20px;
  ${({ theme }) => theme.fontSet(14, 400, 24)};
  .click {
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }
`;

const FirstRelatedMessage = styled.div`
  padding: 20px;
  ${({ theme }) => theme.colorSet('white', '#404040')};
  & > div {
    ${({ theme }) => theme.fontSet(14, 400, 24)};
    cursor: pointer;
    :hover {
      color: #fff050;
    }
  }
`;
