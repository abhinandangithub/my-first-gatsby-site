import { graphql, useStaticQuery } from "gatsby";

export const get = ({ url }) => {
  return fetch("https://www.myminifactory.com" + url)
    .then((data) => data.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
