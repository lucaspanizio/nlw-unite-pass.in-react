import { getTimeDistanceToNow } from '@/utils/formatDate';
import api from '../api';

export interface IAttendees {
  attendees: [
    {
      id: string;
      name: string;
      email: string;
      createdAt: string;
      checkedInAt: string | null;
    },
  ];
  total: number;
  totalPages: number;
}

export const getAttendees = async (page: number, search: string | null) => {
  return api
    .get<IAttendees>('events/:eventId/attendees', {
      params: {
        pageIndex: page,
        query: search,
      },
    })
    .then(({ data }) => {
      const attendees = data.attendees.map((attendee) => {
        return {
          id: attendee.id,
          name: attendee.name,
          email: attendee.email.toLocaleLowerCase(),
          createdAt: getTimeDistanceToNow(attendee.createdAt),
          checkedInAt:
            attendee.checkedInAt && getTimeDistanceToNow(attendee.checkedInAt),
        };
      });

      return {
        attendees,
        total: data.total,
        totalPages: Math.ceil(data.total / 10) ?? 0,
      };
    });
};
