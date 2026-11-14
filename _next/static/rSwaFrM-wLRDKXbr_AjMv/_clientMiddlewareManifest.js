self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/byt-landing(?:\\/(_next\\/data\\/[^/]{1,}))?\\/app(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/app/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()