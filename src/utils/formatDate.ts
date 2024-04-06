import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { ptBR } from 'date-fns/locale';

export const getTimeDistanceToNow = (date: Date | string) => {
  const dateStr = date instanceof Date ? date.toISOString() : date;

  return formatDistanceToNow(dateStr, {
    locale: ptBR,
    addSuffix: true,
  });
};
