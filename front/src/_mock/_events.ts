import { noCase } from 'change-case';
// _mock
import _mock from './_mock';
import { randomNumberRange, randomInArray } from './funcs';

// ----------------------------------------------------------------------

// export const _appRelated = ['Chrome', 'Drive', 'Dropbox', 'Evernote', 'Github'].map(
//   (appName, index) => ({
//     id: _mock.id(index),
//     name: appName,
//     system: (index === 2 && 'Windows') || (index === 4 && 'Windows') || 'Mac',
//     price: index === 0 || index === 2 || index === 4 ? 0 : _mock.number.price(index),
//     rating: _mock.number.rating(index),
//     review: randomNumberRange(999, 99999),
//     shortcut: `https://minimal-assets-api-dev.vercel.app/assets/icons/ic_${noCase(appName)}.svg`,
//   })
// );

// export const _appInstalled = ['de', 'en', 'fr', 'kr', 'us'].map((country, index) => ({
//   id: _mock.id(index),
//   name: ['Germany', 'England', 'France', 'Korean', 'USA'][index],
//   android: randomNumberRange(999, 99999),
//   windows: randomNumberRange(999, 99999),
//   apple: randomNumberRange(999, 99999),
//   flag: `/assets/icons/flags/ic_flag_${country}.svg`,
// }));

// export const _appAuthors = [...Array(3)].map((_, index) => ({
//   id: _mock.id(index),
//   name: _mock.name.fullName(index),
//   avatar: _mock.image.avatar(index),
//   favourite: randomNumberRange(9999, 19999),
// }));

// export const _appInvoices = [...Array(5)].map((_, index) => ({
//   id: `${Date.now() + index}`,
//   price: _mock.number.price(index),
//   category: randomInArray(['Android', 'Mac', 'Windows']),
//   status: randomInArray(['paid', 'out_of_date', 'in_progress']),
// }));

export const _eventFeatured = [...Array(3)].map((_, index) => ({
  id: _mock.id(index),
  title: ['Musical Festival: Infinite Summer', 'Disney Aniversary', 'Snowpeak Summer Camp'][index],
  description: _mock.text.title(index),
  image: _mock.image.feed(index),
}));

export const _eventList = [
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
    cover: _mock.text.eventCover(0),
    title: _mock.text.eventTitle(0),
    description: _mock.text.eventDescription(0),
    createdAt: '2022-09-04T08:14:33.509Z',
    view: 834,
    comment: 101,
    share: 70,
    favorite: 85,
    author: {
      name: 'Jayvion Simon',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
    },
    body: _mock.text.eventContent(0),
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      // {
      //   id: '26fc86ba-2141-4912-b8e8-481df68a286b',
      //   name: 'Jayvion Simon',
      //   avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      //   message: 'Quis veniam aut saepe aliquid nulla.',
      //   postedAt: '2022-09-03T07:14:33.508Z',
      //   users: [
      //     {
      //       id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      //       name: 'Jayvion Simon',
      //       avatarUrl:
      //         'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      //     },
      //     {
      //       id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      //       name: 'Lucian Obrien',
      //       avatarUrl:
      //         'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      //     },
      //     {
      //       id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      //       name: 'Deja Brady',
      //       avatarUrl:
      //         'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      //     },
      //   ],
      //   replyComment: [
      //     {
      //       id: '8c39518f-03a7-45db-b580-405397b7b9f8',
      //       userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
      //       message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
      //       postedAt: '2022-09-02T06:14:33.508Z',
      //     },
      //     {
      //       id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
      //       userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      //       message: 'Error ut sit vel molestias velit.',
      //       tagUser: 'Lucian Obrien',
      //       postedAt: '2022-09-01T05:14:33.508Z',
      //     },
      //     {
      //       id: '19da74d8-e530-46c7-aae4-b285c0934abf',
      //       userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
      //       message: 'Quo quia sit nihil nemo doloremque et.',
      //       postedAt: '2022-08-31T04:14:33.508Z',
      //     },
      //   ],
      // },
      // {
      //   id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
      //   name: 'Reece Chung',
      //   avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      //   message: 'Autem doloribus harum vero laborum.',
      //   postedAt: '2022-08-30T03:14:33.508Z',
      //   users: [
      //     {
      //       id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
      //       name: 'Lainey Davidson',
      //       avatarUrl:
      //         'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      //     },
      //     {
      //       id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
      //       name: 'Cristopher Cardenas',
      //       avatarUrl:
      //         'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      //     },
      //     {
      //       id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
      //       name: 'Melanie Noble',
      //       avatarUrl:
      //         'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      //     },
      //   ],
      //   replyComment: [
      //     {
      //       id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
      //       userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
      //       message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
      //       postedAt: '2022-08-29T02:14:33.508Z',
      //     },
      //     {
      //       id: '4759d551-2a5a-413a-97f8-956da63124e9',
      //       userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
      //       message: 'Voluptas sunt magni adipisci praesentium saepe.',
      //       postedAt: '2022-08-28T01:14:33.508Z',
      //     },
      //     {
      //       id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
      //       userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
      //       message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
      //       postedAt: '2022-08-27T00:14:33.508Z',
      //     },
      //   ],
      // },
      // {
      //   id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
      //   name: 'Chase Day',
      //   avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      //   message: 'Ipsum expedita reiciendis ut.',
      //   postedAt: '2022-08-25T23:14:33.508Z',
      //   users: [],
      //   replyComment: [],
      // },
      // {
      //   id: '226333fb-1585-453f-9aba-734ea67733a9',
      //   name: 'Shawn Manning',
      //   avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      //   message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
      //   postedAt: '2022-08-24T22:14:33.508Z',
      //   users: [],
      //   replyComment: [],
      // },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
    cover: _mock.text.eventCover(1),
    title: _mock.text.eventTitle(1),
    description: _mock.text.eventDescription(1),
    body: _mock.text.eventContent(1),
    createdAt: '2022-09-03T07:14:33.509Z',
    view: 150,
    comment: 50,
    share: 49,
    favorite: 59,
    author: {
      name: 'Lucian Obrien',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
    },
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
    cover: _mock.text.eventCover(2),
    title: _mock.text.eventTitle(2),
    description: _mock.text.eventDescription(2),
    body: _mock.text.eventContent(2),
    createdAt: '2022-09-02T06:14:33.509Z',
    view: 275,
    comment: 24,
    share: 52,
    favorite: 50,
    author: {
      name: 'Deja Brady',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
    },
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
    cover: _mock.text.eventCover(3),
    title: _mock.text.eventTitle(3),
    description: _mock.text.eventDescription(3),
    body: _mock.text.eventContent(3),
    createdAt: '2022-09-01T05:14:33.509Z',
    view: 980,
    comment: 13,
    share: 20,
    favorite: 30,
    author: {
      name: 'Harrison Stein',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
    },
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
    cover: _mock.text.eventCover(4),
    title: _mock.text.eventTitle(4),
    description: _mock.text.eventDescription(4),
    body: _mock.text.eventContent(4),
    createdAt: '2022-08-31T04:14:33.509Z',
    view: 106,
    comment: 67,
    share: 31,
    favorite: 69,
    author: {
      name: 'Reece Chung',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
    },
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_6.jpg',
    title: "Event Doesn't Have To Be Hard. Read These 7 Tips",
    description: 'Autem doloribus harum vero laborum.',
    createdAt: '2022-08-30T03:14:33.509Z',
    view: 879,
    comment: 83,
    share: 34,
    favorite: 69,
    author: {
      name: 'Lainey Davidson',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_7.jpg',
    title: 'Event Is Your Worst Enemy. 7 Ways To Defeat It',
    description: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
    createdAt: '2022-08-29T02:14:33.509Z',
    view: 530,
    comment: 72,
    share: 27,
    favorite: 50,
    author: {
      name: 'Cristopher Cardenas',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_8.jpg',
    title: 'Event On A Budget: 7 Tips From The Great Depression',
    description: 'Voluptas sunt magni adipisci praesentium saepe.',
    createdAt: '2022-08-28T01:14:33.509Z',
    view: 371,
    comment: 98,
    share: 64,
    favorite: 31,
    author: {
      name: 'Melanie Noble',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b9',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_9.jpg',
    title: 'Knowing These 7 Secrets Will Make Your Event Look Amazing',
    description: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
    createdAt: '2022-08-27T00:14:33.509Z',
    view: 7911,
    comment: 7316,
    share: 8621,
    favorite: 2176,
    author: {
      name: 'Chase Day',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b10',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_10.jpg',
    title: 'Master The Art Of Event With These 7 Tips',
    description: 'Ipsum expedita reiciendis ut.',
    createdAt: '2022-08-25T23:14:33.509Z',
    view: 6798,
    comment: 2421,
    share: 7113,
    favorite: 8727,
    author: {
      name: 'Shawn Manning',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b11',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_11.jpg',
    title: 'My Life, My Job, My Career: How 7 Simple Event Helped Me Succeed',
    description: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
    createdAt: '2022-08-24T22:14:33.509Z',
    view: 6677,
    comment: 5895,
    share: 7344,
    favorite: 2587,
    author: {
      name: 'Soren Durham',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b12',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_12.jpg',
    title: 'Take Advantage Of Event - Read These 7 Tips',
    description:
      'Reiciendis enim officiis cupiditate eaque distinctio laudantium modi similique consequatur.',
    createdAt: '2022-08-23T21:14:33.509Z',
    view: 1490,
    comment: 2815,
    share: 6333,
    favorite: 7421,
    author: {
      name: 'Cortez Herring',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b13',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_13.jpg',
    title: 'The Next 7 Things You Should Do For Event Success',
    description: 'Ab autem consequatur itaque mollitia ipsum cupiditate error repudiandae nobis.',
    createdAt: '2022-08-22T20:14:33.509Z',
    view: 3081,
    comment: 4151,
    share: 2983,
    favorite: 2171,
    author: {
      name: 'Brycen Jimenez',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b14',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_14.jpg',
    title: 'The Time Is Running Out! Think About These 7 Ways To Change Your Event',
    description:
      'Distinctio architecto debitis eligendi consequatur unde id modi accusantium possimus.',
    createdAt: '2022-08-21T19:14:33.509Z',
    view: 5277,
    comment: 4972,
    share: 1737,
    favorite: 1732,
    author: {
      name: 'Giana Brandt',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b15',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_15.jpg',
    title: 'The 7 Best Things About Event',
    description: 'At ut voluptate accusantium.',
    createdAt: '2022-08-20T18:14:33.509Z',
    view: 9188,
    comment: 4546,
    share: 6049,
    favorite: 9387,
    author: {
      name: 'Aspen Schmitt',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b16',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_16.jpg',
    title: 'The 7 Biggest Event Mistakes You Can Easily Avoid',
    description: 'Repudiandae ut qui veritatis sint.',
    createdAt: '2022-08-19T17:14:33.509Z',
    view: 583,
    comment: 4746,
    share: 1270,
    favorite: 9370,
    author: {
      name: 'Colten Aguilar',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b17',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_17.jpg',
    title: 'The 7 Most Successful Event Companies In Region',
    description: 'Laboriosam blanditiis quo sed et qui esse ipsam necessitatibus sed.',
    createdAt: '2022-08-18T16:14:33.509Z',
    view: 7477,
    comment: 2305,
    share: 5281,
    favorite: 7433,
    author: {
      name: 'Angelique Morse',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b18',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_18.jpg',
    title: 'Think Your Event Is Safe? 7 Ways You Can Lose It Today',
    description: 'Et molestiae et excepturi maxime omnis.',
    createdAt: '2022-08-17T15:14:33.509Z',
    view: 4509,
    comment: 9702,
    share: 7725,
    favorite: 4068,
    author: {
      name: 'Selina Boyer',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b19',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_19.jpg',
    title: "Thinking About Event? 7 Reasons Why It's Time To Stop!",
    description: 'Sint dolorem quam eum magnam.',
    createdAt: '2022-08-16T14:14:33.509Z',
    view: 9834,
    comment: 6883,
    share: 9264,
    favorite: 9528,
    author: {
      name: 'Lawson Bass',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b20',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_20.jpg',
    title: '7 Places To Get Deals On Event',
    description: 'Rerum ut iusto iste quam voluptatem necessitatibus.',
    createdAt: '2022-08-15T13:14:33.509Z',
    view: 201,
    comment: 4485,
    share: 8082,
    favorite: 8461,
    author: {
      name: 'Ariana Lang',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b21',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_21.jpg',
    title: 'Best Event Android Apps',
    description: 'Et quam in.',
    createdAt: '2022-08-14T12:14:33.509Z',
    view: 7421,
    comment: 1838,
    share: 6983,
    favorite: 8338,
    author: {
      name: 'Amiah Pruitt',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b22',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_22.jpg',
    title: 'Best Event Tips You Will Read This Year',
    description: 'Fugit esse tenetur.',
    createdAt: '2022-08-13T11:14:33.509Z',
    view: 598,
    comment: 4521,
    share: 6810,
    favorite: 4933,
    author: {
      name: 'Harold Mcgrath',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
  {
    id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b23',
    cover: 'https://minimal-assets-api-dev.vercel.app/assets/images/covers/cover_23.jpg',
    title: 'Best 30 Tips For Event',
    description: 'Dolorem dolor porro nihil cupiditate molestiae deserunt ut.',
    createdAt: '2022-08-12T10:14:33.509Z',
    view: 2071,
    comment: 5179,
    share: 3583,
    favorite: 138,
    author: {
      name: 'Esperanza Mcintyre',
      avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
    },
    tags: ['Lamp', 'A man', 'Human', 'Lantern', 'Festival'],
    body: '\n\n<h1>Heading H1</h1><br/>\n<h2>Heading H2</h2><br/>\n<h3>Heading H3</h3><br/>\n<h4>Heading H4</h4><br/>\n<h5>Heading H5</h5><br/>\n<h6>Heading H6</h6><br/>\n\n<hr>\n<h3>Paragraph</h3><br/>\n<p>What is MTAweb Directory?</p><p><br></p><p>So you have heard about this site or you have been to it, but you cannot figure out what it is or what it can do. MTA web directory is the simplest way in which one can bid on a link, or a few links if they wish to do so. The link directory on MTA displays all of the links it currently has, and does so in alphabetical order, which makes it much easier for someone to find what they are looking for if it is something specific and they do not want to go through all the other sites and links as well. It allows you to start your bid at the bottom and slowly work your way to the top of the list.</p><p><br></p><p>With a very low costing starting bid of just $1, you are guaranteed to have a spot in MTA’s successful directory list. When you would like to increase your bid to one of the top positions, you have to know that this would be a wise decision to make as it will not only get your link to be at a higher point in the directory but it will also give you a chance to have your site advertised with the rest of the top ten on the home page of the website. This means that when visitors come to MTAweb.com, your site will be one of the first things they see. In other words, you stand a great chance at getting a comeback to your site sooner than you thought.</p>\n<br/>\n<p><strong>This is strong text.</strong></p>\n<p><em>This is italic text</em></p>\n<p><u>This is underline text</u><span class="ql-cursor"></span></p>\n\n<hr>\n<h3>Unordered list</h3><br/>\n<ul>\n  <li>Implements\n    <a href="https://docs-minimals.vercel.app/introduction">This is an external link</a>\n  </li>\n  <li>Implements\n  <a href="/dashboard/blog">This is an inside link</a>\n  </li>\n  <li>Renders actual, "native" React DOM elements</li>\n  <li>Allows you to escape or skip HTML (try toggling the checkboxes above)</li>\n  <li>If you escape or skip the HTML, no dangerouslySetInnerHTML is used! Yay!</li>\n</ul>\n\n\n<hr>\n<h3>Ordered list</h3><br/>\n<ol>\n  <li>Analysis</li>\n  <li>Design</li>\n  <li>Implementation</li>\n</ol>\n\n<hr>\n<h3>Blockquote</h3><br/>\n<blockquote>Life is short, Smile while you still have teeth!&nbsp;</blockquote>\n\n<hr>\n<h3>Block Code</h3><br/>\n<pre class="ql-syntax" spellcheck="false">cd project-folder\nnpm install\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">var</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react\'</span>);\n<span class="hljs-keyword">var</span> Markdown = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'react-markdown\'</span>);\n\nReact.render(\n  <span class="hljs-tag">&lt;<span class="hljs-name">Markdown1</span> <span class="hljs-attr">source</span>=<span class="hljs-string">"# Your markdown here"</span> /&gt;</span>,\n  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">\'content\'</span>)\n);\n</pre>\n\n<br/>\n<br/>\n\n<pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">createStyleObject</span>(<span class="hljs-params">classNames, style</span>) </span>{\n  <span class="hljs-keyword">return</span> classNames.reduce(<span class="hljs-function">(<span class="hljs-params">styleObject, className</span>) =&gt;</span> {\n   <span class="hljs-keyword">return</span> {...styleObject, ...style[className]};\n  }, {});\n }\n</pre>\n\n<br/>\n<br/>\n\n<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p><p>Why do we use it?</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411340/upload_minimal/covers/cover_6.jpg\'/>\n</p>\n\n\n<br/>\n<br/>\n\n<p>\nIt is important that you buy links because the links are what get you the results that you want. The popularity of the links that are listed in the MTA directory is in fact one of the most important factors in the performance of the search engine. Links are important and this is why you have to purchase a link in order to bid on something and the best part is that a link will only cost you $1, which is nothing compared to what you would pay if you decided to do it through any other company or website.\n</p>\n\n<br/>\n<br/>\n\n<p>\n<img src=\'https://res.cloudinary.com/trinhmai/image/upload/c_scale,w_1440/v1611411339/upload_minimal/covers/cover_4.jpg\'/>\n</p>\n\n',
    favoritePerson: [
      {
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
      },
      {
        name: 'Lucian Obrien',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
      },
      {
        name: 'Deja Brady',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
      },
      {
        name: 'Harrison Stein',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_4.jpg',
      },
      {
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
      },
      {
        name: 'Lainey Davidson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
      },
      {
        name: 'Cristopher Cardenas',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
      },
      {
        name: 'Melanie Noble',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
      },
      {
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
      },
      {
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
      },
      {
        name: 'Soren Durham',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_11.jpg',
      },
      {
        name: 'Cortez Herring',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_12.jpg',
      },
      {
        name: 'Brycen Jimenez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_13.jpg',
      },
      {
        name: 'Giana Brandt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_14.jpg',
      },
      {
        name: 'Aspen Schmitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_15.jpg',
      },
      {
        name: 'Colten Aguilar',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_16.jpg',
      },
      {
        name: 'Angelique Morse',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_17.jpg',
      },
      {
        name: 'Selina Boyer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_18.jpg',
      },
      {
        name: 'Lawson Bass',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_19.jpg',
      },
      {
        name: 'Ariana Lang',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_20.jpg',
      },
      {
        name: 'Amiah Pruitt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_21.jpg',
      },
      {
        name: 'Harold Mcgrath',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_22.jpg',
      },
      {
        name: 'Esperanza Mcintyre',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_23.jpg',
      },
      {
        name: 'Mireya Conner',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_24.jpg',
      },
      {
        name: 'Jamie Kline',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_25.jpg',
      },
      {
        name: 'Laney Vazquez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_26.jpg',
      },
      {
        name: 'Tiffany May',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_27.jpg',
      },
      {
        name: 'Dexter Shepherd',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_28.jpg',
      },
      {
        name: 'Jaqueline Spencer',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_29.jpg',
      },
      {
        name: 'Londyn Jarvis',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_30.jpg',
      },
      {
        name: 'Yesenia Butler',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_31.jpg',
      },
      {
        name: 'Jayvon Hull',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_32.jpg',
      },
      {
        name: 'Izayah Pope',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_33.jpg',
      },
      {
        name: 'Ayana Hunter',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_34.jpg',
      },
      {
        name: 'Isabell Bender',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_35.jpg',
      },
      {
        name: 'Desiree Schmidt',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_36.jpg',
      },
      {
        name: 'Aidan Stout',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_37.jpg',
      },
      {
        name: 'Jace Bush',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_38.jpg',
      },
      {
        name: 'Janiya Williamson',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_39.jpg',
      },
      {
        name: 'Hudson Alvarez',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_40.jpg',
      },
    ],
    comments: [
      {
        id: '26fc86ba-2141-4912-b8e8-481df68a286b',
        name: 'Jayvion Simon',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
        message: 'Quis veniam aut saepe aliquid nulla.',
        postedAt: '2022-09-03T07:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            name: 'Jayvion Simon',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_1.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            name: 'Lucian Obrien',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_2.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            name: 'Deja Brady',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_3.jpg',
          },
        ],
        replyComment: [
          {
            id: '8c39518f-03a7-45db-b580-405397b7b9f8',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
            message: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
            postedAt: '2022-09-02T06:14:33.508Z',
          },
          {
            id: '1556c976-5b84-4a5c-a9ab-1ef2c7520437',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
            message: 'Error ut sit vel molestias velit.',
            tagUser: 'Lucian Obrien',
            postedAt: '2022-09-01T05:14:33.508Z',
          },
          {
            id: '19da74d8-e530-46c7-aae4-b285c0934abf',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
            message: 'Quo quia sit nihil nemo doloremque et.',
            postedAt: '2022-08-31T04:14:33.508Z',
          },
        ],
      },
      {
        id: '7bcb9f5a-6d86-4ad7-a7de-21364734a67b',
        name: 'Reece Chung',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_5.jpg',
        message: 'Autem doloribus harum vero laborum.',
        postedAt: '2022-08-30T03:14:33.508Z',
        users: [
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            name: 'Lainey Davidson',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_6.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            name: 'Cristopher Cardenas',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_7.jpg',
          },
          {
            id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            name: 'Melanie Noble',
            avatarUrl:
              'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_8.jpg',
          },
        ],
        replyComment: [
          {
            id: 'd5e2b9a9-e765-4ea6-a317-3d2b1f0517ed',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
            message: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
            postedAt: '2022-08-29T02:14:33.508Z',
          },
          {
            id: '4759d551-2a5a-413a-97f8-956da63124e9',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
            message: 'Voluptas sunt magni adipisci praesentium saepe.',
            postedAt: '2022-08-28T01:14:33.508Z',
          },
          {
            id: 'f59aaddf-13b5-498c-8e96-2020ab117ec7',
            userId: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
            message: 'Ea architecto quas voluptates voluptas earum illo est vel rem.',
            postedAt: '2022-08-27T00:14:33.508Z',
          },
        ],
      },
      {
        id: 'ce1c1ba6-2229-4710-b3b8-33d81564c279',
        name: 'Chase Day',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_9.jpg',
        message: 'Ipsum expedita reiciendis ut.',
        postedAt: '2022-08-25T23:14:33.508Z',
        users: [],
        replyComment: [],
      },
      {
        id: '226333fb-1585-453f-9aba-734ea67733a9',
        name: 'Shawn Manning',
        avatarUrl: 'https://minimal-assets-api-dev.vercel.app/assets/images/avatars/avatar_10.jpg',
        message: 'Architecto vel voluptatibus alias a aut non maxime ipsa voluptates.',
        postedAt: '2022-08-24T22:14:33.508Z',
        users: [],
        replyComment: [],
      },
    ],
  },
];
