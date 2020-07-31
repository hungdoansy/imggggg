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

// const links = [
//   "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595495745866-982640a7d46f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595385962860-6dddf14dd096?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595326989292-3155b37411ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595327023008-bce2898309c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595412134077-515f3c30b2fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595265503218-3e10ed16291c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595425178239-7f2e3af36041?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595355728145-2c8d5863ccf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595323513978-b0692b8155a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595438337027-5601ae7fcf93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595254310468-347927ad1d75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595500037491-b81fa08512d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595351475754-8a520e0bc3a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595498960864-45c9e3bfa321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595350670723-6618500e6f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595326928396-247ffcf81da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595455661762-31c2975417df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595411425732-e69c1abe2763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//   "https://images.unsplash.com/photo-1595228702420-b3740f7f9761?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
// ];

const getTotalPhotos = (categoryId) => {
  return categories.photosByCategoryId[categoryId].length;
};

export const categories = {
  allIds: [1, 2, 3, 4],

  photosByCategoryId: {
    1: [
      {
        image_url:
          "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "laptop on brown wooden table",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595814233006-aa1d7c0b8b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white flowers on brown woven basket",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595866673185-fd86f91ac138?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595862067182-b552015841e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of dog on water",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595867720406-44a6dbfa54b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595864372056-0d510135dea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green porsche 911 parked in front of white building",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595881283781-205a31feeebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595862645152-2f32bd80ce1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "text",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595789426325-3857dfe7c141?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "purple and pink flowers on window",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595871222310-02a6c323ad2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595872018659-cb3f4b726bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595831972377-e7bf99822d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown straw hat beside white flowers on brown wooden table",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595864612399-7600e29f8139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black laptop computer beside green plant",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595865182361-4c097821ba23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595864137315-c781590f95af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "orange fruit on white textile",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595842427698-2183e9f769d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595876102398-e9260821d768?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "laptop on white table",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595804118050-06d340639ea1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in white crop top and white denim shorts holding gray box",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595871199593-b04178327f7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "laptop on brown wooden table",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595872241097-3a14455f817c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595842717752-86610be07b11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595876290257-da90d70ef5d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595873371912-27a70363bcf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
    ],
    2: [
      {
        image_url:
          "https://images.unsplash.com/photo-1538137518296-2b8f90394f04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "spider web in shallow photo",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595519870096-04338393253a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "birds flying over brown rock formation during sunset",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595543848078-69675daba7b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "silhouette of bird flying during sunset",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625380984-b9271a338bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black rock formation under starry night",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595693395636-dca22f1f4ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown concrete tower under starry night",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595729257407-e4b69b4c2650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "silhouette of mountain under starry night",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1510873897477-7d8724050d64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown mountain cliff with starry sky",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595520519880-a86c48ea536c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "silhouette of trees under blue sky",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595523321272-5346862ad1af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water waves on black and white textile",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1594811359576-476f9445fa0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and blue lights on black background",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595717197054-4ff876a539d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of bare trees",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595755068367-661bbcea3ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black coupe parked beside building",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595355728145-2c8d5863ccf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "rocky mountain under blue sky during night time",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595565302791-ec72c034cf5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "people standing on rocky hill under starry night",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595478886718-92d8b5d75d8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown mountain under blue sky during night time",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595584750867-5dc28ecac0a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "cars on road near mountain during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595693396891-7358c674b360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "white and black lighthouse under blue sky during night time",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595742457985-1bd664e97083?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation under starry night",
      },
    ],
    3: [
      {
        image_url:
          "https://images.unsplash.com/photo-1595845396231-0a250a241904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "woman in orange dress standing near brown wooden house during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595726065171-b22284a62f99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person standing on rock formation during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595782014129-d8ca7a691d83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown and black pagoda temple",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595775005993-19fc30818425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675585284-64eefe2d9d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and brown concrete building during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595398046136-614db7ff7314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595773457572-9f5019945645?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black jeep wrangler",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595750777278-d51bf60ee8a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown wooden bridge over river",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727535715-b956cfc6b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of ocean waves",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727525997-931a0cb25664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of beach during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727531123-c186a58f50a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and blue abstract painting",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595691593343-9e96b844ec07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "silhouette of person standing on rock formation under blue sky during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736245-19f669ff8e70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation under blue sky during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688359747-60560c0286db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675586881-06986e96586e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "city with high rise buildings during night time",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595614007551-4bc4364b32e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown rocky mountain under blue sky and white clouds during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595614007536-6e6a8ef82139?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green trees near river during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person near geyser",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595766711576-393e79ec6302?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown wooden staircase with orange curtain",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595716912088-16d44c84216f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "white volkswagen t-2 on green grass field near mountain during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595814304795-04e0ae903ae8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white sailboat on sea during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595774672939-26396d753c76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595595808868-d1c55b4b41f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "high rise buildings during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595775081561-c66f53c66899?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "blue boat on water near concrete buildings during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595773457674-d4704d61b0f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black chevrolet car",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595769691216-dec30404db8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "people walking on street during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595750777196-ac19ba2f8aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown grass near lake during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727528844-26c83214ab7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of people on beach during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595700042459-6a2d062a7575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "city with high rise buildings under gray sky",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736300-a2541c0c3f26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation near green trees during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675711253-e6ecd6e621a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "body of water under cloudy sky during sunset",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625322334-d2719656d472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595599126896-7989206b5702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of leafless tree",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595498960864-45c9e3bfa321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white ice on brown rock",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595776290191-045f180b9f1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "man in red crew neck t-shirt and beige pants standing near food packs",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595837724936-2684bd9ec954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "people swimming on beach during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727529868-d836f7494880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595517833275-5efd4a6592a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of train rail",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595771555006-e5337b60ec5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "statue of man on top of building",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595765844793-0ce0d4c7527d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "houses near mountain under blue sky during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595733636116-b37dc6bca585?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727520054-91eba7d75e97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "ocean waves crashing on shore during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727536694-7462c33565b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595727527303-17bdb32862ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "aerial view of beach during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736180-84269cddb28f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rocky mountain under white sky during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595688736108-19c0fc62da42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown rocky mountain under white cloudy sky during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595675582979-cccca28073fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "snow covered mountain during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625322106-06631a6dcd53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: null,
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595614007554-59e27ca95c47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water falling from brown rock formation",
      },
    ],
    4: [
      {
        image_url:
          "https://images.unsplash.com/photo-1595538154519-bc102fd25a97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown mountain near body of water during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1570654230464-9cf6d6f0660f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "person near geyser",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595355728145-2c8d5863ccf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "rocky mountain under blue sky during night time",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595686327664-d9e2e0072d62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "snow covered mountain during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595726030834-321a14a7f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation under white clouds during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/flagged/photo-1595511369680-d728dc7f0be9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "brown trees near lake and mountain under blue sky during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595773945046-96626aa481a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green palm tree under white sky",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595726077448-1a8ef8cf5d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "brown rock formation near green grass during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595796908801-cc30e356e983?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "grayscale photo of full moon",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595810033299-5a6fcda2aa71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green grass field under white clouds",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595498960864-45c9e3bfa321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white ice on brown rock",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595625380984-b9271a338bab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white and black rock formation under starry night",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1588099246635-d6868ab08b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green tree on brown field during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595736516846-c9fe0cb86f7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white clouds and blue sky",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595704277981-c930bf0afe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green grass and trees during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595777893145-ff258b2f05c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "gray asphalt road between brown mountains during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595777480569-8e542c4f904c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green moss on brown tree trunk near river during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595455255621-7c002ad739a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water droplets on glass during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595586964632-b215dfbc064a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green palm tree under blue sky",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595632296014-ed63864cc753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "white clouds during golden hour",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595761970908-aeeb4c79b086?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description:
          "green grass on mountain near body of water during daytime",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595775891942-82a5143d55e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "red and brown maple leaf",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595789927828-b56b8a608bc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "green and white abstract painting",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595777894288-18f2aa1d0ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "water falls in the middle of green trees",
      },
      {
        image_url:
          "https://images.unsplash.com/photo-1595810135064-80d309bb7426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        description: "black and brown starry night",
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
  },
};

export const getPhotosWithParams = (categoryId, page) => {
  debugger;
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
  return {
    total_categories: categories.allIds.length,
    categories: categories.allIds.map(
      (id) => categories.detailByCategoryId[id]
    ),
  };
};
