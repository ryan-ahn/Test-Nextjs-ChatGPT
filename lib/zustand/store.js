import axios from 'axios';
import { create } from 'zustand';

export const useStore = create(set => ({
  message: null,
  isLoading: false,
  isFetched: false,
  error: null,
  chatCompletionsApi: async data => {
    console.log(data);
    set(() => ({ isLoading: true }));
    try {
      const response = await axios.post(
        `https://api.openai.com/v1/chat/completions`,
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: '당신은 여행 일정에 맞게 여행 일정을 짜주는 도우미입니다.' },
            { role: 'system', content: '당신은 날짜 별로 여행 계획을 세워주는 도우미입니다.' },
            {
              role: 'user',
              content: `저는 ${data.country}의 ${data.city}로 여행을 떠납니다.`,
            },
            {
              role: 'user',
              content: `저는 ${data.schedule}의 기간 동안 여행을 합니다.`,
            },
            {
              role: 'assistant',
              content: `여행 계획을 자세하게 세워 줄 수 있겠어? 그리고 ${data.question}에 대해서도 알려줘.`,
            },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            Authorization: 'Bearer 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',
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
}));
