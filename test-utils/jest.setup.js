// Do what you need to set up your test
console.log("setup test: jest.setup.js");

global.chrome = {
  runtime: {
    onMessage: {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    },
    sendMessage: jest.fn(),
  },
  tabs: {
    onUpdated: {
      addListener: jest.fn(),
    },
  },
};

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testEnvironment: "jsdom",
};
document.querySelector = jest.fn().mockImplementation((selector) => {
  if (selector === ".firstLine") {
    return { textContent: "content view" };
  }

  return null;
});
