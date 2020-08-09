import React from "react";

import { render } from "@testing-library/react";

import PhotoGrid from "..";

const state = {
  photo: {
    allCategoryIds: [1, 2],
    allPageNumbersByCategoryIds: { 1: [1, 2], 2: [1, 2] },
    allPhotoIdsByCatgoryIdsAndPageNumbers: {
      1: {
        1: [100, 101, 102],
        2: [103, 104, 105],
      },
      2: {
        1: [200, 201, 202],
        2: [203, 204, 205],
      },
    },
    byPhotoId: {
      100: {
        id: 100,
        description: "100Description",
        src: "100Src.com",
        author: {
          id: 1,
          name: "Author1",
        },
        categoryId: 1,
      },

      101: {
        id: 101,
        description: "101Description",
        src: "101Src.com",
        author: {
          id: 2,
          name: "Author2",
        },
        categoryId: 1,
      },

      102: {
        id: 102,
        description: "102Description",
        src: "102Src.com",
        author: {
          id: 2,
          name: "Author2",
        },
        categoryId: 1,
      },

      103: {
        id: 103,
        description: "103Description",
        src: "103Src.com",
        author: {
          id: 3,
          name: "Author3",
        },
        categoryId: 1,
      },

      104: {
        id: 104,
        description: "104Description",
        src: "104Src.com",
        author: {
          id: 1,
          name: "Author1",
        },
        categoryId: 1,
      },

      105: {
        id: 105,
        description: "105Description",
        src: "105Src.com",
        author: {
          id: 2,
          name: "Author2",
        },
        categoryId: 1,
      },

      106: {
        id: 106,
        description: "106Description",
        src: "106Src.com",
        author: {
          id: 1,
          name: "Author1",
        },
        categoryId: 1,
      },

      200: {
        id: 200,
        description: "200Description",
        src: "200Src.com",
        author: {
          id: 1,
          name: "Author1",
        },
        categoryId: 2,
      },

      201: {
        id: 201,
        description: "201Description",
        src: "201Src.com",
        author: {
          id: 2,
          name: "Author2",
        },
        categoryId: 2,
      },

      202: {
        id: 202,
        description: "202Description",
        src: "202Src.com",
        author: {
          id: 1,
          name: "Author1",
        },
        categoryId: 2,
      },

      203: {
        id: 203,
        description: "203Description",
        src: "203Src.com",
        author: {
          id: 3,
          name: "Author3",
        },
        categoryId: 2,
      },

      204: {
        id: 204,
        description: "204Description",
        src: "204Src.com",
        author: {
          id: 4,
          name: "Author4",
        },
        categoryId: 2,
      },

      205: {
        id: 205,
        description: "205Description",
        src: "205Src.com",
        author: {
          id: 2,
          name: "Author2",
        },
        categoryId: 2,
      },

      206: {
        id: 206,
        description: "206Description",
        src: "206Src.com",
        author: {
          id: 2,
          name: "Author2",
        },
        categoryId: 2,
      },
    },
  },
};

const FromAuth = require("../../../../../context/auth");
FromAuth.useAuthContext = jest.fn().mockReturnValue({
  profile: {
    id: 2,
    name: "Author2",
  },
});

const ReactRedux = require("react-redux");
ReactRedux.useSelector = jest.fn().mockImplementation((fn) => fn(state));

const props = {
  categoryId: 1,
  categoryName: "Name1",
  currentPage: 1,
};

describe("PhotoGrid", () => {
  it("should render enough photos", () => {
    render(<PhotoGrid {...props} />);

    state.photo.allPhotoIdsByCatgoryIdsAndPageNumbers[1][1].forEach(
      (photoId) => {
        const photo = state.photo.byPhotoId[photoId];

        expect(
          document.querySelector(`img[src="${photo.src}"]`)
        ).not.toBeNull();
      }
    );
  });
});
