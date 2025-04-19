import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export function formatData(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}

export function formatDataNew(data) {
  return format(new Date(data), 'Pp');
}
