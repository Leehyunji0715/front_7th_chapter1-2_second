import { Event, EventForm } from '../types';

/**
 * 반복 일정 생성 함수
 */
export const generateRecurringEvents = (
  _eventForm: EventForm
): Event[] => {
  // RED: 구현되지 않음
  return [];
};

/**
 * 반복 일정 검증 함수
 */
export const validateRecurringEvent = (
  _eventForm: EventForm
): string | null => {
  // RED: 구현되지 않음
  return null;
};

/**
 * 반복 일정인지 판별하는 함수
 */
export const isRecurringEvent = (_event: Event): boolean => {
  // RED: 구현되지 않음
  return false;
};

/**
 * 같은 반복 그룹의 모든 일정을 가져오는 함수
 */
export const getRecurringEventGroup = (
  _events: Event[],
  _repeatId: string
): Event[] => {
  // RED: 구현되지 않음
  return [];
};
