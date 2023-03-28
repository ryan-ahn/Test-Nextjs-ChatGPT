import axios from 'axios';
import { create } from 'zustand';

export const useStore = create(set => ({
  step: 0,
  message: null,
  message2: null,
  relatedMessage: null,
  relatedMessage2: null,
  isLoading: false,
  isRelatedLoading: false,
  isFetched: false,
  isRelatedFetched: false,
  error: null,
  setStep: payload => set(() => ({ step: payload })),
  setMessage: payload => set(() => ({ message: payload })),
  setMessage2: payload => set(() => ({ message2: payload })),
  answerApi: async data => {
    set(() => ({ isLoading: true }));
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: '당신은 내 질문에 답변을 해주는 도우미입니다.',
            },
            {
              role: 'user',
              content: `${data.input}. 중요한 단어, 어려운 단어, 핵심 문장은 <em></em>태그 안에 넣어주세요.(개행문자\n은 한개만 사용해주세요.)`,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.CHAT_GPT_KEY}`,
          },
        },
      );
      set(() => ({
        message: response.data.choices[0].message.content,
        isLoading: false,
        isFetched: true,
      }));
    } catch (e) {
      set(() => ({
        error: e.response.data.Message,
        isLoading: false,
        isFetched: false,
      }));
    }
  },

  relatedQuestionApi: async data => {
    set(() => ({ isRelatedLoading: true }));
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: '당신은 내 질문에 답변을 해주는 도우미입니다.',
            },
            {
              role: 'user',
              content: `${data.input}와 관련된 추가로 생각해볼 수 있는 질문 세가지만 보여주세요.(개행문자\n은 한개만 사용해주세요.)`,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.CHAT_GPT_KEY}`,
          },
        },
      );
      set(() => ({
        relatedMessage: response.data.choices[0].message.content,
        isRelatedLoading: false,
        isRelatedFetched: true,
      }));
    } catch (e) {
      set(() => ({
        error: e.response.data.Message,
        isRelatedLoading: false,
        isRelatedFetched: false,
      }));
    }
  },
  answerApi2: async data => {
    set(() => ({ isLoading: true }));
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: '당신은 내 질문에 답변을 해주는 도우미입니다.',
            },
            {
              role: 'user',
              content: `${data.input}에 대해 알려주세요. 중요한 단어, 어려운 단어, 핵심 문장은 <em></em>태그 안에 넣어주세요.(개행문자\n은 한개만 사용해주세요.)`,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.CHAT_GPT_KEY}`,
          },
        },
      );
      set(() => ({
        message2: response.data.choices[0].message.content,
        isLoading: false,
        isFetched: true,
      }));
    } catch (e) {
      set(() => ({
        error: e.response.data.Message,
        isLoading: false,
        isFetched: false,
      }));
    }
  },

  relatedQuestionApi2: async data => {
    set(() => ({ isRelatedLoading: true }));
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: '당신은 내 질문에 답변을 해주는 도우미입니다.',
            },
            {
              role: 'user',
              content: `저는 ${data.input}와 비슷한 추가로 생각해볼 수 있는 질문 세가지만 보여주세요.(개행문자\n은 한개만 사용해주세요.)`,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.CHAT_GPT_KEY}`,
          },
        },
      );
      set(() => ({
        relatedMessage2: response.data.choices[0].message.content,
        isRelatedLoading: false,
        isRelatedFetched: true,
      }));
    } catch (e) {
      set(() => ({
        error: e.response.data.Message,
        isRelatedLoading: false,
        isRelatedFetched: false,
      }));
    }
  },
}));
