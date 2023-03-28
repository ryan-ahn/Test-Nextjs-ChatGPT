/**
 * Author : Ryan
 * Date : 2023-03-29
 * Desc : index
 */

import { useCallback } from 'react';
import styled from 'styled-components';
import { useStore } from '@lib/zustand/store';
import Step1 from './step1';
import Step2 from './step2';

export default function index() {
  const { step } = useStore();

  const renderStep = useCallback(() => {
    switch (step) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
    }
  }, [step]);

  return <Wrapper>{renderStep()}</Wrapper>;
}

const Wrapper = styled.div``;
