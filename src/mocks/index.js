const LIMIT = 10;
let currentId = 5;

export const images = [
  {
    src:
      "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "silver macbook on brown wooden table",
  },
  {
    src:
      "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "silver macbook on brown wooden table",
  },
  {
    src:
      "https://images.unsplash.com/photo-1595741759643-427c44aa4f21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595744080992-5341e893c32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595743824479-711892539a65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595736516846-c9fe0cb86f7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595717197054-4ff876a539d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595721170805-8449f01a618d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595619768849-b5f178a697ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595713789385-2a78086b025b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595704278111-4a90b6317ee5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595789419250-e4b6788a5a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595550422119-eb1785a44daa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "woman in white and orange tank top holding red flower",
  },
  {
    src:
      "https://images.unsplash.com/flagged/photo-1594222413145-46c180b51c2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595742446666-c51b9fee49c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595737133621-ff0a30406dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595726030834-321a14a7f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595729257407-e4b69b4c2650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595717078923-128d397de19f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1593642634627-6fdaf35209f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "person using white laptop computer",
  },
  {
    src:
      "https://images.unsplash.com/photo-1595615684666-36b541d16dff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595713039412-73e0254e1e01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "person using black laptop computer on brown wooden table",
  },
  {
    src:
      "https://images.unsplash.com/photo-1595788700150-2359f5b9a2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595702700955-dbbc28a59da5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595524288414-a7fda0a12d0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595742457985-1bd664e97083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "macbook pro on black table",
  },
  {
    src:
      "https://images.unsplash.com/photo-1595732390058-8d489d42ed04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595732038548-c13e367c396b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595706198321-aa9dcd5d46cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595720742810-b4447f151faf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595715316313-1730ee539c64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
  {
    src:
      "https://images.unsplash.com/photo-1595515106758-9d41d10d453e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: "white wall mounted kitchen cabinet",
  },
  {
    src:
      "https://images.unsplash.com/photo-1595711733945-f558ba87dcdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    alt: null,
  },
];

const getTotalPhotos = (categoryId) => {
  return categories.photosByCategoryId[categoryId].length;
};

export const categories = {
  allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],

  photosByCategoryId: {
    "1": [
      {
        image_url:
          "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "laptop on brown wooden table",
        id: 100,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595814233006-aa1d7c0b8b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white flowers on brown woven basket",
        id: 101,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595866673185-fd86f91ac138?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 102,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595862067182-b552015841e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of dog on water",
        id: 103,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595867720406-44a6dbfa54b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 104,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595864372056-0d510135dea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green porsche 911 parked in front of white building",
        id: 105,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595881283781-205a31feeebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 106,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595862645152-2f32bd80ce1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "text",
        id: 107,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595789426325-3857dfe7c141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "purple and pink flowers on window",
        id: 108,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595871222310-02a6c323ad2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 109,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595872018659-cb3f4b726bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 110,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595831972377-e7bf99822d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown straw hat beside white flowers on brown wooden table",
        id: 111,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595864612399-7600e29f8139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black laptop computer beside green plant",
        id: 112,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595865182361-4c097821ba23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 113,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595864137315-c781590f95af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "orange fruit on white textile",
        id: 114,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595842427698-2183e9f769d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 115,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595876102398-e9260821d768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 116,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "laptop on white table",
        id: 117,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595804118050-06d340639ea1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in white crop top and white denim shorts holding gray box",
        id: 118,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595871199593-b04178327f7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 119,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "laptop on brown wooden table",
        id: 120,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595872241097-3a14455f817c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 121,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595842717752-86610be07b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 122,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595876290257-da90d70ef5d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 123,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595873371912-27a70363bcf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 124,
        author: { id: 1, name: "Hung1" },
      },
    ],
    "2": [
      {
        image_url:
          "https://images.unsplash.com/photo-1538137518296-2b8f90394f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "spider web in shallow photo",
        id: 125,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595519870096-04338393253a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "birds flying over brown rock formation during sunset",
        id: 126,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595543848078-69675daba7b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "silhouette of bird flying during sunset",
        id: 127,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625380984-b9271a338bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black rock formation under starry night",
        id: 128,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595693395636-dca22f1f4ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown concrete tower under starry night",
        id: 129,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595729257407-e4b69b4c2650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "silhouette of mountain under starry night",
        id: 130,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1510873897477-7d8724050d64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown mountain cliff with starry sky",
        id: 131,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595520519880-a86c48ea536c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "silhouette of trees under blue sky",
        id: 132,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595523321272-5346862ad1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water waves on black and white textile",
        id: 133,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1594811359576-476f9445fa0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and blue lights on black background",
        id: 134,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595717197054-4ff876a539d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of bare trees",
        id: 135,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595755068367-661bbcea3ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black coupe parked beside building",
        id: 136,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595355728145-2c8d5863ccf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "rocky mountain under blue sky during night time",
        id: 137,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595565302791-ec72c034cf5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "people standing on rocky hill under starry night",
        id: 138,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595478886718-92d8b5d75d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown mountain under blue sky during night time",
        id: 139,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595584750867-5dc28ecac0a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "cars on road near mountain during daytime",
        id: 140,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595693396891-7358c674b360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "white and black lighthouse under blue sky during night time",
        id: 141,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595742457985-1bd664e97083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation under starry night",
        id: 142,
        author: { id: 1, name: "Hung1" },
      },
    ],
    "3": [
      {
        image_url:
          "https://images.unsplash.com/photo-1595845396231-0a250a241904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in orange dress standing near brown wooden house during daytime",
        id: 143,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595726065171-b22284a62f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person standing on rock formation during daytime",
        id: 144,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595782014129-d8ca7a691d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and black pagoda temple",
        id: 145,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595775005993-19fc30818425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 146,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675585284-64eefe2d9d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and brown concrete building during daytime",
        id: 147,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595398046136-614db7ff7314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 148,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595773457572-9f5019945645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black jeep wrangler",
        id: 149,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595750777278-d51bf60ee8a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown wooden bridge over river",
        id: 150,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727535715-b956cfc6b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of ocean waves",
        id: 151,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727525997-931a0cb25664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of beach during daytime",
        id: 152,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727531123-c186a58f50a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and blue abstract painting",
        id: 153,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595691593343-9e96b844ec07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "silhouette of person standing on rock formation under blue sky during daytime",
        id: 154,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736245-19f669ff8e70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation under blue sky during daytime",
        id: 155,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688359747-60560c0286db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 156,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675586881-06986e96586e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "city with high rise buildings during night time",
        id: 157,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595614007551-4bc4364b32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown rocky mountain under blue sky and white clouds during daytime",
        id: 158,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green trees near river during daytime",
        id: 159,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person near geyser",
        id: 160,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595766711576-393e79ec6302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown wooden staircase with orange curtain",
        id: 161,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595716912088-16d44c84216f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "white volkswagen t-2 on green grass field near mountain during daytime",
        id: 162,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595814304795-04e0ae903ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white sailboat on sea during daytime",
        id: 163,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595774672939-26396d753c76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 164,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595595808868-d1c55b4b41f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "high rise buildings during daytime",
        id: 165,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595775081561-c66f53c66899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "blue boat on water near concrete buildings during daytime",
        id: 166,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595773457674-d4704d61b0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black chevrolet car",
        id: 167,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595769691216-dec30404db8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "people walking on street during daytime",
        id: 168,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595750777196-ac19ba2f8aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown grass near lake during daytime",
        id: 169,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727528844-26c83214ab7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of people on beach during daytime",
        id: 170,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595700042459-6a2d062a7575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "city with high rise buildings under gray sky",
        id: 171,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736300-a2541c0c3f26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation near green trees during daytime",
        id: 172,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675711253-e6ecd6e621a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "body of water under cloudy sky during sunset",
        id: 173,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625322334-d2719656d472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 174,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595599126896-7989206b5702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of leafless tree",
        id: 175,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595498960864-45c9e3bfa321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white ice on brown rock",
        id: 176,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595776290191-045f180b9f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "man in red crew neck t-shirt and beige pants standing near food packs",
        id: 177,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595837724936-2684bd9ec954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "people swimming on beach during daytime",
        id: 178,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727529868-d836f7494880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 179,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595517833275-5efd4a6592a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of train rail",
        id: 180,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595771555006-e5337b60ec5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "statue of man on top of building",
        id: 181,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595765844793-0ce0d4c7527d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "houses near mountain under blue sky during daytime",
        id: 182,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595733636116-b37dc6bca585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 183,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727520054-91eba7d75e97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "ocean waves crashing on shore during daytime",
        id: 184,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727536694-7462c33565b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 185,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727527303-17bdb32862ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of beach during daytime",
        id: 186,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736180-84269cddb28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rocky mountain under white sky during daytime",
        id: 187,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736108-19c0fc62da42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown rocky mountain under white cloudy sky during daytime",
        id: 188,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675582979-cccca28073fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "snow covered mountain during daytime",
        id: 189,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625322106-06631a6dcd53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 190,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595614007554-59e27ca95c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water falling from brown rock formation",
        id: 191,
        author: { id: 1, name: "Hung1" },
      },
    ],
    "4": [
      {
        image_url:
          "https://images.unsplash.com/photo-1595538154519-bc102fd25a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown mountain near body of water during daytime",
        id: 192,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person near geyser",
        id: 193,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595355728145-2c8d5863ccf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "rocky mountain under blue sky during night time",
        id: 194,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595686327664-d9e2e0072d62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "snow covered mountain during daytime",
        id: 195,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595726030834-321a14a7f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation under white clouds during daytime",
        id: 196,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/flagged/photo-1595511369680-d728dc7f0be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown trees near lake and mountain under blue sky during daytime",
        id: 197,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595773945046-96626aa481a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green palm tree under white sky",
        id: 198,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595726077448-1a8ef8cf5d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation near green grass during daytime",
        id: 199,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595796908801-cc30e356e983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of full moon",
        id: 200,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595810033299-5a6fcda2aa71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green grass field under white clouds",
        id: 201,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595498960864-45c9e3bfa321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white ice on brown rock",
        id: 202,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625380984-b9271a338bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black rock formation under starry night",
        id: 203,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1588099246635-d6868ab08b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green tree on brown field during daytime",
        id: 204,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595736516846-c9fe0cb86f7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white clouds and blue sky",
        id: 205,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595704277981-c930bf0afe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green grass and trees during daytime",
        id: 206,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595777893145-ff258b2f05c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "gray asphalt road between brown mountains during daytime",
        id: 207,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595777480569-8e542c4f904c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green moss on brown tree trunk near river during daytime",
        id: 208,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595455255621-7c002ad739a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water droplets on glass during daytime",
        id: 209,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595586964632-b215dfbc064a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green palm tree under blue sky",
        id: 210,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595632296014-ed63864cc753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white clouds during golden hour",
        id: 211,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595761970908-aeeb4c79b086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "green grass on mountain near body of water during daytime",
        id: 212,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595775891942-82a5143d55e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "red and brown maple leaf",
        id: 213,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595789927828-b56b8a608bc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green and white abstract painting",
        id: 214,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595777894288-18f2aa1d0ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water falls in the middle of green trees",
        id: 215,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595810135064-80d309bb7426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black and brown starry night",
        id: 216,
        author: { id: 3, name: "Hung3" },
      },
    ],
    "5": [
      {
        image_url:
          "https://images.unsplash.com/photo-1532178324009-6b6adeca1741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 217,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595877703399-36c7cab84925?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "yellow heart with black string light",
        id: 218,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1594731804139-d70328c07f4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black smartphone on white table",
        id: 219,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595594448346-37697edf83a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black and gray camera on red background",
        id: 220,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595871681184-de9d30f333b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white usb flash drive on white printer paper",
        id: 221,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1592851949304-acfc984ec3ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person holding black nikon dslr camera",
        id: 222,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595303526913-c7037797ebe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black laptop computer on white table",
        id: 223,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595428645453-309f41e373e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black and yellow remote control",
        id: 224,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "black laptop computer turned on beside black and silver desk lamp",
        id: 225,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595877704762-84aeac65c970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person holding orange and white plastic cup",
        id: 226,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595860240645-9703b6425a77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 227,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595756630797-e3c9ee1a9002?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black and silver round analog watch",
        id: 228,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595594448399-1ed3331294cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black microphone on pink background",
        id: 229,
        author: { id: 4, name: "Hung4" },
      },
    ],
    "6": [
      {
        image_url:
          "https://images.unsplash.com/photo-1595849657810-bde306c6a73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "macro photography of green leaf",
        id: 230,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595863442219-a5ac6e6b093f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "blue and white water wave",
        id: 231,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595933188697-3ed1690034c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water droplets on brown wooden surface",
        id: 232,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595960684234-49d2a004e753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "yellow and black surfboard on body of water",
        id: 233,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1545631812-ae2f11e0f2a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 234,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595791438679-bca6f4fba0ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown concrete brick wall during daytime",
        id: 235,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595943350513-04339832530e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and white rock formation",
        id: 236,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595943350274-58503f7f6237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown sand near body of water during daytime",
        id: 237,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595911595687-169e70434818?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 238,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595878744852-96a5ea1db51c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "pink and blue abstract painting",
        id: 239,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595801161822-6850339d5a5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "yellow pink and blue polka dot illustration",
        id: 240,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595858706049-a461ef2047e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water droplets on black leather",
        id: 241,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595944569184-ef0d8e315249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and brown abstract painting",
        id: 242,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595944568916-6dd2a0d92e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "orange and white abstract painting",
        id: 243,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1590461282648-25d9481df17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "red cable car under cloudy sky during daytime",
        id: 244,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595947350749-ead4d22b1909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white clouds and blue sky during daytime",
        id: 245,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595943350217-472ad8b04464?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and white abstract painting",
        id: 246,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595878777122-918826f6ce4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and black abstract painting",
        id: 247,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595861855144-b7db85bb8c0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green and blue abstract painting",
        id: 248,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595878655324-6f81790dce49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "blue and black abstract painting",
        id: 249,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595933188652-b511e433c802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "blue and white abstract painting",
        id: 250,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595948142016-4a08c6ba6ff2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "red white and yellow textile",
        id: 251,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595929840405-60c604b3ddea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "blue and brown window blinds",
        id: 252,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1588168047779-946456d3c684?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 253,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595944378089-02ad4f98f40f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black and yellow heart illustration",
        id: 254,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595878830509-58b6ae9d81f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "blue and white abstract painting",
        id: 255,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595878715977-2e8f8df18ea8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "blue and white water splash",
        id: 256,
        author: { id: 0, name: "Hung0" },
      },
    ],
    "7": [
      {
        image_url:
          "https://images.unsplash.com/photo-1534446323371-17e4d72dd6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman inside concrete walkway with black canopy during daytime",
        id: 257,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/flagged/photo-1554176778-0319e4eb4516?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "man's face",
        id: 258,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595845396231-0a250a241904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in orange dress standing near brown wooden house during daytime",
        id: 259,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595871222310-02a6c323ad2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "woman in red and white checkered dress shirt",
        id: 260,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/flagged/photo-1557786458-77474e6ff1bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "two people's eye close-up photography",
        id: 261,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "woman wearing black tank top",
        id: 262,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "man standing near white wooden fence",
        id: 263,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595814432314-90095f342694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in gray tank top and blue denim jeans sitting on bed",
        id: 264,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595804118050-06d340639ea1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in white crop top and white denim shorts holding gray box",
        id: 265,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1548197001-ca380947be91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "smiling man in blue and black plaid shirt",
        id: 266,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1589287674448-e139aa0bffb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in white tank top sitting on white boat during daytime",
        id: 267,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595857819837-1c820f33e62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in red and black plaid scarf sitting on brown grass field during daytime",
        id: 268,
        author: { id: 0, name: "Hung0" },
      },
    ],
    "8": [
      {
        image_url:
          "https://images.unsplash.com/photo-1595853923433-068620357b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black pelican on water during daytime",
        id: 269,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595862064348-0452f62a45c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of golden retriever",
        id: 270,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595922050502-3f2fd1b75dda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown elephant on brown grass field during daytime",
        id: 271,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595836051468-33b0e9c49807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and white jellyfish illustration",
        id: 272,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1592852327992-d2a93e5410b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white swan on brown soil during daytime",
        id: 273,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1519689927467-ed2a029c9288?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown hummingbird eating nectar in red flower",
        id: 274,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595491558702-8ba72bd0f4b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "close up photo of elephants eye",
        id: 275,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1594561177665-052b6b4b781a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white pelican on body of water during daytime",
        id: 276,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595503240812-7286dafaddc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "orange and white clown fish",
        id: 277,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595683763139-808e8f31b1a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown deer on rocky mountain during daytime",
        id: 278,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595750375720-503c4600f7d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "koala bear on brown tree branch",
        id: 279,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595862064828-b9a410d53669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "golden retriever on black and gray ground during daytime",
        id: 280,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595963646611-4501eabccaaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "white and brown cow on snow covered ground during daytime",
        id: 281,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595855894441-c1e5a3e81894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown and white squirrel on brown tree branch during daytime",
        id: 282,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1594295924945-de7e20afd440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown and black short coated dog lying on gray concrete floor",
        id: 283,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1594605520307-6e8eef3bc52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and white horse on field during daytime",
        id: 284,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1490718821482-ba403113a86b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "on flight black and white bird",
        id: 285,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595750376349-54363e64af36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "koala bear on brown tree branch during daytime",
        id: 286,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595583264778-33296d7f6787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white bird with blue eyes",
        id: 287,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595737133621-ff0a30406dec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "koala on brown tree branch during daytime",
        id: 288,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595876102398-e9260821d768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown short coated dog on tree branch",
        id: 289,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595923059379-14100aab2b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black cat on white cat tree",
        id: 290,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595921758041-d4ca44861849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 291,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595836013452-4a95358bad72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
        id: 292,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1561991524-9eaa9f7d910b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "calico kitten on white rubber clog shoe",
        id: 293,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1547864557-ea94b28e76d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "short-furred white cat lying on white cloth",
        id: 294,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595573082608-ee790ef787ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and yellow bird on brown soil",
        id: 295,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595521355985-bd4341ac89a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and black yorkshire terrier puppy",
        id: 296,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595683786762-54897fae1476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and black deer under blue sky during daytime",
        id: 297,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595737082656-5564fd832613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and brown owl on brown tree branch during daytime",
        id: 298,
        author: { id: 3, name: "Hung3" },
      },
    ],
    "9": [
      {
        image_url:
          "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "gray wing chair with throw pillows beside white door",
        id: 299,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595944356863-e624f8234e1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "red blue and green hanging decor",
        id: 300,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595515770294-38a01e2ac4dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white ceramic sink with stainless steel faucet",
        id: 301,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595428774223-ef52624120d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown wooden shelf with bottles",
        id: 302,
        author: { id: 2, name: "Hung2" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595834513156-3273cdc4cab7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "gold and black candle holder on white wooden shelf",
        id: 303,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595515770338-e4d3c5d8dd91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green potted plant on black wooden shelf",
        id: 304,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595918989325-547568361235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in white robe standing on brown wooden parquet floor",
        id: 305,
        author: { id: 1, name: "Hung1" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595878203506-e626f15a520f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white paper roll on brown wooden table",
        id: 306,
        author: { id: 0, name: "Hung0" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595515770345-0497f6f13692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black wooden shelf",
        id: 307,
        author: { id: 4, name: "Hung4" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595935736128-db1f0a261263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black flat screen tv turned on near white wooden table",
        id: 308,
        author: { id: 3, name: "Hung3" },
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595514535215-8a093483610a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black ceramic bowl on brown wooden shelf",
        id: 309,
        author: { id: 4, name: "Hung4" },
      },
    ],
  },

  detailByCategoryId: {
    1: {
      id: 1,
      name: "Mixed",
      description: "random images",
      image_url:
        "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    2: {
      id: 2,
      name: "Wallpapers",
      description: "Gorgeous HD photos to use as wallpapers",
      image_url:
        "https://images.unsplash.com/photo-1538137518296-2b8f90394f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    3: {
      id: 3,
      name: "Travel",
      description: "Taken by hikers/trekkers",
      image_url:
        "https://images.unsplash.com/photo-1595845396231-0a250a241904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    4: {
      id: 4,
      name: "Nature",
      description: "The beatufiul Mother Nature around us !",
      image_url:
        "https://images.unsplash.com/photo-1595538154519-bc102fd25a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    5: {
      id: 5,
      name: "Technology",
      description: "All about Tech",
      image_url:
        "https://images.unsplash.com/photo-1532178324009-6b6adeca1741?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    6: {
      id: 6,
      name: "Textures & Patterns",
      description: "I don't know",
      image_url:
        "https://images.unsplash.com/photo-1595849657810-bde306c6a73b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },

    7: {
      id: 7,
      name: "People",
      description: "I don't know them",
      image_url:
        "https://images.unsplash.com/photo-1534446323371-17e4d72dd6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },

    8: {
      id: 8,
      name: "Animals",
      description: "Other beings on earth",
      image_url:
        "https://images.unsplash.com/photo-1595853923433-068620357b20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },

    9: {
      id: 9,
      name: "Interiors",
      description: "Asthetically pleasing designs for homes",
      image_url:
        "https://images.unsplash.com/photo-1595514535215-8a093483610a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  },
};

export const getPhotosWithParams = (categoryId, page) => {
  const from = (page - 1) * LIMIT;
  const to = page * LIMIT;
  for (let i = 0; i < categories.allIds.length; i++) {
    const id = categories.allIds[i];
    if (id === categoryId) {
      return {
        items: categories.photosByCategoryId[id].slice(from, to),
        total_items: getTotalPhotos(categoryId),
      };
    }
  }

  return [];
};

export const addNewCategory = ({ name, image_url, description }) => {
  const id = currentId++;
  categories.allIds.push(id);

  categories.detailByCategoryId[id] = {
    id,
    name,
    image_url,
    description,
  };

  categories.photosByCategoryId[id] = [];

  return { id, name, image_url, description };
};

export const submitPhoto = ({ categoryId, userId, description, imageUrl }) => {
  const photo = {
    image_url: imageUrl,
    description,
  };
  categories.photosByCategoryId[categoryId].push(photo);

  return { ...photo, user_id: 4, category_id: categoryId };
};

export const getCategories = ({ offset, limit }) => {
  const from = offset;
  const to = offset + limit;

  return {
    total_categories: categories.allIds.length,
    categories: categories.allIds
      .map((id) => categories.detailByCategoryId[id])
      .slice(from, to),
  };
};

export const getCategoryDetail = (categoryId) => {
  return categories.detailByCategoryId[categoryId];
};
